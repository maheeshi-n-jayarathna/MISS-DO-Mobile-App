import React, { useState, useEffect } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { getData } from "../utils/storage"

interface TaskDetailsProps {
  route: any
  navigation: any
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ route, navigation }) => {
  const { taskId } = route.params
  const [task, setTask] = useState<{
    name: string
    description?: string
    dueDate?: string
  } | null>(null)

  const loadTaskDetails = async () => {
    const tasks = await getData("tasks")
    if (tasks) {
      const taskList = JSON.parse(tasks)
      setTask(taskList[taskId])
    }
  }

  useEffect(() => {
    loadTaskDetails()
  }, [])

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Loading Task...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task: {task.name}</Text>
      {task.description && (
        <Text style={styles.description}>Description: {task.description}</Text>
      )}
      {task.dueDate && (
        <Text style={styles.dueDate}>Due Date: {task.dueDate}</Text>
      )}
      <Button
        title="Edit Task"
        onPress={() => navigation.navigate("EditTask", { taskId })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  description: {
    fontSize: 18,
    marginTop: 10
  },
  dueDate: {
    fontSize: 16,
    color: "gray",
    marginTop: 10
  }
})

export default TaskDetails
