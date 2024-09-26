import Button from "@/components/Button";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Entypo";

const TouchID = () => {
  return (
    <View style={style.screenContainer}>
      <View style={style.touchIDDescriptionContainer}>
        <Text style={style.touchIDTitle}>Touch ID</Text>
        <View>
          <Text style={style.touchIDDescription}>
            ตั้งค่าล็อคอินด้วยลายนิ้วมือ
          </Text>
          <Text style={style.touchIDDescription}>
            เพื่อการเข้าถึงที่รวดเร็วขึ้น
          </Text>
        </View>
      </View>
      <View style={style.iconTouchIDContainer}>
        <Ionicons name="fingerprint" size={100} color="#067a61" />
      </View>
      <View style={style.actionContainer}>
        <Button
          label="ตั้งค่า Touch ID"
          colorLabel="white"
          style={style.buttonSetUpFingerPrint}
        />
        <Button
          label="ข้าม"
          colorLabel="#067a61"
          style={style.buttonSkip}
          onPress={() => {
            router.push("/verifyPinCode");
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 32,
  },
  touchIDDescriptionContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",

    width: "100%",
    rowGap: 10,
    columnGap: 8,
  },
  touchIDTitle: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "SukhumvitSet-Medium",
    textAlign: "left",
  },
  touchIDDescription: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "SukhumvitSet-Medium",
  },
  iconTouchIDContainer: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    padding: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  actionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    width: "100%",
  },
  buttonSetUpFingerPrint: {
    width: "100%",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: "#01654f",
  },
  buttonSkip: {
    width: "100%",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: "transparent",
  },
});

export default TouchID;
