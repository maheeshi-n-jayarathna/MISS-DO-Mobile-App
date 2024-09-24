// import React from "react"
// import { View, Text } from "react-native"

// const Settings: React.FC = () => {
//   return (
//     <View>
//       <Text>Settings Page</Text>
//     </View>
//   )
// }

// export default Settings


import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Settings</Text> */}

      <View style={styles.card}>
        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons name="notifications" size={28} color="#00b894" />
          <Text style={styles.settingText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons name="lock" size={28} color="#00b894" />
          <Text style={styles.settingText}>Privacy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons name="language" size={28} color="#00b894" />
          <Text style={styles.settingText}>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons name="help" size={28} color="#00b894" />
          <Text style={styles.settingText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>App Version 1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f6fa",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2d3436",
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#dfe6e9",
  },
  settingText: {
    fontSize: 18,
    marginLeft: 15,
    color: "#2d3436",
    fontWeight: "600",
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#636e72",
  },
});

export default Settings;
