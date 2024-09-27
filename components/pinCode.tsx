import { PinCodeContext } from "@/contexts/PinCodeContext";
import { router } from "expo-router";
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/FontAwesome5";

const PinCodeEntry = () => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "DEL"];

  const {
    setPinCode,
    pinCode,
    isSuccessPinCode,
    setIsSuccessPinCode,
    setIsVerifiedPinCode,
    isVerifiedPinCode,
  } = useContext(PinCodeContext);

  const handlePress = (value: any) => {
    if (isVerifiedPinCode && pinCode === "4") {
      console.log("go to welcome app");
      router.push("/welcomeApp");
    } else if (isVerifiedPinCode) {
      setPinCode("4");
    } else if (isSuccessPinCode && value === "4") {
      console.log("change to next step");
      setIsVerifiedPinCode(true);
      setPinCode(null);
      setIsSuccessPinCode(false);
      router.push("/touchID");
    } else if (value === "4") {
      setPinCode("4");
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
          {buttonValue === "DEL" ? (
            <Ionicons name="backspace" size={30} color="#333" />
          ) : (
            <Text style={styles.buttonText}>{buttonValue}</Text>
          )}
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
