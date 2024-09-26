import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Typography";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Ionicons from "react-native-vector-icons/Feather";

const successPassword = () => {
  let [fontsLoad] = useFonts({
    Sukhumvit: require("../../assets/fonts/SukhumvitSet-Medium.ttf"),
    SukhumvitBold: require("../../assets/fonts/SukhumvitSet-Bold.ttf"),
  });

  return (
    <View style={styles.screenContainer}>
      <View style={styles.formContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="check" size={100} color={Colors.myTheme.background} />
        </View>
        <View style={styles.SuccessContainer}>
          <Text style={styles.tileSuccess}>สำเร็จ</Text>
          <Text style={styles.describeSuccess}>
            รีเซ็ทรหัสผ่านของคุณสำเร็จแล้ว
          </Text>
        </View>
        <Button
          label="ตกลง"
          colorLabel="white"
          style={styles.buttonSuccess}
          onPress={() => {
            router.push("/");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 64,
  },
  iconContainer: {
    width: "auto",
    padding: 20,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: Colors.myTheme.background,
  },
  SuccessContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  tileSuccess: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: fontFamily.fontFamilyBold,
    textAlign: "center",
  },
  describeSuccess: {
    fontSize: fontSize.body.size,
    fontWeight: "700",
    fontFamily: fontFamily.fontFamily,
    textAlign: "center",
  },
  buttonSuccess: {
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: Colors.myTheme.background,
    width: "100%",
  },
});

export default successPassword;
