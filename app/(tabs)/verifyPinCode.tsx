import { fontFamily, fontSize } from "@/constants/Typography";
import { StyleSheet, Text, View } from "react-native";

const VerifyPinCode = () => {
  return (
    <View style={style.screenContainer}>
      <View style={style.viewPinCodeContainer}>
        <Text style={style.titlePinCode}>ตั้งรหัส PIN CODE</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 32,
  },
  viewPinCodeContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  titlePinCode: {
    fontSize: fontSize.h4.size,
    letterSpacing: 0.25,
    fontFamily: fontFamily.fontFamily,
    textAlign: "left",
  },
});

export default VerifyPinCode;
