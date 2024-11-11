// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: "menunggu",
  };
  orders.push(newOrder);
}

// addOrder('Alice', [
//   { name: 'Nasi Goreng', price: 20000 },
//   { name: 'Teh Manis', price: 5000 }
// ]);

// addOrder('Bob', [
//   { name: 'Mie Goreng', price: 15000 },
//   { name: 'Kopi', price: 10000 }
// ]);

// console.log(orders);
// console.log(JSON.stringify(orders, null, 2));

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const statusValidate = ["menunggu", "Diproses", "Selesai"];

  if (!statusValidate.includes(status)) {
    // console.log("hanya menerima status 'menunggu', 'Diproses', 'Selesai' ");
    return false;
  }

  const orderIndex = orders.findIndex((order) => order.id === orderId);

  if (orderIndex !== -1) {
    orders[orderIndex].status = status;
    return true;
  }
  return false;
}

// updateOrderStatus(orders[0].id, 'Selesai');
// console.log(orders);

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const selesaiOrders = orders.filter((order) => order.status === "Selesai");
  let total = 0;
  for (let order of selesaiOrders) {
    total += order.totalPrice;
  }
  return total;
}
// console.log(calculateTotalRevenue());

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id); //intine dia bikin orders[]baru tanpa ada roder yang idnya sama dengan yang di select
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
