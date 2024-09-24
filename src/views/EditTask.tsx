// // import React, { useState } from "react"
// // import { View, TextInput, Button } from "react-native"
// // import { getData, saveData } from "../utils/storage"

// // const EditTask: React.FC = ({ navigation, route }: any) => {
// //   const { taskId } = route.params
// //   const [taskName, setTaskName] = useState("")

// //   const loadTask = async () => {
// //     const tasks = await getData("tasks")
// //     if (tasks) {
// //       const taskList = JSON.parse(tasks)
// //       setTaskName(taskList[taskId].name)
// //     }
// //   }

// //   const handleEdit = async () => {
// //     const tasks: any = await getData("tasks")
// //     const taskList = JSON.parse(tasks)
// //     taskList[taskId].name = taskName
// //     await saveData("tasks", JSON.stringify(taskList))
// //     navigation.navigate("Tasks")
// //   }

// //   React.useEffect(() => {
// //     loadTask()
// //   }, [])

// //   return (
// //     <View>
// //       <TextInput
// //         placeholder="Task Name"
// //         value={taskName}
// //         onChangeText={setTaskName}
// //       />
// //       <Button title="Edit Task" onPress={handleEdit} />
// //     </View>
// //   )
// // }

// // export default EditTask
// import React, { useState, useEffect } from "react";
// import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
// import { getData, saveData } from "../utils/storage";
// import { StyleSheet } from "react-native";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// const EditTask: React.FC = ({ navigation, route }: any) => {
//   const { taskId } = route.params;
//   const [taskName, setTaskName] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   // Load the task data based on taskId when the component is mounted
//   const loadTask = async () => {
//     const tasks = await getData("tasks");
//     if (tasks) {
//       const taskList = JSON.parse(tasks);
//       const task = taskList[taskId];
//       if (task) {
//         setTaskName(task.name);
//         setDescription(task.description);
//         setDueDate(task.dueDate);
//       }
//     }
//   };

//   const handleEdit = async () => {
//     if (taskName && description && dueDate) {
//       const tasks: any = await getData("tasks");
//       const taskList = JSON.parse(tasks);
//       taskList[taskId] = { name: taskName, description, dueDate };
//       await saveData("tasks", JSON.stringify(taskList));
//       navigation.navigate("Tasks");
//     } else {
//       Alert.alert("Error", "Please fill in all fields.");
//     }
//   };

//   useEffect(() => {
//     loadTask(); // Load task data on component mount
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>Edit Task</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Task Name"
//           value={taskName}
//           onChangeText={setTaskName}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           value={description}
//           onChangeText={setDescription}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Due Date (YYYY-MM-DD)"
//           value={dueDate}
//           onChangeText={setDueDate}
//         />

//         <TouchableOpacity style={styles.button} onPress={handleEdit}>
//           <MaterialIcons name="save" size={24} color="#fff" />
//           <Text style={styles.buttonText}>Save Changes</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//     backgroundColor: "#f0f3f4",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#2d3436",
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#dfe6e9",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 20,
//     fontSize: 16,
//     color: "#2d3436",
//   },
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#00b894",
//     paddingVertical: 12,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   buttonText: {
//     marginLeft: 8,
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#fff",
//   },
// });

// export default EditTask;


import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { getData, saveData } from "../utils/storage";
import { StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const EditTask: React.FC = ({ navigation, route }: any) => {
  const { taskId } = route.params; // Receive taskId from params
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Load the task data based on taskId when the component is mounted
  const loadTask = async () => {
    try {
      const tasks = await getData("tasks");
      if (tasks) {
        const taskList = JSON.parse(tasks);
        const task = taskList[taskId]; // Task eka index ekata milanu karala load karanawa
        if (task) {
          setTaskName(task.name); // Name field ekata update karanawa
          setDescription(task.description); // Description ekata data set karanawa
          setDueDate(task.dueDate); // Due date set karanawa
        } else {
          Alert.alert("Error", "Task not found.");
        }
      }
    } catch (error) {
      console.error("Error loading task:", error); // Error handling ekak dagena
    }
  };
  

  const handleEdit = async () => {
    if (taskName && description && dueDate) {
      try {
        const tasks = await getData("tasks"); // Save karanna ona task tika data ganna
        if (tasks) {
          const taskList = JSON.parse(tasks); // Task list ekata parse karanawa
          taskList[taskId] = { name: taskName, description, dueDate }; // Task eka update karanawa taskId eka match wenakota
          await saveData("tasks", JSON.stringify(taskList)); // Updated task tika save karanawa
          navigation.navigate("Tasks"); // Tasks screen ekata apahu yannawa
        } else {
          Alert.alert("Error", "No tasks found.");
        }
      } catch (error) {
        console.error("Error saving task:", error);
      }
    } else {
      Alert.alert("Error", "Please fill in all fields."); // Field tikak empty unoth alert ekak pennanawa
    }
  };  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Edit Task</Text>

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

        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <MaterialIcons name="save" size={24} color="#fff" />
          <Text style={styles.buttonText}>Save Changes</Text>
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

export default EditTask;
