import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const camBrands = [
  "Canon",
  "Sony",
  "Samsung",
  "Nikon",
  "LUMIX",
  "Panasonic",
  "Fuji Film",
  "Casio",
  "Olympus",
];

const brandModels = {
  Canon: [
    "PowerShot 600",
    "PowerShot 350",
    "IXY 90F",
    "IXUS 20IS",
    "SX740",
    "ELPH 160",
    "IXUS 190",
    "IXUS 80IS",
    "Powershot a480",
    "Powershot a400",
    "Powershot IXY 650",
    // add the rest of the Canon models here
  ],
  Sony: [
    "Cybershot DSC P1",
    "Cybershot DSC S30",
    "Cybershot DSC S50",
    "Cybershot DSC P30",
    "Cybershot DSC P50",
    "Cybershot DSC P20",
    "Cybershot DSC P71",
    "Cybershot DSC P9",
    "Cybershot DSC P7",
    "Cybershot DSC U10",
    "Cybershot DSC U20",
    "Cybershot DSC P32",
    "Cybershot DSC WX5",
    "Cybershot DSC W610",
    "Cybershot DSC W80",
    "Cybershot DSC W510",
    "Cybershot DSC W830",
    "Cybershot DSC P52",
    "Cybershot DSC T1",
    "Cybershot DSC T11",
    "Cybershot DSC T33",
    "Mavica MVC FD200",
  ],
  // add other brand models here
};

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState(camBrands);
  const navigation = useNavigation();

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = camBrands.filter((brand) =>
        brand.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBrands(filtered);
    } else {
      setFilteredBrands(camBrands);
    }
  };

  const handleBrandPress = (brand) => {
    navigation.navigate("BrandScreen", {
      brandName: brand,
      models: brandModels[brand] || [],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../assets/icons/chess.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}></Text>
          <Text style={styles.subtitle}>
            Choose a brand below. Don't see your brand? Click the search button.
          </Text>
        </View>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search camera brands..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredBrands}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.brandItem}
            onPress={() => handleBrandPress(item)}
          >
            <Text style={styles.brandText}>{item}</Text>
          </TouchableOpacity>
        )}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
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
  top: {
    marginTop: 60,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  title: { fontSize: 15, marginBottom: 5 },
  subtitle: { fontSize: 15 },
  image: { width: 60, height: 90, resizeMode: "contain", marginRight: 10 },
  textContainer: { flexDirection: "column", maxWidth: "70%" },
  searchBar: {
    marginTop: 20,
    width: "70%",
    height: 40,
    borderColor: "FFD7D7",
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "#F6BABA",
  },
  list: { marginTop: 20, width: "35%" },
  brandItem: {
    padding: 15,
    backgroundColor: "#A36062",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  brandText: {
    fontSize: 16,
    fontFamily: "AveriaSansLibre-Regular",
    color: "#F4A9A9",
  },
});

export default HomeScreen;
