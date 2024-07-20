import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const ModelScreen = () => {
  const route = useRoute();
  const { brandName, modelName } = route.params;

  const [selectedTab, setSelectedTab] = useState("General");

  const renderContent = () => {
    switch (selectedTab) {
      case "General":
        return <Text style={styles.contentText}>Year Released: 2004</Text>;
      case "Examples":
        return (
          <View style={styles.examplesContainer}>
            <Image
              source={require("../assets/Example_Pics/Sony_DSC_P1_1.jpg")}
              style={styles.image}
            />
            <Image
              source={require("../assets/Example_Pics/Sony_DSC_P1_2.png")}
              style={styles.image}
            />
            <Image
              source={require("../assets/Example_Pics/Sony_DSC_P1_3.jpg")}
              style={styles.image}
            />
            <Image
              source={require("../assets/Example_Pics/Sony_DSC_P1_4.jpg")}
              style={styles.image}
            />
          </View>
        );
      case "Reviews":
        return <Text style={styles.contentText}>Reviews Content</Text>;
      case "Buy Now":
        return <Text style={styles.contentText}>Buy Now Content</Text>;
      default:
        return <Text style={styles.contentText}>Year Released: 2004</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.modelText}>{modelName}</Text>
      <Text style={styles.title}>All you need to know</Text>
      <View style={styles.tabContainer}>
        {["General", "Examples", "Reviews", "Buy Now"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFD7D7",
    padding: 30,
  },
  modelText: {
    fontSize: 24,
    fontFamily: "AveriaSansLibre-Bold",
    textAlign: "center",
    paddingTop: 35,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#A36062",
    borderRadius: 20,
    paddingVertical: 5,
    width: "100%",
    marginBottom: 10,
    padding: 10,
  },
  tab: {
    padding: 10,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#FFD7D7",
  },
  tabText: {
    fontSize: 16,
    color: "#FFF",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#7E5E5E",
    borderRadius: 20,
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    color: "#FFF",
  },
  image: {
    width: 280,
    height: 150,
    margin: 5,
  },
  examplesContainer: {
    verticalAlign: "center",
    alignItems: "center",
  },
});

export default ModelScreen;
