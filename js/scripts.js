//Business logic
// let blanks = ["cheese","ham","mushroom","olives","bacon",];
var sizePrice = 0;
var crustPrice = 0;
var totalToppings = 0;
var finalPrice = 0;

//Pizza Toppings Object
function ToppingsPrices(cheese,ham,mushroom,olives,bacon) {
	this.cheese = cheese;
	this.ham = ham;
	this.mushroom = mushroom;
	this.olives = olives;
	this.bacon = bacon;
}

let myToppingsPrices = new ToppingsPrices(100,200,200,300, 200);

//Pizza Size Prices
function PizzaSizePrice(small,large,xtralarge) {
	this.small = small;
	this.large = large;
	this.xtralarge = xtralarge;
}

let myPizzaSizePrice = new PizzaSizePrice(900,1000,1200);

// //Piza Crust prices
// function CrustPrice(skinny,thick){
// 	this.skinny = skinny;
// 	this.thick = thick;
// }

// let myCrustPrice = new CrustPrice(200,400);

//Pizza object
function Pizza(size,toppings) {
	this.size = size;
	this.totalToppings = toppings;
}
// //Create an instance of the object pizza
// myPizza = new Pizza(myPizzaSizePrice,myToppingsPrices);

//Final Price 
Pizza.prototype.getFinalPrice = function(myPizzaSizePrice,myCrustPrice,myToppingsPrices) {
	return myPizzaSizePrice + myCrustPrice + myToppingsPrices;
};

//User interface logic
$(function () {
	
	$("input#option1").click(function () {
		// $("#size-price").show();
		// $("#size-price").toggle();
		// let price = "$" + $("input#option1").val();
		sizePrice = myPizzaSizePrice.small;
		let displaySizePrice = "Kshs." + sizePrice;
		let displayFinalPrice = "Kshs." + sizePrice;
		console.log(sizePrice);
		
		//Display subtotal and final price
		$("#size-price").show().text(displaySizePrice);
		$("#total").show().text(displaySizePrice);
	});
	$("input#option2").click(function () {
		
		sizePrice = myPizzaSizePrice.large;
		let displaySizePrice = "Kshs." + sizePrice;
		let displayFinalPrice = "Kshs." + sizePrice;
		console.log(sizePrice);
		
		//Display subtotal and final price
		$("#size-price").show().text(displaySizePrice);
		$("#total").show().text(displaySizePrice);
		
	});
	$("input#option3").click(function () {
		
		sizePrice = myPizzaSizePrice.xtralarge;
		let displaySizePrice = "Kshs." + sizePrice;
		let displayFinalPrice = "Kshs." + sizePrice;
		console.log(sizePrice);
		
		//Display subtotal and final price
		$("#size-price").show().text(displaySizePrice);
		$("#total").show().text(displaySizePrice);
		
	});

	// $("input#crust1").click(function() {
	// 	crustPrice = myCrustPrice.skinny;
	// 	let displayCrustPrice = "Kshs." + crustPrice;
	// 	let displayFinalPrice = "Kshs." + crustPrice;

	// 	//Display subtotal and final price
	// 	$("#crust-price").show().text(displayCrustPrice);
	// 	$("#total").show().text(displayCrustPrice);
	// });

	// $("input#crust1").click(function() {
	// 	crustPrice = myCrustPrice.thick;
	// 	let displayCrustPrice = "Kshs." + crustPrice;
	// 	let displayFinalPrice = "Kshs." + crustPrice;

	// 	//Display subtotal and final price
	// 	$("#crust-price").show().text(displayCrustPrice);
	// 	$("#total").show().text(displayCrustPrice);
	// });
	
	var checkCheese = $('input[id="cheese"]');
	let numCheese = parseInt(myToppingsPrices.cheese);
	checkCheese.change(function () {
		if (this.checked === true) {
			totalToppings += numCheese;
			console.log(numCheese);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			finalPrice = sizePrice + totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numCheese;
			console.log(numCheese);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		}
	});
	
	var checkHam = $('input[id="ham"]');
	let numHam = parseInt(myToppingsPrices.ham);
	checkHam.change(function () {
		if (this.checked === true) {
			totalToppings += numHam;
			console.log(numHam);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			//add to final price
			finalPrice = sizePrice + totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numHam;
			console.log(numHam);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		}
	});
	var checkMushroom = $('input[id="mushroom"]');
	let numMushroom = parseInt(myToppingsPrices.mushroom);
	checkMushroom.change(function () {
		if (this.checked === true) {
			totalToppings += numMushroom;
			console.log(numMushroom);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			//add to final price
			finalPrice = sizePrice + totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numMushroom;
			console.log(numMushroom);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		}
	});
	var checkOlives = $('input[id="olives"]');
	let numOlives = parseInt(myToppingsPrices.olives);
	checkOlives.change(function () {
		if (this.checked === true) {
			totalToppings += numOlives;
			console.log(numOlives);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			//add to final price
			finalPrice = sizePrice + totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numOlives;
			console.log(numOlives);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		}
	});
	var checkBacon = $('input[id="bacon"]');
	let numBacon = parseInt(myToppingsPrices.bacon);
	checkBacon.change(function () {
		if (this.checked === true) {
			totalToppings += numBacon;
			console.log(numBacon);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			//add to final price
			finalPrice = sizePrice + totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		} else {
			totalToppings -= numBacon;
			console.log(numBacon);
			$("#toppings-price").show().text("Kshs." + totalToppings);
			
			//Subtract from final price
			finalPrice = sizePrice - totalToppings;
			$("#total").text("Kshs." + finalPrice);
			console.log(finalPrice);
		}
	});
	
});