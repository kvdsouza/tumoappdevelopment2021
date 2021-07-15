import * as React from 'react';

import FirstScreen from './screens/firstScreen';
import SecondScreen from './screens/secondScreen';
import Learn from './screens/learn';
import Test from './screens/test';
import AlphabetTest from './screens/AlphabetTest';
import Alphabet from './screens/Alphabet';
import Communication from './screens/Communication';
import Food from './screens/Food';
import Nature from './screens/Nature';
import Numbers from './screens/Numbers';
import Colors from './screens/Colors';
import CommunicationTest from './screens/CommunicationTest';
import FoodTest from './screens/FoodTest';
import NatureTest from './screens/NatureTest';
import NumbersTest from './screens/NumbersTest';
import ColorsTest from './screens/ColorsTest';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*const AppStack = createStackNavigator({
  First: FirstScreen,
  Second: SecondScreen,
  Learn: Learn,
  Test: Test,
  Alphabet: Alphabet,
  AlphabetTest: AlphabetTest,
  Communication: Communication,
  Food: Food,
  Nature: Nature,
  Numbers: Numbers,
  Colors:Colors,
  CommunicationTest: CommunicationTest,
  FoodTest: FoodTest,
  NatureTest: NatureTest,
  NumbersTest: NumbersTest,
  ColorsTest:ColorsTest,
});*/
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="First"
        component={FirstScreen}
      />
      <Stack.Screen
        options={{ title: '' }}
        name="Second"
        component={SecondScreen}
      />
      <Stack.Screen options={{ title: '' }} name="Learn" component={Learn} />
      <Stack.Screen options={{ title: '' }} name="Test" component={Test} />
      <Stack.Screen
        options={{ title: '' }}
        name="Alphabet"
        component={Alphabet}
      />
      <Stack.Screen
        options={{ title: '' }}
        name="AlphabetTest"
        component={AlphabetTest}
      />
      <Stack.Screen
        options={{ title: '' }}
        name="Communication"
        component={Communication}
      />
      <Stack.Screen options={{ title: '' }} name="Food" component={Food} />
      <Stack.Screen options={{ title: '' }} name="Nature" component={Nature} />
      <Stack.Screen
        options={{ title: '' }}
        name="Numbers"
        component={Numbers}
      />
      <Stack.Screen options={{ title: '' }} name="Colors" component={Colors} />
      <Stack.Screen
        options={{ title: '' }}
        name="CommunicationTest"
        component={CommunicationTest}
      />
      <Stack.Screen
        options={{ title: '' }}
        name="FoodTest"
        component={FoodTest}
      />
      <Stack.Screen
        options={{ title: '' }}
        name="NatureTest"
        component={NatureTest}
      />
      <Stack.Screen
        options={{ title: '' }}
        name="NumbersTest"
        component={NumbersTest}
      />
      <Stack.Screen
        options={{ title: '' }}
        name="ColorsTest"
        component={ColorsTest}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

//const App = createAppContainer(AppStack);
//export default App;
