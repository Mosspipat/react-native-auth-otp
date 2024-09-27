import PinCodeEntry from "@/components/pinCode";
import { Colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Typography";
import { PinCodeContext } from "@/contexts/PinCodeContext";
import { router } from "expo-router";
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
  const {
    pinCode,
    setIsSuccessPinCode,
    isVerifiedPinCode,
    setIsVerifiedConnectApp,
    isVerifiedConnectApp,
    setPinCode,
    isSuccessPinCode,
    setIsVerifiedPinCode,
  } = useContext(PinCodeContext);

  useEffect(() => {
    if (pinCode === "4") {
      setIsSuccessPinCode(true);
    }
  }, [pinCode]);

  const amountPinCode = 6;

  const handlePressPin = (value: any) => {
    if (isVerifiedConnectApp && (value === "4" || value === "fingerSign")) {
      // go to welcome home app
      router.push("/welcomeApp");
    } else if (isVerifiedPinCode && (value === "4" || value === "fingerSign")) {
      setIsVerifiedConnectApp(true);
      setPinCode("4");
    } else if (isSuccessPinCode && value === "4") {
      setIsVerifiedPinCode(true);
      setPinCode(null);
      router.push("/touchID");
    } else if (value === "4") {
      setPinCode("4");
    }
  };

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
      <PinCodeEntry onPressPin={handlePressPin} />
      {isVerifiedPinCode && <Text style={style.forgetText}>ลืมรหัส PIN ?</Text>}
    </View>
  );
};

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 32,
    gap: 10,
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
  forgetText: {
    fontSize: fontSize.h4.size,
    letterSpacing: 0.25,
    fontFamily: fontFamily.fontFamily,
    textAlign: "center",
  },
});
export default VerifyPinCode;
