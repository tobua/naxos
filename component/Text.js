// @flow
import React, { useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text as RNText, TouchableOpacity } from 'react-native'
import { Font, mergeStyles } from '../style'

const createBaseStyles = () => ({
  text: {},
})

export type Props = {
  children: string,
  large?: true,
  bold?: true,
  small?: true,
  styles?: StyleSheet.NamedStyles,
}

export const Text = ({ children, large, bold, small, styles }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return (
    <RNText style={[large && Font.large, bold && Font.bold, small && Font.small, sheet.text]}>
      {children}
    </RNText>
  )
}

Text.createStyles = createBaseStyles
