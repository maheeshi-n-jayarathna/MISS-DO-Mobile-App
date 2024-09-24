// src/views/SignUp.tsx
import React, { useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import { TextInput, Button, HelperText } from "react-native-paper"

const SignUp: React.FC = ({ navigation }: any) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSignUp = () => {
    if (!username || !password) {
      setErrorMessage("Username and password are required")
      return
    }

    // Implement sign-up logic here (e.g., save user to AsyncStorage or send to backend)
    navigation.navigate("Login") // Redirect to login after successful sign-up
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        mode="outlined"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
      {errorMessage ? (
        <HelperText type="error">{errorMessage}</HelperText>
      ) : null}

      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        Sign Up
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.navigate("Login")}
        style={styles.signupButton}
      >
        Already have an account? Login
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#006266"
  },
  input: {
    marginBottom: 20
  },
  button: {
    marginTop: 20,
    backgroundColor: "#006266"
  },
  signupButton: {
    marginTop: 10
  }
})

export default SignUp
