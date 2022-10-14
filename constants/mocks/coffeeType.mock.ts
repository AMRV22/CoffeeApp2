import ICoffeeType from '../../utils/interfaces/iCoffeeType';

const coffeeTypeCollection: readonly ICoffeeType[] = Object.freeze([
    {
        id: 1,
        name: "Mocha",
        price: "2.00",
    },
    {
        id: 2,
        name: "Te chai",
        price: "2.50",
    },
    {
        id: 3,
        name: "Americano",
        price: "1.50",
    },
    {
        id: 4,
        name: "Frappe",
        price: "3.00",
    }
]);

export default coffeeTypeCollection;