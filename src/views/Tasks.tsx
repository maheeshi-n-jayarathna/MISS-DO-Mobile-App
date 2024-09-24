// import React, { useState, useCallback } from "react"
// import {
//   View,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Text
// } from "react-native"
// import { useFocusEffect } from "@react-navigation/native"
// import { getData } from "../utils/storage"
// import TaskItem from "../components/TaskItem"

// const Tasks: React.FC = ({ navigation }: any) => {
//   const [tasks, setTasks] = useState<any[]>([])

//   const loadTasks = async () => {
//     const storedTasks = await getData("tasks")
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks))
//     }
//   }

//   useFocusEffect(
//     useCallback(() => {
//       loadTasks()
//     }, [])
//   )

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={tasks}
//         renderItem={({ item }) => (
//           <TaskItem task={item} navigation={navigation} />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       <TouchableOpacity
//         style={styles.fab}
//         onPress={() => navigation.navigate("AddTask")}
//       >
//         <Text style={styles.fabText}>+</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     justifyContent: "center",
//   },
//   fab: {
//     position: "absolute",
//     right: 20,
//     bottom: 20,
//     backgroundColor: "#000", // add button color
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3.5
//   },
//   fabText: {
//     fontSize: 28,
//     color: "#fff",
//     fontWeight: "bold"
//   }
// })

// export default Tasks


import React, { useState, useCallback } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getData } from "../utils/storage";
import TaskItem from "../components/TaskItem";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tasks: React.FC = ({ navigation }: any) => {
  const [tasks, setTasks] = useState<any[]>([]);

  // Function to load tasks from storage
  const loadTasks = async () => {
    const storedTasks = await getData("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  };

  // Automatically reload tasks when the screen is focused
  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [])
  );

  return (
    <View style={styles.container}>
      {/* Task List */}
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.taskCard}>
            <Text style={styles.taskTitle}>{item.name}</Text>
            <Text style={styles.taskDescription}>{item.description}</Text>
            <Text style={styles.dueDate}>Due: {item.dueDate}</Text>
            <TaskItem task={item} navigation={navigation} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddTask")}
      >
        <MaterialIcons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#f4f4f4", // light background
  },
  taskCard: {
    backgroundColor: "#dfe6e9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3436",
  },
  taskDescription: {
    fontSize: 14,
    color: "#636e72",
    marginTop: 5,
  },
  dueDate: {
    fontSize: 12,
    color: "black",
    marginTop: 10,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#00b894", // bright blue for the button
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});

export default Tasks;
