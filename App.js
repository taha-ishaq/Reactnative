import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./Apps/Screens/LoginScreen";
import { client } from "./Apps/Utils/kindconfig";

export default function App() {
  useEffect(() => {
    checkSDKInitialization();
  }, []);

  const checkSDKInitialization = async () => {
    if (client && client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      console.log(userProfile);
    } else {
      console.log("SDK is not initialized or the user is not authenticated.");
    }
  };

  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
