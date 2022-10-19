import { StyleSheet, View, Text } from "react-native";
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Input,
  Button,
} from "@ui-kitten/components";
import { ChangeEvent, useState } from "react";
import ResumeOrder from "../../components/resumeOrder";
import coffeeSizeCollection from "../../constants/mocks/coffeeSize.mock";
import coffeeTypeCollection from "../../constants/mocks/coffeeType.mock";
import paymentTypeCollection from "../../constants/mocks/payment.mock";
import { useForm, Controller } from "react-hook-form";
import { FormValues } from "../../utils/types/types";



const CoffeeScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState<FormValues>({});



  const validateNumber = (value: string) => {
    const matches: any = value.match(/^\d+$/);
      return matches?.length > 0 || "No es un número";
  };

  const onSubmit = (data: FormValues) => {
    setFormData(data);
  };
  return (
    <View>
      <View style={[styles.selectionContainer]}>
        <Text style={styles.title}>Coffee App</Text>
        <Layout style={styles.selectContainer} level="1">
          <Controller
            control={control}
            name="size"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select
                aria-invalid={!!errors.size}
                value={
                  coffeeSizeCollection.find(
                    (target) => target.id == Number(value)
                  )?.name
                }
                onSelect={(index) => {
                  const parsedIndex = index as IndexPath;
                  onChange(coffeeSizeCollection[parsedIndex.row].id);
                }}
                placeholder="Seleccione tamaño de café"
              >
                {coffeeSizeCollection.map((item, index) => (
                  <SelectItem key={index} title={item.name} />
                ))}
              </Select>
            )}
          />
          {errors.size && <Text style={{ color: "red" }}>Campo requerido</Text>}
        </Layout>
        <Layout style={styles.selectContainer} level="1">
          <Controller
            control={control}
            name="type"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select
                aria-invalid={!!errors.type}
                value={
                  coffeeTypeCollection.find(
                    (target) => target.id == Number(value)
                  )?.name
                }
                onSelect={(index) => {
                  const parsedIndex = index as IndexPath;
                  onChange(coffeeTypeCollection[parsedIndex.row].id);
                }}
                placeholder="Seleccione tipo de café"
              >
                {coffeeTypeCollection.map((item, index) => (
                  <SelectItem key={index} title={item.name} />
                ))}
              </Select>
            )}
          />
          {errors.type && <Text style={{ color: "red" }}>Campo requerido</Text>}
        </Layout>
        <Layout style={styles.selectContainerRow} level="1">
          <Layout style={styles.customInputSpace}>
            <Controller
              control={control}
              name="payment"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Select
                  aria-invalid={!!errors.payment}
                  value={
                    paymentTypeCollection.find(
                      (target) => target.id == Number(value)
                    )?.name
                  }
                  onSelect={(index) => {
                    const parsedIndex = index as IndexPath;
                    onChange(paymentTypeCollection[parsedIndex.row].id);
                  }}
                  placeholder="Tipo de pago"
                >
                  {paymentTypeCollection.map((item, index) => (
                    <SelectItem key={index} title={item.name} />
                  ))}
                </Select>
              )}
            />
            {errors.payment && (
              <Text style={{ color: "red" }}>Campo requerido</Text>
            )}
          </Layout>

          <Layout style={styles.customInputSpace}>
            <Controller
              control={control}
              rules={{ required: true, validate: validateNumber }}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={onChange}
                  value={value}
                  placeholder="0"
                  aria-invalid={!!errors.quantity}
                />
              )}
              name="quantity"
            />
            {errors.quantity && (
              <Text style={{ color: "red" }}>{errors.quantity.type == "required" ? "Campo Requerido" : errors.quantity.message as string }</Text>
            )}
          </Layout>
        </Layout>
      </View>
      <ResumeOrder formValues={formData} />
      <Layout style={styles.buttonContainer} level="1">
        <Button onPress={handleSubmit(onSubmit)} status="info">
          Calcular
        </Button>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  selectionContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 60,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
  },
  selectContainer: {
    paddingBottom: 25,
  },
  selectContainerRow: {
    flexDirection: "row",
    paddingBottom: 25,
    justifyContent: "space-between",
  },
  customInputSpace: {
    flex: 1,
    margin: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 14,
    marginTop: 24,
  },
});

export default CoffeeScreen;
