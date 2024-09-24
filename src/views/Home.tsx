import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../auth/AuthContext";

const Home: React.FC = ({ navigation }: any) => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back, {user}!</Text>
        <Image source={require('../assets/my.jpg')} style={styles.userImage} />
      </View>

      <View style={styles.text}>
        <Text style={styles.subtitle}>Here’s a quick glance at your tasks</Text>
      </View>

      {/* Task Summary Cards */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Tasks</Text>
          <Text style={styles.cardCount}>12</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Completed Tasks</Text>
          <Text style={styles.cardCount}>8</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming Tasks</Text>
          <Text style={styles.cardCount}>4</Text>
        </View>
      </View>

      {/* Motivational Section */}
      <View style={styles.motivationalSection}>
        <Text style={styles.quote}>
          "The secret of getting ahead is getting started." - Mark Twain
        </Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Tasks")}
        >
          <MaterialIcons name="task" size={24} color="#fff" />
          <Text style={styles.navButtonText}>View Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <MaterialIcons name="person" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Settings")}
        >
          <MaterialIcons name="settings" size={24} color="#fff" />
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Add Button */}
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
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  userImage: {
    width: 64,
    height: 64,
    borderRadius: 16,
  },
  text: {
    paddingBottom: 20
  },
  header: {
    marginBottom: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2d3436",
  },
  subtitle: {
    fontSize: 16,
    color: "#636e72",
    marginTop: 5,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#006266",
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 8,
  },
  cardCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  motivationalSection: {
    padding: 20,
    backgroundColor: "#dfe6e9",
    borderRadius: 10,
    marginBottom: 20,
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    color: "#2d3436",
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  navButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006266",
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    elevation: 3,
  },
  navButtonText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#00b894",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});

export default Home;
