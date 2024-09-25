import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PinCodeEntry = () => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "DEL"];

  const handlePress = (value: any) => {
    if (value === "DEL") {
      // Handle delete logic
    } else {
      // Handle pin code input
    }
  };

  return (
    <View style={styles.container}>
      {buttons.map((buttonValue, index) => (
        <TouchableOpacity
          key={index}
          style={buttonValue ? styles.buttonActive : styles.buttonNotActive}
          onPress={() => handlePress(buttonValue)}
        >
          <Text style={styles.buttonText}>{buttonValue}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
    rowGap: 10,
    columnGap: 8,
  },
  buttonActive: {
    width: "28%",
    height: 80,
    margin: "1.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#b9b3b3",
  },
  buttonNotActive: {
    width: "28%",
    height: 80,
    margin: "1.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 0,
    borderColor: "#b9b3b3",
  },
  buttonText: {
    fontSize: 32,
    color: "#333",
  },
});

export default PinCodeEntry;
