import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const BrandScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { brandName, models } = route.params;

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredModels, setFilteredModels] = useState(models);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = models.filter((model) =>
        model.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredModels(filtered);
    } else {
      setFilteredModels(models);
    }
  };

  const handleModelPress = (model) => {
    navigation.navigate("ModelScreen", {
      brandName,
      modelName: model,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.brandText}>{brandName}</Text>
        <Text style={styles.contentText}>Popular Models</Text>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder={`Search ${brandName} models...`}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredModels}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.modelItem}
            onPress={() => handleModelPress(item)}
          >
            <Text style={styles.modelText}>{item}</Text>
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
    padding: 20,
  },
  top: {
    marginTop: 60,
  },
  brandText: {
    fontSize: 24,
    fontFamily: "AveriaSansLibre-Bold",
    textAlign: "center",
  },
  contentText: {
    fontSize: 16,
    textAlign: "center",
  },
  searchBar: {
    marginTop: 20,
    width: "60%",
    height: 40,
    borderColor: "FFD7D7",
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "#F6BABA",
  },
  list: {
    marginTop: 20,
    width: "50%",
    padding: 5,
  },
  modelItem: {
    padding: 10,
    backgroundColor: "#A36062",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  modelText: {
    fontSize: 16,
    color: "#F4A9A9",
    textAlign: "center",
  },
});

export default BrandScreen;
