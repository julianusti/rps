import result from '../result'

export default function(shape) {
  return {
    rock: result.WIN,
    scissors: result.LOSE,
    paper: result.TIE
  }[shape]
}
