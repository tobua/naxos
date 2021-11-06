// @flow
import React, { useMemo, useState } from 'react'
import type { Node } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Color, Font, Space, mergeStyles } from '../style'
import { Icon } from './Icon'

const createBaseStyles = () => ({
  wrapper: {},
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentText: {},
  open: {
    width: '100%',
    marginTop: Space.small,
    paddingLeft: Space.small,
  },
  option: {
    paddingBottom: Space.tiny,
  },
  activeOption: {
    ...Font.bold,
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
        <View style={sheet.main}>
          <Text style={sheet.currentText}>{current}</Text>
          <Icon
            name="pointer"
            direction={open ? 'top' : 'bottom'}
            size="small"
          />
        </View>
        {open && (
          <View style={sheet.open}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() =>
                  setCurrent(option) || setOpen(false) || onChange(option)
                }
              >
                <View style={sheet.option}>
                  <Text
                    style={[current === option ? sheet.activeOption : null]}
                  >
                    {option}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

Dropdown.createStyles = createBaseStyles
