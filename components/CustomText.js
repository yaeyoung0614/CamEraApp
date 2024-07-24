import React from "react";
import { Text } from "react-native";

const CustomText = ({ children, style, ...rest }) => {
  return (
    <Text style={[{ fontFamily: "AveriaRegular" }, style]} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
