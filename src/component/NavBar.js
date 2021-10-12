// @flow
import React, { Children, useState } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
})

export type Props = {
  children: ReactNode,
  title?: string,
}

const getChild = (children, Component) => {
  if (!children) {
    return null
  }

  // TODO will name comparison also work with minification?
  if (!Array.isArray(children)) {
    if (children.type.name === Component.name) {
      return children
    } else {
      return null
    }
  }

  return children.find((child) => child.type.name === Component.name)
}

export const NavBar = ({ children, title }: Props) => {
  let Left = getChild(children, NavBar.Left)
  let Middle = getChild(children, NavBar.Middle)
  let Right = getChild(children, NavBar.Right)

  if (!Middle) {
    Middle = <Text>{title}</Text>
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.left}>{Left}</View>
      <View style={styles.middle}>{Middle}</View>
      <View style={styles.right}>{Right}</View>
    </View>
  )
}

NavBar.Left = function Left({ children }) {
  return children
}

NavBar.Middle = function Middle({ children }) {
  return children
}

NavBar.Right = function Right({ children }) {
  return children
}
