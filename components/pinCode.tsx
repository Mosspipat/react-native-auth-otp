import { Colors } from "@/constants/Colors";
import { PinCodeContext } from "@/contexts/PinCodeContext";
import { router } from "expo-router";
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/FontAwesome5";

const PinCodeEntry = ({
  onPressPin,
}: {
  onPressPin: (pinCode: string) => void;
}) => {
  const { isVerifiedPinCode } = useContext(PinCodeContext);

  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "fingerSign",
    "0",
    "DEL",
  ];

  const ButtonPinIcon = ({ buttonValue }: { buttonValue: string }) => {
    switch (buttonValue) {
      case "fingerSign":
        return isVerifiedPinCode ? (
          <Ionicons name="fingerprint" size={40} color={Colors.myTheme.icon} />
        ) : null;
      case "DEL":
        return <Ionicons name="backspace" size={24} color="black" />;
      default:
        return <Text style={styles.buttonText}>{buttonValue}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {buttons.map((buttonValue, index) => (
        <TouchableOpacity
          key={index}
          style={
            buttonValue !== "fingerSign"
              ? styles.buttonActive
              : styles.buttonNotActive
          }
          onPress={() => onPressPin(buttonValue)}
        >
          <ButtonPinIcon buttonValue={buttonValue} />
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
    paddingHorizontal: 20,
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
