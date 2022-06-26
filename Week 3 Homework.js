// #1 Create an array of pizzaToppings with at least four different toppings
function greetCustomer() {
  console.log(" Welcome to Pizza house, our toppings are ")
}
greetCustomer()
// #2 Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings
const pizzaToppings = ["Spinach", "Tomatoes", "Black Olives", "Mushrooms", "Anchovies"];
for (let name of pizzaToppings) {
  console.log(greetCustomer + pizzaToppings)
}
/ #3 Create a getPizzaOrder function that has the parameters size, crust,
// and an indefinite amount of toppings as inputs. Prints the order,
// i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
let pizzaSize = "Large"
let pizzaCrust = "cheese stuffed"
let repeatOrder;
function myPizzaOrder() {
  repeatOrder = 'One ${pizzaSize} ${pizzaCrust} crust pizza with';
  return repeatOrder;
}
myPizzaOrder()
console.log(repeatOrder + pizzaToppings + " coming right up! ")
