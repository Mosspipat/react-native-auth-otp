import Button from "@/components/Button";
import { fontSize } from "@/constants/Typography";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign";

const RequestOTP = () => {
  return (
    <View style={styles.screenContainer}>
      <Ionicons name="mobile1" size={70} color="#4c8b7b" />
      <View style={styles.OTPContainer}>
        <Text style={styles.OTPTitle}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>
        <Text style={styles.OTPNumber}>082-XXX-8998</Text>
      </View>
      <View style={styles.SendOTPContainer}>
        <Button
          label="ขอรหัส OTP"
          colorLabel="white"
          style={styles.buttonConfirm}
          onPress={() => {
            router.push("/verifyOTP");
          }}
        />
        <Text style={styles.helperDescription}>
          กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 64,
  },
  OTPContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  OTPTitle: {
    fontSize: fontSize.h3.size,
    fontWeight: "700",
    fontFamily: "SukhumvitSet-Medium",
  },
  OTPNumber: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "SukhumvitSet-Medium",
    color: "#067a61",
  },
  SendOTPContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  buttonConfirm: {
    width: "100%",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: "#01654f",
  },
  helperDescription: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: "SukhumvitSet-Medium",
    textAlign: "center",
    color: "#888888",
  },
});

export default RequestOTP;
