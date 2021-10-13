// @flow
import React, { Children, useState, useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Color, Font, mergeStyles } from '..'

const createBaseStyles = () => ({
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
  title: {
    ...Font.bold,
    ...Font.large,
    color: Color.highlight,
  },
})

export type Props = {
  children: ReactNode,
  title?: string,
  styles?: StyleSheet.NamedStyles,
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

export const NavBar = ({ children, title, styles }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  let Left = getChild(children, NavBar.Left)
  let Middle = getChild(children, NavBar.Middle)
  let Right = getChild(children, NavBar.Right)

  if (!Middle) {
    Middle = <Text style={sheet.title}>{title}</Text>
  }

  return (
    <View style={sheet.wrapper}>
      <View style={sheet.left}>{Left}</View>
      <View style={sheet.middle}>{Middle}</View>
      <View style={sheet.right}>{Right}</View>
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

NavBar.createStyles = createBaseStyles
