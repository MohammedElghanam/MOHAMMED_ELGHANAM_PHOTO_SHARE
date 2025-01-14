import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button, 
} from "react-native";

import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "expo-router";

const HomeScreen: React.FC = () => {

  const { logOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logOut();
    router.replace("/LoginScreen"); // Redirect to login page after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HomeScreen;
