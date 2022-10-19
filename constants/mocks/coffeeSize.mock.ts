import IBaseInterface from '../../utils/interfaces/IBaseInterfase';

const coffeeSizeCollection: readonly IBaseInterface[] = Object.freeze([
    {
        id: 1,
        name: "Short (8 onz)",
        price: 1,
    },
    {
        id: 2,
        name: "Tall (12 onz)",
        price: 1.5,
    },
    {
        id: 3,
        name: "Grande (16 onz)",
        price: 2.0,
    }
]);

export default coffeeSizeCollection;