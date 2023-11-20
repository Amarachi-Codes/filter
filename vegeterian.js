// create a new array containing only vegetarian toppings by excluding anything that includes "pepperoni". 

const pizzaIngredients = ["tomato sauce", "cheese", "pepperoni", "mushrooms", "olives", "onions"];

const vegeterian = (pizzaIngredients)=>{
    return pizzaIngredients.filter((pizzaIngredient)=>pizzaIngredient != "pepperoni")
}
console.log("pizzaIngredients:", vegeterian(pizzaIngredients));