import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  View,
} from "react-native";

const forgetPassword = () => {
  return (
    <Pressable
      style={styles.screenContainer}
      onPress={() => {
        router.push("/successPassword");
      }}
    >
      <View style={styles.forgetContainer}>
        <Text style={styles.forgetTitle}>ลืมรหัสผ่าน?</Text>
        <Text style={styles.forgetDescription}>
          กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่ ลงทะเบียน
        </Text>
      </View>
      <View style={styles.senderContainer}>
        <TextInput
          style={styles.inputPhoneAndEmail}
          placeholder="อีเมล / เบอร์โทรศัพท์"
        />
        <Button
          label="ส่ง"
          colorLabel="white"
          style={styles.buttonConfirm}
          onPress={() => {
            router.push("/successPassword");
          }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    backgroundColor: "#fff",
    padding: 32,
  },
  forgetContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 8,
  },
  forgetTitle: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "SukhumvitSet-Medium",
  },
  forgetDescription: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "SukhumvitSet-Medium",
  },
  senderContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 60,
    gap: 40,
  },
  inputPhoneAndEmail: {
    width: "100%",
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#87878750",
  },
  buttonConfirm: {
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: Colors.myTheme.background,
    width: "100%",
  },
});

export default forgetPassword;
