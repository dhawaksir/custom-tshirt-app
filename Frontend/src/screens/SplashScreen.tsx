import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Splash">;
};

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem("hasLaunched");

        setTimeout(() => {
          if (hasLaunched === null) {
            AsyncStorage.setItem("hasLaunched", "true");
            navigation.replace("Onboarding");
          } else {
            navigation.replace("Home");
          }
        }, 2000);
      } catch (e) {
        console.log("Error checking first launch:", e);
        navigation.replace("Home");
      }
    };

    checkFirstLaunch();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")} // 👈 Update this path if needed
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.tagline}>Design Your Style</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 18,
    color: "#555",
  },
});
