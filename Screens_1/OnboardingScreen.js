import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
//import Lottie from "lottie-react-native";

const {width, height} = Dimensions.get("window");

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#fff",
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <Lottie source={require("../assets/animations/boost.json")} autoPlay />
              </View>
            ),
            title: "Bienvenido a Qci Ubicate",
            subtitle: "App completamente offline",
          },
          {
            backgroundColor: "#fff",
            backgroundColor: "#a7f3d0",
            title: "Onboarding",
            subtitle: "Hecho con React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            backgroundColor: "#a7f3d0",
            title: "Onboarding",
            subtitle: "Hecho con React Native Onboarding Swiper",
          },
        ]}
        skipLabel="Omitir"
        nextLabel="Siguiente"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width*0.9,
    height: width
  },
});
