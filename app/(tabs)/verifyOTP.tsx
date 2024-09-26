import React, { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "@/components/Button";
import { fontSize } from "@/constants/Typography";
import { router } from "expo-router";
import OTPContext from "@/contexts/OTPContext";
import { Colors } from "@/constants/Colors";

const VerifyOTP = () => {
  const { otp, setOtp, isSuccessOTPCode, setIsSuccessOTPCode } =
    useContext(OTPContext);

  useEffect(() => {
    console.log(otp);
  }, [otp]);

  return (
    <Pressable
      style={style.screenContainer}
      onPress={() => {
        if (!isSuccessOTPCode) {
          setOtp(["9", "4", "6", "8", "1", "4"]);
          setIsSuccessOTPCode(true);
        } else {
          setOtp(["", "", "", "", "", ""]);
          setIsSuccessOTPCode(false);
          router.push("/verifyPinCode");
        }
      }}
    >
      <View style={style.verifyDescriptionContainer}>
        <Text style={style.titleVerify}>ยืนยันตัวตน</Text>
        <Text style={style.descriptionVerify}>
          กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ
        </Text>
        <Text style={style.descriptionVerify}>082-XXX-8998</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        <TextInput
          style={style.inputDigitStyle}
          placeholder="0"
          value={otp?.[0]}
          placeholderTextColor={"#88888830"}
          keyboardType="phone-pad"
          selectionColor={"#4c8b7b"}
        />
        <TextInput
          style={style.inputDigitStyle}
          value={otp?.[1]}
          placeholder="0"
          placeholderTextColor={"#88888830"}
          selectionColor={"#4c8b7b"}
        />
        <TextInput
          style={style.inputDigitStyle}
          value={otp?.[2]}
          placeholder="0"
          placeholderTextColor={"#88888830"}
          selectionColor={"#4c8b7b"}
        />
        <TextInput
          style={style.inputDigitStyle}
          placeholder="0"
          value={otp?.[3]}
          placeholderTextColor={"#88888830"}
          selectionColor={"#4c8b7b"}
        />
        <TextInput
          style={style.inputDigitStyle}
          placeholder="0"
          value={otp?.[4]}
          placeholderTextColor={"#88888830"}
          selectionColor={"#4c8b7b"}
        />
        <TextInput
          style={style.inputDigitStyle}
          placeholder="0"
          value={otp?.[5]}
          placeholderTextColor={"#88888830"}
          selectionColor={"#4c8b7b"}
        />
      </View>
      <View style={style.helperContainer}>
        <Text style={style.descriptionVerify}>หากคุณไม่ได้รับรหัส?</Text>
        <Button label="ส่งรหัสใหม่" colorLabel={Colors.myTheme.text} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 32,
  },
  verifyDescriptionContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 6,
  },
  titleVerify: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "SukhumvitSet-Medium",
    textAlign: "left",
  },
  descriptionVerify: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "SukhumvitSet-Medium",
  },
  inputDigitStyle: {
    flex: 1,
    height: "auto",
    fontSize: 40,
    textAlign: "center",
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#88888830",
  },
  helperContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    textAlign: "center",
  },
  descriptionHelper: {
    fontSize: fontSize.h4.size,
    fontWeight: "400",
    fontFamily: "SukhumvitSet-Medium",
  },
  buttonResend: {
    fontSize: fontSize.h4.size,
    fontWeight: "400",
    fontFamily: "SukhumvitSet-Medium",
  },
});

export default VerifyOTP;
