// @flow
import React, { useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Color, Space, mergeStyles } from '../style'

const createBaseStyles = () => ({
  wrapper: {
    paddingTop: Space.small,
    paddingRight: Space.medium,
    paddingBottom: Space.small,
    paddingLeft: Space.medium,
  },
})

export type Props = {
  children?: ReactNode,
  styles?: StyleSheet.NamedStyles,
}

export const Content = ({ children, styles }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return <View style={sheet.wrapper}>{children}</View>
}

Content.createStyles = createBaseStyles
