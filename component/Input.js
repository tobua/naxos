// @flow
import React, { useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { Color, mergeStyles } from '../style'

const createBaseStyles = () => ({
  input: {},
})

export type Props = {
  styles?: StyleSheet.NamedStyles,
}

export const Input = ({ styles, ...props }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return <TextInput style={sheet.input} {...props} />
}

Input.createStyles = createBaseStyles
