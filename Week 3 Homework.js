// #1 Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["Spinach", "Tomatoes", "Black Olives", "Mushrooms", "Anchovies"];

function greetCustomer() {
  console.log(" Welcome to Pizza house, our toppings are ")
}
greetCustomer()
// #2 Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings

for (let topping of pizzaToppings) {
  console.log(topping);
}
// #3 Create a getPizzaOrder function that has the parameters size, crust,
// and an indefinite amount of toppings as inputs. Prints the order,
// i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder( size, crust, ...toppings){
  console.log("Size =", size);
  console.log("crust =", crust);
  console.log("toppings =", toppings);
  return console.log( "One" +  size +  crust +   "pizza with" +   toppings +   "coming up" )
}
console.log(getPizzaOrder);
getPizzaOrder("large", "stuffed", "spinach", "chicken");

//4 Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza["large", "stuffed crust","spinach", "chicken"]
