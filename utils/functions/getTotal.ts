import coffeeSizeCollection from "../../constants/mocks/coffeeSize.mock";
import coffeeTypeCollection from "../../constants/mocks/coffeeType.mock";
import paymentTypeCollection from "../../constants/mocks/payment.mock";
import { FormValues } from "../../utils/types/types";

const getTotal = (data: FormValues) => {
  const { quantity = 0, type, size, payment } = data;
  const coffeeTypePrice = coffeeTypeCollection.find((item) => item.id === type)
    ?.price as number;
  const coffeeSizePrice = coffeeSizeCollection.find((item) => item.id === size)
    ?.price as number;
  const paymentMethodDiscount = paymentTypeCollection.find(
    (item) => item.id === payment
  )?.discount as number;

  let total = quantity * coffeeTypePrice * coffeeSizePrice;
  total -= paymentMethodDiscount * total;
  return total;
};

export default getTotal;
