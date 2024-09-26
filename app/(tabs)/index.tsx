import { StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import { fontSize, fontFamily } from "@/constants/Typography";
import { useFonts } from "expo-font";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Divider from "@/components/Divider";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  // useEffect(() => {
  //   setTimeout(async () => {
  //     await SplashScreen.hideAsync();
  //     router.replace("/successPassword");
  //   }, 0);
  // }, []);
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
      // router.replace("/successPassword");
    }, 2000);
  }, []);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {}, []);

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

  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.textTitleContainer}>ยินดีต้อนรับ</Text>
        </View>
        <View>
          <Text style={styles.textBodyContainer}>กรุณาเลือกภาษา</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="English"
          colorLabel={"#fff"}
          style={styles.button}
          // onPress={() => bottomSheetRef.current?.expand()}
        />
        <Button
          label="ไทย"
          colorLabel={"#fff"}
          style={styles.button}
          onPress={() => bottomSheetRef.current?.expand()}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={["80%"]}
        enablePanDownToClose={false}
        index={-1}
      >
        <BottomSheetView style={bottomSheetStyles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="document-text-outline"
              size={30}
              color={Colors.myTheme.background}
            />
            <Text style={bottomSheetStyles.title}>เงื่อนไขการใช้บริการ</Text>
          </View>
          <Divider />
          <Text style={bottomSheetStyles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            voluptatibus quae quas, officiis voluptas voluptatum! Voluptatibus
            ipsum
          </Text>
          <View style={bottomSheetStyles.buttonContainer}>
            <Button
              label="ปฎิเสธ"
              colorLabel={Colors.myTheme.background}
              onPress={() => bottomSheetRef.current?.close()}
              style={bottomSheetStyles.buttonDeny}
            />
            <Button
              label="ยอมรับ"
              colorLabel={"#fff"}
              onPress={() => {
                router.push("/login");
              }}
              style={bottomSheetStyles.buttonConfirm}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
    padding: 32,
    backgroundColor: "#fff",
  },
  titleContainer: { gap: 8, width: "100%" },
  textTitleContainer: {
    fontSize: fontSize.h2.size,
    fontWeight: fontSize.h2.fontWeight,
    lineHeight: fontSize.h2.lineHeight,
    fontFamily: fontFamily.fontFamily,
  },
  textBodyContainer: {
    fontSize: fontSize.body.size,
    fontWeight: fontSize.body.fontWeight,
    lineHeight: fontSize.body.lineHeight,
    fontFamily: fontFamily.fontFamilyBold,
  },
  buttonContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  button: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: Colors.myTheme.background,
  },
});

const bottomSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
  title: {
    fontSize: fontSize.h3.size,
    marginLeft: 10,
    fontFamily: fontFamily.fontFamilyBold,
  },
  description: {
    display: "flex",
    flex: 1,
    fontSize: fontSize.body.size,
    lineHeight: fontSize.body.lineHeight,
    fontFamily: fontFamily.fontFamily,
  },
  buttonContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  buttonDeny: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.myTheme.background,
    backgroundColor: "transparent",
  },
  buttonConfirm: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: Colors.myTheme.background,
  },
});
