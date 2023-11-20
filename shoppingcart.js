// create a new array (itemsForPayment) that includes only the items marked as "selected" for payment. 
// We also calculate the total amount for payment by using the reduce() method.

const shoppingCart = [
    { id: 1, product: "Laptop", price: 999.99, selected: true },
    { id: 2, product: "Headphones", price: 49.99, selected: false },
    { id: 3, product: "Mouse", price: 19.99, selected: true },
    { id: 4, product: "Backpack", price: 39.99, selected: false },
    { id: 5, product: "External Hard Drive", price: 79.99, selected: true }
  ];

  const itemsForPayments = (shoppingCart)=>{
    return shoppingCart.filter((item)=>item.selected)
  }
  console.log("shoppingCart:", itemsForPayments(shoppingCart));


const total = itemsForPayments(shoppingCart).reduce((total, item)=> total + item.price, 0);

console.log("total:", total.toFixed(2));

// or use this direct method
  
  // Use filter() to select items ready for payment
  const itemsForPayment = shoppingCart.filter(item => item.selected);
  
  // Display selected items
  console.log("Selected Items for Payment:", itemsForPayment);
  
  // Calculate total amount for payment
  const totalAmount = itemsForPayment.reduce((total, item) => total + item.price, 0);
  
  // Display total amount
  console.log("Total Amount for Payment:", totalAmount.toFixed(2));

