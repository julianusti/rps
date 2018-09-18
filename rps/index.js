import strategies from './strategies'

const SHAPES = Object.keys(strategies)

export const play = (p1, p2) => {
  if (!p1.shape || !strategies[p1.shape]) {
    const errorMsg = `"p2" shape type is wrong. Expected type: { ${SHAPES.filter(
      s => s !== p2.shape
    ).join(' | ')} }`

    throw new TypeError(errorMsg)
  }

  if (!p2.shape || !strategies[p2.shape]) {
    const errorMsg = `"p2" shape type is wrong. Expected type: { ${SHAPES.filter(
      s => s !== p2.shape
    ).join(' | ')} }`
    throw new TypeError(errorMsg)
  }

  return strategies[p1.shape](p2.shape)
}

export const playVsComputer = p1 => {
  if (!p1.shape || !strategies[p1.shape]) {
    const errorMsg = `"p1" shape type is wrong. Expected type: { ${SHAPES.filter(
      s => s !== p1.shape
    ).join(' | ')} }`

    throw new TypeError(errorMsg)
  }

  const computerShape = getRandomShape(SHAPES)

  return strategies[p1.shape](computerShape)
}

export const computerVsComputer = () => {
  const computerOneShape = getRandomShape(SHAPES)
  const computerTwoShape = getRandomShape(SHAPES)

  return strategies[computerOneShape](computerTwoShape)
}

const getRandomShape = shapes =>
  shapes[Math.floor(Math.random() * shapes.length)]
