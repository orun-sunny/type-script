class Car {
    model: string;
    price: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;

    }
    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}