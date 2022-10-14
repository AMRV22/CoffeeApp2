import { StatusBar } from 'expo-status-bar';
import CoffeeScreen from './screens/coffeeScreen/CoffeeScreen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar style="auto" />
      <CoffeeScreen></CoffeeScreen>

    </ApplicationProvider>
  );
}

