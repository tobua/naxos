// @flow
import React, { Children, useState, useMemo, cloneElement } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Color, Font, mergeStyles } from '..'

const createBaseStyles = () => ({
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
})

export type Props = {
  children: ReactNode,
  styles?: StyleSheet.NamedStyles,
  onPress?: (key: string) => void,
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

export const TabBar = ({ children, styles, onPress }: Props) => {
  if (!Array.isArray(children)) {
    children = [children]
  }

  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const [active, setActive] = useState(children[0].key)

  return (
    <View style={sheet.wrapper}>
      {children.map((child) => (
        <TouchableOpacity
          key={child.key}
          onPress={() => setActive(child.key) && onPress && onPress(child.key)}
        >
          {cloneElement(child, { active: active === child.key })}
        </TouchableOpacity>
      ))}
    </View>
  )
}

TabBar.createStyles = createBaseStyles

export type TabProps = {
  children: ReactNode,
  key: String,
  styles?: StyleSheet.NamedStyles,
}

const createTabBaseStyles = () => ({
  tab: {
    paddingBottom: 2,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: 'black',
  },
})

TabBar.Tab = function Tab({ children, active, styles }: TabProps) {
  const sheet = useMemo(
    () => mergeStyles(createTabBaseStyles(), styles),
    [styles]
  )

  return (
    <View style={[sheet.tab, active ? sheet.activeTab : null]}>
      {cloneElement(children, { active })}
    </View>
  )
}

TabBar.Tab.createStyles = createTabBaseStyles
