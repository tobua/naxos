// @flow
import React, { useMemo, useState } from 'react'
import type { Node } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Color, mergeStyles } from '..'

const createBaseStyles = () => ({
  wrapper: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginBottom: 20,
    position: 'relative',
  },
  text: {
    padding: 10,
  },
  indicator: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontWeight: 'bold',
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
  open: {
    width: '100%',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
  },
})

export type Props = {
  options: string[],
  initial?: string,
  onChange: (string) => void,
  styles?: StyleSheet.NamedStyles,
}

export const Dropdown: (Props) => Node = ({
  options,
  initial = options[0],
  onChange,
  styles,
}) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const [current, setCurrent] = useState(initial)
  const [open, setOpen] = useState(false)

  return (
    <TouchableOpacity onPress={() => !open && setOpen(true)}>
      <View style={sheet.wrapper}>
        <Text style={sheet.text}>{current}</Text>
        <Text style={sheet.indicator}>{'>'}</Text>
        {open && (
          <View style={sheet.open}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() =>
                  setCurrent(option) || setOpen(false) || onChange(option)
                }
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

Dropdown.createStyles = createBaseStyles
