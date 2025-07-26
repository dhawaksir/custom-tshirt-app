// Frontend/src/navigation/AppNavigator.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
// import DesignerScreen from "../screens/DesignerScreen";
// import CartScreen from "../screens/CartScreen";
// import PaymentScreen from "../screens/PaymentScreen";
// import DashboardScreen from "../screens/DashboardScreen";

// Define your navigation params with TypeScript for type safety
export type RootStackParamList = {
  Home: undefined;
  Designer: undefined;
  Cart: undefined;
  Payment: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        {/* <Stack.Screen
          name="Designer"
          component={DesignerScreen}
          options={{ title: "Design Your T-Shirt" }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Your Cart" }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ title: "Payment" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: "Dashboard" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
