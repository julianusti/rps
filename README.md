RPS - implementation of `rock-paper-scissors` game in `vanilla JS` with `custom redux`, connected to `ui-components` and structured in a similar way like `react components`.

**Attention❗** when you see `$` or `$$` in this project, don't worry, it's not `jQuery`. It's just a named wrappers for `document.querySelector` and `document.querySelectorAll`.

**Attention❗** the main focus of this `rps` implementation covers architecturual aspects. Therefore, UI part is really basic, without any stylings.

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
0. Clone the repository to your local enviroment by running a comman in your terminal:
```
git clone git@github.com:julianusti/rps.git
```
1. Make sure you are running uptodate version of `Node.JS`. We use `version 10`.
2. Install all dependecies by running command in your terminal:

```
yarn install
```

3. To start `rps` in development mode, run the following command:

```
yarn start
```
**Hint:** Since we have our own implementation of `redux` which is really limitted to this particular use case, we don't have any dev tools, like those that shows you the state tree when certain `action` is dispatched. Therefore, our version of `redux` outputs each action with `action.type` and `action.payload` to the console of your browser, so we can debug our app.

4. To build `rps` for production, run the following command:

```
yarn build
```

5. To run tests and see test coverage, run the following command:

```
yarn test
```
