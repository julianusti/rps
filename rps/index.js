import strategies from './strategies'

const SHAPES = Object.keys(strategies)

/**
 * Returns the game result between player1 and player2.
 * @param {Object} playerOne.shape - The player1 shape.
 * @param {Object} playerTwo.shape - The player2 shape.
 * @returns {string} game result one of: win | lose | tie
 */
export const play = (playerOne, playerTwo) => {
  if (!playerOne.shape || !strategies[playerOne.shape]) {
    const errorMsg = `"playerOne" shape type is wrong. Expected type: ${SHAPES.join(
      ' | '
    )}`

    throw new TypeError(errorMsg)
  }

  if (!playerTwo.shape || !strategies[playerTwo.shape]) {
    const errorMsg = `"playerTwo" shape type is wrong. Expected type: ${SHAPES.join(
      ' | '
    )}`

    throw new TypeError(errorMsg)
  }

  return {
    playerOneSelectedShape: playerOne.shape,
    playerTwoSelectedShape: playerTwo.shape,
    result: {
      playerOneVsPlayerTwo: strategies[playerOne.shape](playerTwo.shape)
    }
  }
}

/**
 * Returns the game result between player1 and computer.
 * @param {Object} playerOne.shape - The player1 shape.
 * @returns {string} game result one of: win | lose | tie
 */
export const playVsComputer = playerOne => {
  if (!playerOne.shape || !strategies[playerOne.shape]) {
    const errorMsg = `"playerOne" shape type is wrong. Expected type: ${SHAPES.join(
      ' | '
    )}`

    throw new TypeError(errorMsg)
  }

  const computerShape = getRandomShape(SHAPES)

  return {
    playerOneSelectedShape: playerOne.shape,
    playerTwoSelectedShape: computerShape,
    result: {
      playerOneVsPlayerTwo: strategies[playerOne.shape](computerShape)
    }
  }
}

/**
 * Returns the game result between computer and computer.
 * The shapes selected randomly to emulate both computers.
 * @returns {string} game result one of: win | lose | tie
 */
export const computerVsComputer = () => {
  const computerOneShape = getRandomShape(SHAPES)
  const computerTwoShape = getRandomShape(SHAPES)

  return {
    playerOneSelectedShape: computerOneShape,
    playerTwoSelectedShape: computerTwoShape,
    result: {
      playerOneVsPlayerTwo: strategies[computerOneShape](computerTwoShape)
    }
  }
}

/**
 * Returns random shape.
 * @param {string[]} shapes - possible shapes.
 * @returns {string} random shape one of: paper | rock | scissors
 */
const getRandomShape = shapes =>
  shapes[Math.floor(Math.random() * shapes.length)]
