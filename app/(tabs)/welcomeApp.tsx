import { Colors } from "@/constants/Colors";
import { fontFamily } from "@/constants/Typography";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WelcomeApp = () => {
  return (
    <View style={style.screenContainer}>
      <Text style={style.title}>การทดสอบเสร็จสิ้น</Text>
      <Text style={style.description}>ขอขอบคุณสำหรับการร่วมทดสอบงาน</Text>
    </View>
  );
};

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: fontFamily.fontFamilyBold,
    textShadowColor: "rgba(53, 24, 195, 0.415)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: 18,
    fontFamily: fontFamily.fontFamilyBold,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default WelcomeApp;
