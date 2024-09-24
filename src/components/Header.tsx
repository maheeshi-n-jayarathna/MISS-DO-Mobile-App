import React from "react"
import { Appbar } from "react-native-paper"
import {  StyleSheet } from "react-native"

interface HeaderProps {
  title: string
  goBack?: () => void
}

const Header: React.FC<HeaderProps> = ({ title, goBack }) => {
  return (
    <Appbar.Header style={styles.header}>
      {goBack && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
  }
})

export default Header


