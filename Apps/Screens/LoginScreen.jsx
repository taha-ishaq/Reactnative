import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import { client } from "../Utils/kindconfig";
import * as SecureStore from "expo-secure-store"; // Import Secure Store

export default function LoginScreen() {
  const handleSignUp = async () => {
    try {
      const token = await client.register(); // Assuming client.register() returns a token
      await SecureStore.setItemAsync("auth_token", token); // Save token securely
      console.log("Redirected to registration", token);
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const token = await client.login(); // Assuming client.login() returns a token
      await SecureStore.setItemAsync("auth_token", token); // Save token securely
      console.log("Redirected to login", token);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("./../../assets/Nerd-amico.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome To</Text>
        <Text style={styles.appName}>Taleem Connect</Text>
        <Text style={styles.tagline}>
          Empower Your Future with Taleem Connect!
        </Text>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.createAccount}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.BACKGROUND || "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  appName: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 40,
    color: Colors.PRIMARY,
    fontWeight: "bold",
  },
  tagline: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    color: Colors.GRAY,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: 30,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: Colors.WHITE,
    fontSize: 16,
  },
  createAccount: {
    marginTop: 15,
    fontSize: 14,
    textAlign: "center",
    color: Colors.SECONDARY || "#000",
  },
});
