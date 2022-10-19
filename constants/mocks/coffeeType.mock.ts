import IBaseInterface from '../../utils/interfaces/IBaseInterfase';

const coffeeTypeCollection: readonly IBaseInterface[] = Object.freeze([
    {
        id: 1,
        name: "Mocha",
        price: 2,
    },
    {
        id: 2,
        name: "Te chai",
        price: 2.5,
    },
    {
        id: 3,
        name: "Americano",
        price: 1.5,
    },
    {
        id: 4,
        name: "Frappe",
        price: 3.0,
    }
]);

export default coffeeTypeCollection;