// app/(tabs)/LoginScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useAuth } from "../../hooks/useAuth";

const LoginScreen = () => {
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await signUp(email, password);
        Alert.alert("Success", "Account created successfully!");
      } else {
        await signIn(email, password);
        Alert.alert("Success", "Logged in successfully!");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? "Sign Up" : "Sign In"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={isSignUp ? "Sign Up" : "Sign In"} onPress={handleAuth} />
      <Text
        style={styles.toggleText}
        onPress={() => setIsSignUp((prev) => !prev)}
      >
        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  toggleText: {
    marginTop: 10,
    color: "blue",
    textAlign: "center",
  },
});

export default LoginScreen;
