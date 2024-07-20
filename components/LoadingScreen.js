import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading time
    setTimeout(() => {
      navigation.replace("Home"); // Navigate to Home screen after 3 seconds
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icons/chess.png")}
        style={styles.image}
      />
      <Text style={styles.title}>CamEra</Text>
      <Text style={styles.subtitle}>Find your dream camera</Text>
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
    color: "#666",
  },
});

export default LoadingScreen;
