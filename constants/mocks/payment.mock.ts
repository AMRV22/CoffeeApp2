import IPaymentType from '../../utils/interfaces/iPaymentType';

const paymentTypeCollection: readonly IPaymentType[] = Object.freeze([
    {
        id: 1,
        name: "Efectivo",
        discount: 15,
    },
    {
        id: 2,
        name: "Tarjeta de crédito",
        discount: 5,
    },
]);

export default paymentTypeCollection;