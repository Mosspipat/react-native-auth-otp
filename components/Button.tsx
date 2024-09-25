import { useFonts } from "expo-font";
import React from "react";
import {
  Text,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
} from "react-native";

type ButtonProps = PressableProps & {
  label?: string;
  colorLabel?: string;
  alignLabel?: "auto" | "left" | "right" | "center" | "justify" | undefined;
  onPress?: () => void;
};

const Button = ({
  label,
  onPress,
  colorLabel,
  alignLabel,
  ...props
}: ButtonProps) => {
  let [fontsLoad] = useFonts({
    SukhumvitBold: require("../assets/fonts/SukhumvitSet-Bold.ttf"),
  });

  if (!fontsLoad) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    text: {
      fontFamily: "SukhumvitBold",
      color: colorLabel,
      textAlign: alignLabel || "center",
    },
  });

  return (
    <Pressable onPress={onPress} {...props}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default Button;
