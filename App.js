import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/screens/Home/Home";
import ProductDetails from "./src/screens/ProductDetails/ProductDetails";
import Cart from "./src/screens/Cart/Cart";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="ProductDetails" component={ProductDetails} />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    </NavigationContainer>

  );

}

export default App;