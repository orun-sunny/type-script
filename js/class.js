"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
