// @flow
import React, { useMemo } from 'react'
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native'
import { Space, mergeStyles } from '../style'

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
  style?: StyleProp<ViewStyle>,
}

export const Content = ({ children, styles, style }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return <View style={[sheet.wrapper, style]}>{children}</View>
}

Content.createStyles = createBaseStyles
