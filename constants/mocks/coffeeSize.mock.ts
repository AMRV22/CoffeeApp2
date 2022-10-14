import ICoffeeSize from '../../utils/interfaces/ICoffeeSize';

const coffeeSizeCollection: readonly ICoffeeSize[] = Object.freeze([
    {
        id: 1,
        name: "Short (8 onz)",
        price: "1.00",
    },
    {
        id: 2,
        name: "Tall (12 onz)",
        price: "1.50",
    },
    {
        id: 3,
        name: "Grande (16 onz)",
        price: "2.00",
    }
]);

export default coffeeSizeCollection;