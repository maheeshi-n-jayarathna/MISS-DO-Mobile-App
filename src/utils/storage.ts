import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.error("Error saving data", e)
  }
}

export const getData = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (e) {
    console.error("Error retrieving data", e)
    return null
  }
}
