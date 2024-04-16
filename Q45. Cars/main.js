"use strict";
// Task 45:
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const myCar = createCar("Toyota", "Civic", { color: "black", year: 2024 });
console.log(myCar);
