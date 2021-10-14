// @flow
import React, { Children, useState, useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Color, Font, Button, mergeStyles } from '..'

const createBaseStyles = () => ({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  slide: {},
})

export type Props = {
  children: ReactNode,
  styles?: StyleSheet.NamedStyles,
  onDone?: () => void,
}

export const Intro = ({ children, styles, onDone }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const [active, setActive] = useState(children[0].key)

  return (
    <View style={sheet.wrapper}>
      {children.map((child) => (
        <View key={child.key} style={sheet.slide}>
          {child}
          <Button title="Skip" onPress={onDone} />
        </View>
      ))}
    </View>
  )
}

Intro.createStyles = createBaseStyles

export type SlideProps = {
  children: ReactNode,
  key: String,
  styles?: StyleSheet.NamedStyles,
}

const createSlideBaseStyles = () => ({
  wrapper: {},
})

Intro.Slide = function Slide({ children, styles }: SlideProps) {
  const sheet = useMemo(
    () => mergeStyles(createSlideBaseStyles(), styles),
    [styles]
  )

  return <View style={sheet.wrapper}>{children}</View>
}

Intro.Slide.createStyles = createSlideBaseStyles
