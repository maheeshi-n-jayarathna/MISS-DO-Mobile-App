// import React, { useState } from "react"
// import { View, TextInput, Button, Text } from "react-native"
// import { saveData, getData } from "../utils/storage"
// import {  StyleSheet } from "react-native"

// const AddTask: React.FC = ({ navigation }: any) => {
//   const [taskName, setTaskName] = useState("")

//   const handleAdd = async () => {
//     const tasks = (await getData("tasks")) || "[]"
//     const updatedTasks = JSON.parse(tasks).concat({ name: taskName })
//     await saveData("tasks", JSON.stringify(updatedTasks))
//     navigation.navigate("Tasks")
//   }

//   return (
//     <View style={styles.addTask}>
//       <TextInput
//         placeholder="Task Name"
//         value={taskName}
//         onChangeText={setTaskName}
//       />
//       <TextInput
//         placeholder="Due Date"
//         value={taskName}
//         onChangeText={setTaskName}
//       />
//       <Button title="Save Task" onPress={handleAdd} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   addTask: {
//     padding: 20
//   }
// })

// export default AddTask


import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { saveData, getData } from "../utils/storage";
import { StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AddTask: React.FC = ({ navigation }: any) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = async () => {
    if (taskName && description && dueDate) {
      const tasks = (await getData("tasks")) || "[]";
      const updatedTasks = JSON.parse(tasks).concat({
        name: taskName,
        description,
        dueDate,
      });
      await saveData("tasks", JSON.stringify(updatedTasks));
      navigation.navigate("Tasks");
    } else {
      Alert.alert("Error", "Please fill in all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Add New Task</Text>

        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={taskName}
          onChangeText={setTaskName}
        />

        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          style={styles.input}
          placeholder="Due Date (YYYY-MM-DD)"
          value={dueDate}
          onChangeText={setDueDate}
        />

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <MaterialIcons name="save" size={24} color="#fff" />
          <Text style={styles.buttonText}>Save Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f0f3f4",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#dfe6e9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color: "#2d3436",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00b894",
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default AddTask;
