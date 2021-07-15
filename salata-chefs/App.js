import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './components/HomePage';
import OrderScreen from './components/Orderscreen';


const Stack = createStackNavigator();
//options={{headerShown:false}} 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='screen'>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomePage} />
        <Stack.Screen options={{headerShown:false}} name="Orders" component={OrderScreen} />
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
