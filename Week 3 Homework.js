// #1 Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["Spinach", "Tomatoes", "Black Olives", "Mushrooms", "Anchovies"];


// #2 Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings

function greetCustomer() {

  let greeting = "Welcome to CJs Pizza, our toppings are";
  for (let topping of pizzaToppings){
    greeting += `${topping},`;
    console.log(greeting);
  }
  console.log(greeting);
}
greetCustomer();

// #3 Create a getPizzaOrder function that has the parameters size, crust,
// and an indefinite amount of toppings as inputs. Prints the order,
// i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder( size, crust, ...toppings){
  let order = `One ${size} ${crust} crust pizza with`;
  for(let topping of toppings){
    order += `${topping}`;
  }
  console.log(`${order}....coming up!`);
  return[size,crust,toppings];
}
getPizzaOrder(
  "large",
  "stuffed",
  "spinach",
  "chicken"
);

//4 Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
let customerOrder = getPizzaOrder("large", "stuffed", "spinach","chicken" );
function preparePizza([orderSize, orderCrust, orderToppings]){
  console.log("....your pizza is cooking");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
  //console.log("Your pizza is cooking now");

}
let cookedPizza = preparePizza(customerOrder);
console.log(preparePizza(customerOrder))

//5
function servePizza(pizza) {
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;

  for(let toppings of pizza.toppings){
    orderReady += `${toppings},`;
  }
  console.log(`${orderReady}. Enjoy!`)
  return pizza;
}
servePizza(cookedPizza);
//6
greetCustomer();
const myPizza = servePizza(preparePizza(getPizzaOrder("large", "stuffed", "spinach", "chicken")));
console.log(myPizza);
