import Button from "@/components/Button";
import Divider from "@/components/Divider";
import { fontFamily } from "@/constants/Typography";

import { useFonts } from "expo-font";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Checkbox } from "react-native-paper";

const Login = () => {
  const [checked, setChecked] = useState(false);

  let [fontsLoad] = useFonts({
    Sukhumvit: require("../../assets/fonts/SukhumvitSet-Medium.ttf"),
    SukhumvitBold: require("../../assets/fonts/SukhumvitSet-Bold.ttf"),
  });

  if (!fontsLoad) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  const handleLogin = async () => {
    console.log("login");
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="ชื่อผู้ใช้งาน"
          placeholderTextColor="#9e9f9f"
          style={styles.inputElement}
          onChangeText={(text) => {
            console.log(text.toLowerCase());
            setEmail(text.toLowerCase());
          }}
        />
        <TextInput
          placeholder="รหัสผ่าน"
          placeholderTextColor="#9e9f9f"
          style={styles.inputElement}
          onChangeText={(text) => {
            console.log(text.toLowerCase());
            setPassword(text.toLowerCase());
          }}
        />
        <View style={styles.helperLoginContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setChecked(!checked)}
          >
            <View style={styles.checkboxElement}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                color={checked ? "#4c8b7b" : "#999"}
              />
            </View>
            <Text style={styles.checkboxLabel}>บันทึกการเข้าสู่ระบบ</Text>
          </TouchableOpacity>
          <Text
            style={styles.checkboxLabel}
            onPress={() => {
              router.push("/forgetPassword");
            }}
          >
            ลืมรหัสผ่าน?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label="เข้าสู่ระบบ"
            colorLabel={"#fff"}
            style={styles.buttonLogin}
            onPress={() => {
              // handleLogin();
              router.push("/requestOTP");
            }}
          />
          <View style={styles.separateContainer}>
            <Divider />
            <Text style={styles.separateText}>ไม่มีบัญชีผู้ใช้</Text>
          </View>
          <Button
            label="เปิดบัญชีเพื่อลงทะเบียบัญชีผู้ใช้"
            colorLabel={"#4c8b7b"}
            style={styles.buttonRegister}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "baseline",
    gap: 70,
    padding: 32,
    paddingBottom: 100,
    backgroundColor: "#fff",
  },
  formContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "baseline",
    gap: 40,
  },
  inputElement: {
    width: "100%",
    borderBottomColor: "#9e9f9f",
    borderBottomWidth: 1,
    paddingBottom: 6,
    fontFamily: fontFamily.fontFamily,
  },
  helperLoginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxElement: {
    borderColor: "#9e9f9f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    borderWidth: 1,
    transform: [{ scale: 0.5 }],
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#666",
    marginLeft: 2,
    fontFamily: fontFamily.fontFamily,
  },
  buttonContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  buttonDeny: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#4c8b7b",
    backgroundColor: "transparent",
  },
  buttonConfirm: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: "#01654f",
  },
  buttonLogin: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: "#01654f",
  },
  buttonRegister: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "black",
  },
  separateContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  separateText: {
    position: "absolute",
    color: "#9e9f9f",
    backgroundColor: "#ffffff",
    padding: 8,
    gap: 8,
    fontFamily: "Sukhumvit",
  },
});

export default Login;
