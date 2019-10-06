// Business Logic

function Address (streetAddress, city) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.deliveryAddress = (streetAddress + "  " + city);
}
