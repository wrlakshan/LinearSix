function orderSalesByTotal(sales) {
  return sales
    .map((sale) => ({
      ...sale,
      Total: sale.amount * sale.quantity,
    }))
    .sort((a, b) => b.Total - a.Total);
}

const sales = [
  { amount: 10000, quantity: 10 },
  { amount: 50000, quantity: 5 },
  { amount: 20000, quantity: 2 },
];

console.log("Sales Array:-", sales);
console.log("Ordered Sales Array:-", orderSalesByTotal(sales));
