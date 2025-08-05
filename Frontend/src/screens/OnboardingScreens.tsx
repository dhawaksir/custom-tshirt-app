import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import styles from "../Styles/OnboardingStyles";
import { RootStackParamList } from "../navigation/AppNavigator"; // ✅ Import navigation types

// 📱 Get screen width for carousel
const { width } = Dimensions.get("window");

// ✅ Define onboarding slides data
const onboardingData = [
  {
    title: "Welcome to CustomWear Co.",
    description: "Design your own custom T-Shirts easily.",
    image: require("../assets/onboard1.png"),
  },
  {
    title: "Personalize Your Style",
    description: "Choose fonts, colors, and graphics.",
    image: require("../assets/onboard2.png"),
  },
  {
    title: "Easy Ordering & Delivery",
    description: "Place orders and track them seamlessly.",
    image: require("../assets/onboard3.png"),
  },
];

// ✅ Type-safe navigation prop
type OnboardingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Onboarding">;
};

export default function OnboardingScreens({
  navigation,
}: OnboardingScreenProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleSkip = () => {
    navigation.replace("Home"); // or "Login" if Login screen is ready
  };

  const renderItem = ({ item }: { item: (typeof onboardingData)[0] }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3 }}>
        <Carousel
          ref={carouselRef}
          data={onboardingData}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => setActiveIndex(index)}
          scrollEnabled
        />
      </View>

      <View style={styles.footer}>
        {/* Dots */}
        <View style={styles.dots}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.dotActive : null,
              ]}
            />
          ))}
        </View>

        {/* Skip / Get Started Button */}
        <TouchableOpacity onPress={handleSkip} style={styles.button}>
          <Text style={styles.buttonText}>
            {activeIndex === onboardingData.length - 1 ? "Get Started" : "Skip"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
