import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import CustomText from "./CustomText";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading time
    setTimeout(() => {
      navigation.replace("Home");
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/chess.png")} style={styles.image} />
      <CustomText style={styles.title}>CamEra</CustomText>
      <CustomText style={styles.subtitle}>Find your dream camera</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD7D7",
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
  },
});

export default LoadingScreen;
