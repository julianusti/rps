import result from "../result";

export default function(shape) {
  return {
    paper: result.LOSE,
    scissors: result.WIN,
    rock: result.TIE
  }[shape];
}
