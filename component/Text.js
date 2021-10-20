// @flow
import React from 'react'
import type ReactNode from 'react'
import {
  StyleSheet,
  View,
  Text as RNText,
  TouchableOpacity,
} from 'react-native'
import { Font } from '../index'

const styles = StyleSheet.create({
  text: {},
})

export type Props = {
  children: string,
  large?: true,
  bold?: true,
  small?: true,
}

export const Text = ({ children, large, bold, small }: Props) => (
  <RNText
    style={[
      styles.base,
      large && Font.large,
      bold && Font.bold,
      small && Font.small,
    ]}
  >
    {children}
  </RNText>
)
