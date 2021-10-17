// @flow
import React, { Children, useState, useMemo, cloneElement } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Color, Font, Space, mergeStyles } from '..'

const TextTab = ({ active, label }: { active?: boolean, label: string }) => (
  <Text style={{ fontWeight: active ? 'bold' : 'normal' }}>{label}</Text>
)

const createBaseStyles = () => ({
  wrapper: {
    //
  },
  labels: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: Space.small,
  },
  content: {},
})

export type Props = {
  children: ReactNode,
  labels: ReactNode | string[],
  styles?: StyleSheet.NamedStyles,
}

// TODO animation possibly with https://reactnative.dev/docs/layoutanimation

export const Tabs = ({ children, labels, styles }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const [current, setCurrent] = useState(0)

  return (
    <View style={sheet.wrapper}>
      <View style={sheet.labels}>
        {labels.map((label, index) => {
          let inner = label

          if (typeof label === 'string') {
            inner = <TextTab label={label} />
          }

          return (
            <TouchableOpacity
              key={typeof label === 'string' ? label : label.key}
              onPress={() => setCurrent(index)}
            >
              {cloneElement(inner, { active: current === index })}
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={sheet.content}>{children[current]}</View>
    </View>
  )
}

Tabs.createStyles = createBaseStyles
