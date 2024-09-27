import PinCodeEntry from "@/components/pinCode";
import { Colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Typography";
import { PinCodeContext } from "@/contexts/PinCodeContext";
import { useContext, useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";

const RenderDotPinCode = ({ isPinCode }: { isPinCode?: boolean }) => {
  const style = StyleSheet.create({
    dot: {
      width: 14,
      height: 14,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: isPinCode ? "transparent" : "#807373",
      backgroundColor: isPinCode ? Colors.myTheme.background : "transparent",
    },
  });
  return <View style={style.dot}></View>;
};

const VerifyPinCode = () => {
  const { pinCode, setIsSuccessPinCode, isVerifiedPinCode } =
    useContext(PinCodeContext);

  useEffect(() => {
    if (pinCode === "4") {
      setIsSuccessPinCode(true);
    }
  }, [pinCode]);

  const amountPinCode = 6;

  return (
    <View style={style.screenContainer}>
      <View style={style.viewPinCodeContainer}>
        <Text style={style.titlePinCode}>
          {isVerifiedPinCode ? "ยืนยันรหัส PIN CODE" : "ตั้งรหัส PIN CODE"}
        </Text>
        <View style={style.dotContainer}>
          {Array.from({ length: amountPinCode }).map((_, i) => (
            <RenderDotPinCode key={i} isPinCode={pinCode ? true : false} />
          ))}
        </View>
      </View>
      <PinCodeEntry />
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
    gap: 30,
  },
  viewPinCodeContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  dotContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  titlePinCode: {
    fontSize: fontSize.h4.size,
    letterSpacing: 0.25,
    fontFamily: fontFamily.fontFamily,
    textAlign: "left",
  },
});
export default VerifyPinCode;
