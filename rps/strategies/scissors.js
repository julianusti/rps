import result from "../result";

export default function(shape) {
  return {
    paper: result.WIN,
    rock: result.LOSE,
    scissors: result.TIE
  }[shape];
}
