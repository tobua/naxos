import React, { useState, useMemo, cloneElement, ReactNode } from 'react'
import { View, TouchableOpacity, ViewStyle, StyleProp, ViewProps } from 'react-native'
import { mergeStyles } from '../style'

const createBaseStyles = () => ({
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
})

interface Props {
  children: ReactNode
  styles?: {
    wrapper: StyleProp<ViewStyle>
  }
  style?: StyleProp<ViewStyle>
  onPress?: (key: string) => void
}

export const TabBar = ({ children, styles, style, onPress, ...props }: Props & ViewProps) => {
  const childrenArray = Array.isArray(children) ? children : [children]

  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  // @ts-ignore
  const [active, setActive] = useState(children[0].key)

  return (
    <View style={[sheet.wrapper, style]} {...props}>
      {childrenArray.map((child) => (
        <TouchableOpacity
          key={child.key}
          onPress={() => {
            setActive(child.key)
            if (onPress) {
              onPress(child.key)
            }
          }}
        >
          {cloneElement(child, { active: active === child.key })}
        </TouchableOpacity>
      ))}
    </View>
  )
}

TabBar.createStyles = createBaseStyles

interface TabProps {
  children: Exclude<ReactNode, undefined | null | string | number | boolean | Iterable<ReactNode>>
  key: String
  active?: boolean
  styles?: {
    tab: StyleProp<ViewStyle>
  }
  style?: StyleProp<ViewStyle>
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

const Tab = ({ children, active, styles, style }: TabProps) => {
  const sheet = useMemo(() => mergeStyles(createTabBaseStyles(), styles), [styles])

  return (
    <View style={[sheet.tab, active ? sheet.activeTab : null, style]}>
      {cloneElement(children, { active })}
    </View>
  )
}

Tab.createStyles = createTabBaseStyles

TabBar.Tab = Tab
