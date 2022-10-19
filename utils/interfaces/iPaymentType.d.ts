import IBaseInterface from "./IBaseInterfase";

interface IPaymentType extends Omit<IBaseInterface, "price">{
    discount: number,
}

export default IPaymentType;