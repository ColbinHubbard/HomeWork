// #1 Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["Spinach", "Tomatoes", "Black Olives", "Mushrooms", "Anchovies"];
for (let topping of pizzaToppings) {
  console.log(topping);
}

// #2 Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings

function greetCustomer() {

  return(" Welcome to Pizza house, our toppings are " + pizzaToppings);}
greetCustomer()


// #3 Create a getPizzaOrder function that has the parameters size, crust,
// and an indefinite amount of toppings as inputs. Prints the order,
// i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder( size, crust, toppings){
  //let toppingsList = "";
  //for (let topping of toppings) {
  //toppingsList =+ topping + ", ";
  //}
  console.log( "  One  " +   size +    crust +   " crust pizza with  " +    toppings +   "  coming up  " );
}
  //return pizzaArray = [size, crust, toppings];

getPizzaOrder("large", "stuffed", "spinach and chicken");


//4 Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza([size, crust, toppings]){
  let pizzaObject = {
    size: "large",
    crust: "stuffed",
    toppings: "spinach","chicken"]
  }
  //console.log("Your pizza is cooking now");
  return "Cooking" + pizzaObject;
}
preparePizza();
console.log(preparePizza);

//5
function servePizza(pizzaObject) {
  console.log( `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust}, pizza with ${pizzaObject.toppings}...Enjoy`)
  return pizzaObject
}
//6
greetCustomer(servePizza(preparePizza(getPizzaOrder('large','stuffed','spinach', 'chicken'))));

