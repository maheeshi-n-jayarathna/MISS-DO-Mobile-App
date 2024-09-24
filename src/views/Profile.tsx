// import React, { useContext } from "react"
// import { View, Text, Button, TouchableOpacity } from "react-native"
// import { AuthContext } from "../auth/AuthContext"
// import {  StyleSheet } from "react-native"
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const Profile: React.FC = ({ navigation }: any) => {
//   const { user, signOut } = useContext(AuthContext)

//   const handleLogout = () => {
//     signOut()
//     navigation.navigate("Login")
//   }

//   return (
//     <View style={styles.profile}>
//       <Text style={styles.profileText}>Welcome, {user}!</Text>
//       <TouchableOpacity style={styles.editButton}>
//           <MaterialIcons name="edit" size={24} /> 
//           <Text style={styles.editButtonText}>EDIT PROFILE</Text>
//       </TouchableOpacity>

//       <Text style={styles.sectionTitle}>Account Settings</Text>
//         <TouchableOpacity style={styles.settingItem}>
//           <MaterialIcons name="person" size={24} />
//           <Text style={styles.settingText}>Update User Name</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.settingItem}>
//           <MaterialIcons name="key" size={24} />
//           <Text style={styles.settingText}>Change Password</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//           <MaterialIcons name="logout" size={24} />
//           <Text style={styles.logoutButtonText}>LOG OUT</Text>
//         </TouchableOpacity>

//       {/* <Button title="Logout" onPress={handleLogout} /> */}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   profile: {
//     padding: 20,
//   },
//   profileText: {
//     fontSize: 30,
//     paddingBottom: 20
//   },
//   text: {
//     padding: 10
//   },
//   editButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 20,
//     padding: 12,
//     elevation: 4,
//     backgroundColor: "#00cec9"
//   },
//   editButtonText: {
//     marginLeft: 8,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   sectionTitle: {
//     paddingTop: 20,
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   settingItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   settingText: {
//     fontSize: 16,
//     marginLeft: 12,
//     fontWeight: 'bold',
//   },
//   logoutButton: {
//     flexDirection: 'row',
//     marginTop: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#00cec9',
//     borderRadius: 20,
//     padding: 12,
//     elevation: 4,
//   },
//   logoutButtonText: {
//     marginLeft: 8,
//     fontSize: 16,
//     fontWeight: 'bold',
//   }
// })

// export default Profile


import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../auth/AuthContext";
import { StyleSheet } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import LinearGradient from 'react-native-linear-gradient';

const Profile: React.FC = ({ navigation }: any) => {
  const { user, signOut } = useContext(AuthContext);

  const handleLogout = () => {
    signOut();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* <LinearGradient colors={["#74b9ff", "#0984e3"]} style={styles.profileCard}> */}
        <Text style={styles.profileText}>Welcome, {user}!</Text>
        <TouchableOpacity style={styles.editButton}>
          <MaterialIcons name="edit" size={24} color="#fff" />
          <Text style={styles.editButtonText}>EDIT PROFILE</Text>
        </TouchableOpacity>
      {/* </LinearGradient> */}

      <Text style={styles.sectionTitle}>Account Settings</Text>
      
      <View style={styles.card}>
        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons name="person" size={28} color="#00b894" />
          <Text style={styles.settingText}>Update User Name</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem}>
          <MaterialIcons name="key" size={28} color="#00b894" />
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialIcons name="logout" size={28} color="#fff" />
        <Text style={styles.logoutButtonText}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f6fa",
  },
  profileCard: {
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    elevation: 5,
  },
  profileText: {
    fontSize: 26,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 12,
    backgroundColor: "#006266",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  editButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 10,
    paddingTop: 20
  },
  card: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 5,
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 18,
    marginLeft: 15,
    color: "#2d3436",
    fontWeight: "600",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: "#c44569",
    elevation: 5,
  },
  logoutButtonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Profile;
