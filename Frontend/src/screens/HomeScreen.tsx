// Frontend/src/screens/HomeScreen.tsx

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👕 Welcome to Custom T-Shirt App</Text>
      <Button
        title="Go to Designer"
        onPress={() => navigation.navigate("Designer")}
      />
      {/* <Button
        title="View Cart"
        onPress={() => navigation.navigate("Cart")}
        style={styles.button}
      />
      <Button
        title="Make Payment"
        onPress={() => navigation.navigate("Payment")}
        style={styles.button}
      />
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
        style={styles.button}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    marginTop: 15,
  },
});

export default HomeScreen;
