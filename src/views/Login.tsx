import React, { useState, useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import { TextInput, Button, HelperText } from "react-native-paper"
import { AuthContext } from "../auth/AuthContext"

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  // Specify navigation type
  const { signIn } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleLogin = () => {
    // if (!username || !password) {
    //   setErrorMessage("Username and password are required")
    //   return
    // }

    signIn(username)
    navigation.navigate("Tasks")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MISS Do</Text>
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

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        <Text>Login</Text> {/* Wrap text in <Text> */}
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.navigate("SignUp")}
        style={styles.signupButton}
      >
        <Text>Don't have an account? Sign up</Text> {/* Wrap text in <Text> */}
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

export default Login
