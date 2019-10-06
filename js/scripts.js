//Business Logic
var totalPizzaPrice = [];
function Order (pizzaType){
    this.pizzaType = pizzaType;
    this.toppings = toppings;
    this.mushroom = 1000;
    this.margherita = 1100;
    this.meditterranean = 1200;
    this.peperroni = 1300;
    this.omnivore =  1400;
    this.hawaiian = 1500;
    this.pizzaPrice = 0;
}

Order.prototype.pizzaCost = function () {
    if (this.pizzaType === "Small 10 in.") {
        this.pizzaPrice += 100;
    } else if (this.pizzaType === "Medium 14 in.") {
        this.pizzaPrice += 200;
    } else if (this.pizzaType === "Large 18 in.") {
        this.pizzaPrice += 300;
    } else if (this.pizzaType === "Xtra Large 22 in."){

    }
    if (this.toppings === "cheese"){
        this.pizzaPrice += 50;
    } else if (this.toppings === "mushroom") {
        this.pizzaPrice += 70;
    } else if (this.toppings === "ham"){
        this.pizzaPrice += 150;
    } else if (this.toppings === "olives"){
        this.pizzaPrice += 100;
    }
}

Order.prototype.finalPrice = function () {
    var totalPrice = 0;
    for (var arrayElement = 0; arrayElement < totalPizzaPrice.length; arrayElement ++) {
      totalPrice += totalPizzaPrice[arrayElement]; 
    }
    return totalPrice;
  }

//Delivery
  function deliveryAddress (streetAddress, city) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.deliveryAddress = (streetAddress + "  " + city);
  }

  //User Interface
  $(document).ready(function(event) {

    $("form#address-form").submit(function(event) {
        event.preventDefault();
        var streetAddress = $("input#streetaddy").val();
        var city = $("input#city").val();
        var newAddress = new Address(streetAddress, city)
        $("#deliverto").text("DELIVER TO: " + newAddress.deliveryAddress);
      });

    
    $("form#pizza").submit(function(event) {
        event.preventDefault();
        var pizzaType = $("select#type").val();
        var size = $("select#size").val();
        var crust = $("select#crust").val();
        var sauce = $("select#sauce").val();
        var quantity = $("select#quantity").val();
        var toppings = $("select#toppings").val();
        var pizzaDetails = (pizzaType + " - " + size + ", " + crust + ", " + sauce + ", " + quantity + ", " + toppings);
        var newPizzaOrder = new Order(pizzaType);
        newPizzaOrder.pizzaCost();
        totalPizzaPrice.push(newPizzaOrder.pizzaPrice);
        $("#pizza-details).show();
        $("#final-cost").text(newPizzaOrder.finalCost());
        // $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
        $("#type, #size, #crust, #sauce, #quantity, #toppings").val("");
    });
  });
  
  