import { COLORS } from "@/constant/color";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.lightWhite,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.grey,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.grey,
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    backgroundColor: COLORS.blue,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.white,
  },
  image:{
    resizeMode:"cover",
    width:width * 0.9,
    height: width * 0.65
  }
});