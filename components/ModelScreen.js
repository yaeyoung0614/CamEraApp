import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomText from "./CustomText";

const ModelScreen = () => {
  const route = useRoute();
  const { brandName, modelName } = route.params;
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState("General");

  const renderContent = () => {
    switch (selectedTab) {
      case "General":
        return (
          <CustomText style={styles.contentText}>
            Year Released: 2004
          </CustomText>
        );
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
        return (
          <CustomText style={styles.contentText}>Reviews Content</CustomText>
        );
      case "Buy Now":
        return (
          <CustomText style={styles.contentText}>Buy Now Content</CustomText>
        );
      default:
        return (
          <CustomText style={styles.contentText}>
            Year Released: 2004
          </CustomText>
        );
    }
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.modelText}>{modelName}</CustomText>
      <CustomText style={styles.title}>All you need to know</CustomText>
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
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#F6BABA" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={30} color="#F6BABA" />
        </TouchableOpacity>
      </View>
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
    fontFamily: "AveriaRegular",
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
    color: "#c46060",
  },
  tabText: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "AveriaRegular",
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
    margin: 0,
  },
  image: {
    width: 280,
    height: 150,
  },
  examplesContainer: {
    verticalAlign: "center",
    alignItems: "center",
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    width: "20%",
  },
});

export default ModelScreen;
