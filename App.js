import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen"; // replace this with your actual home screen
import LoadingScreen from "./components/LoadingScreen";
import BrandScreen from "./components/BrandScreen";
import ModelScreen from "./components/ModelScreen";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

function App() {
  console.log("app");

  const [fontsLoaded] = useFonts({
    AveriaRegular: require("./assets/fonts/AveriaSansLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BrandScreen"
          component={BrandScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ModelScreen"
          component={ModelScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
