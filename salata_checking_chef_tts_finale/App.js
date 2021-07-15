import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './components/firstpage';
import SecondPage from './components/secondpage';
import ThirdPage from './components/thirdpage';
import FourthPage from './components/fourthpage';
import FifthPage from './components/fifthpage';
import SixthPage from './components/sixthpage';


const Stack = createStackNavigator();






// function Tabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Messages" component={Messages} />
//     </Tab.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
        <Stack.Screen name="FourthPage" component={FourthPage} />
        <Stack.Screen name="FifthPage" component={FifthPage} />
        <Stack.Screen name="SixthPage" component={SixthPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const App = () => {
//   return (
//     <View>
//       <Firstpage />
//     </View>
//   );
// };

export default App;
