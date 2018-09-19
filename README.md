RPS - implementation of `rock-paper-scissors` game in `vanilla JS` with `custom redux`, connected to `ui-components` and structured in a similar way like `react components`.

Attention❗ when you see `$` or `$$` in this project, don't worry, it's not `jQuery`. It's just a named wrappers for `document.querySelector` and `document.querySelectorAll`.

Attention❗ the main focus of this `rps` implementation covers architecturual aspects. Therefore, UI part is really basic, without any stylings.

## Project Structure

📁 `lib` - this folder contains tiny redux implementation that allows us to follow unidirectional data flow, from `view component`>`action`>`reducer`>`view component`.
**Keep in mind:** It doesn't covers all the edge cases.

📁 `rps` - this folder contains `rock-paper-scissors` game/rule engine. It's super easy to extend with other shapes, like `lizard` and `spock`.
All you have todo is to create your new strategy, like below and include it to `index.js` in the same folder:

```
import result from '../result'

export default function(shape) {
  return {
    rock: result.WIN,
    scissors: result.LOSE,
    paper: result.TIE
  }[shape]
}
```

📁 `src` - this folder contains UI specific components, like: `actions`, `reducers`, `store` and `components`.

📁 `tests` - this folder is for our tests.

## How To Run It

1. Make sure you are running uptodate `node version`. We use `node v. 10`.
2. Install all dependecies by running command in your terminal:

```
yarn install
```

3. To start `rps` in development mode, run the following command:

```
yarn start
```

4. To build `rps` for production, run the following command:

```
yarn build
```

5. To run tests and see test coverage, run the following command:

```
yarn test
```
