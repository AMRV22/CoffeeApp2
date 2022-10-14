import { StyleSheet, View, Text } from "react-native";
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Input,
  Button
} from "@ui-kitten/components";
import { ChangeEvent, useState } from "react";
import ResumeOrder from "../../components/resumeOrder";
import coffeeSizeCollection from "../../constants/mocks/coffeeSize.mock";
import coffeeTypeCollection from "../../constants/mocks/coffeeType.mock";
import paymentTypeCollection from "../../constants/mocks/payment.mock";
import {useForm, Controller} from "react-hook-form";

type Nullable<T> = T | null;

// class CoffeeOrder {
//   quantity: Nullable<number> = 0;
//   size: Nullable<string> = "";
//   type: Nullable<string> = "";
//   payment: Nullable<string> = "";
//   discount: Nullable<string> = "";
//   [key: string]: string | Nullable<number>;
// }

const CoffeeScreen = () => {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
   
  return (
    <View>
      <View style={[styles.selectionContainer]}>
        <Text style={styles.title}>Coffee App</Text>
        <Layout style={styles.selectContainer} level="1">
          <Controller 
            control={control}
            name="size"
            render={({field: {onChange, value}}) => (
              <Select
              value={value}
              onSelect={(index) => {
                const parsedIndex = index as IndexPath;
                onChange(coffeeSizeCollection[parsedIndex.row])
              }}
              placeholder="Seleccione tamaño de café"
            >
              {coffeeSizeCollection.map((item, index) => (
                <SelectItem key={index} title={item.name} />
              ))}
            </Select>
            )}
          />

        </Layout>
        <Layout style={styles.selectContainer} level="1">
          <Select placeholder="Seleccione tipo de café">
            {coffeeTypeCollection.map((item, index) => (
              <SelectItem key={index} title={item.name} />
            ))}
          </Select>
        </Layout>
        <Layout style={styles.selectContainerRow} level="1">
          <Select style={styles.customInputSpace} placeholder="Tipo de pago">
            {paymentTypeCollection.map((item, index) => (
              <SelectItem key={index} title={item.name} />
            ))}
          </Select>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) =>(
                <Input  onBlur={onBlur} onChangeText={value => onChange(value)} value={value} style={styles.customInputSpace} placeholder="0" />
            )}
            name="quantity"
           />          
          
        </Layout>
      </View>
      <ResumeOrder />
      <Layout style={styles.buttonContainer} level="1">
        <Button onPress={handleSubmit(onSubmit)} status="info">Calcular</Button>
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
  buttonContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    flex:1,
    padding:14,
    marginTop:24
  }
});

export default CoffeeScreen;
