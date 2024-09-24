// import React from "react"
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
// import { Ionicons } from "@expo/vector-icons" // Import from Expo vector icons

// interface TaskItemProps {
//   task: any
//   navigation: any
// }

// const TaskItem: React.FC<TaskItemProps> = ({ task, navigation }) => {
//   return (
//     <View >
//       {/* <Text style={styles.taskName}>{task.name}</Text> */}
//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity
//           style={styles.iconButton}
//           onPress={() => {
//             navigation.navigate("EditTask", { task })
//           }}
//         >
//           <Ionicons name="pencil-outline" size={20} color="#000" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
//           <Ionicons name="trash-outline" size={20} color="#000" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   taskContainer: {
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     marginVertical: 8,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4
//   },
//   taskName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     gap: 10
//   },
//   iconButton: {
//     backgroundColor: "#dbe1e3",
//     padding: 5,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// })

// export default TaskItem


import React from "react"
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { getData, saveData } from "../utils/storage" // Import getData and saveData for storage manipulation

interface TaskItemProps {
  task: any
  navigation: any
  loadTasks: () => void // Add loadTasks to refresh the task list after deletion
}

const TaskItem: React.FC<TaskItemProps> = ({ task, navigation, loadTasks }) => {
  
  // Function to handle task deletion
  const handleDelete = async () => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            const storedTasks = await getData("tasks")
            const tasksArray = storedTasks ? JSON.parse(storedTasks) : []

            const updatedTasks = tasksArray.filter((t: any) => t.name !== task.name) // Filter out the task

            await saveData("tasks", JSON.stringify(updatedTasks)) // Save the updated task list
            loadTasks() // Refresh task list after deletion
          },
          style: "destructive"
        }
      ]
    )
  }

  return (
    <View>
      {/* Display task name */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            navigation.navigate("EditTask", { task })
          }}
        >
          <Ionicons name="pencil-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleDelete}>
          <Ionicons name="trash-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10
  },
  iconButton: {
    backgroundColor: "#dbe1e3",
    padding: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default TaskItem
