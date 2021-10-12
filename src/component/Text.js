// @flow
import React from 'react'
import type ReactNode from 'react'
import {
  StyleSheet,
  View,
  Text as RNText,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  text: {},
  large: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export type Props = {
  children: string,
  large?: boolean,
}

export const Text = ({ children, large }: Props) => (
  <RNText style={[styles.base, large && styles.large]}>{children}</RNText>
)
