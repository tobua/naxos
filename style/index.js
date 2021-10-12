export const Color = {
  highlight: '#ee5602',
  interact: '#029bee',
}

export const Space = {
  tiny: 5,
  small: 10,
  medium: 20,
  large: 40,
  huge: 80,
}

export const Font = {
  bold: {
    fontWeight: 'bold',
  },
  regular: {
    fontSize: 16,
  },
  small: {
    fontSize: 12,
  },
  large: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
}

export const configure = (inputs = {}) => {
  if (inputs.Color) {
    Object.assign(Color, inputs.Color)
  }
  if (inputs.Space) {
    Object.assign(Space, inputs.Space)
  }
  if (inputs.Font) {
    Object.assign(Font, inputs.Font)
  }
}
