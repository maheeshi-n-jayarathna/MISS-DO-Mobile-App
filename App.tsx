import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Tasks from "./src/views/Tasks";
import AddTask from "./src/views/AddTask";
import EditTask from "./src/views/EditTask";
import TaskDetails from "./src/views/TaskDetails";
import Home from "./src/views/Home"; // Import the new Home screen
import Login from "./src/views/Login";
import SignUp from "./src/views/SignUp";
import Profile from "./src/views/Profile";
import Settings from "./src/views/Settings";
import { AuthProvider } from "./src/auth/AuthContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home} // Add Home screen here
        options={{ title: ""}}
      />
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTask}
        options={{ title: "Edit Task" }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{ title: "Task Details" }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ title: "Add Task" }}
      />
    </Stack.Navigator>
  );
}

function TaskStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTask}
        options={{ title: "Edit Task" }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{ title: "Task Details" }}
      />
      <Stack.Screen
        name="AddTask"
        component={AddTask}
        options={{ title: "Add Task" }}
      />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TaskStack") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={'black'} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack} // HomeStack includes Home.tsx
        options={{ title: "Home", headerShown: false }}
      />
      <Tab.Screen
        name="TaskStack"
        component={TaskStack}
        options={{ title: "Tasks" }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: "Sign Up" }}
            />
            <Stack.Screen
              name="Tasks"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
