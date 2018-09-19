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
📁 `src/components` - since we do not use `react`, but want to leverage `redux` at its full power (whatever power we were able to implement :) ), we have a structure of components that we can devide into two parts: `presentational components` - to manipulate DOM and nothing else. `container components` - components that can dispatch actions.

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

## Pros/Cons of this implementation

#### Pros
1. By having our own `redux` we have unidiractional data flow in our application, which gives it clear understanding how view is updated.
2. The app has an extensible structure that can be easily picked up by any new developer that is going to work on this project.
3. `rps` aka `rps engine` - is using strategy design pattern and at the same time leveraging `JavaScript` fundamentals of dealing with `object literals` and `functions`. Each strategy in our case is a `pure function`, it defines the rules per shape (paper, rock, scissors). To extend it with the new shape, you have to create a new strategy and import it to `index.js`, where it is used in `object literal` where `key` is the name of the shape and `value` its strategy implementation.
4. `components` - inspired by react, we have components in here, that has two roles, `presentational components` and `container components`. For details see `Project Structure` of this documentation.

#### Cons
1. Our own implementation of `redux` doesn't cover all the edge cases, therefore needs to be improved or replaced by official `redux`.
2. Every time we update our view we have `reflow` and `repaint` happen for the whole application no matter what changes we do. Which leads to performance penalties in comparison with `react` where we do manipulations in a `Virtual Dom` that updates specifc parts of the application. 
3. Styling part (css) of the app - obviously, we don't want to serve this kind of UI, where you don't have any styles and it's not addopted for mobile first users. First thing we do as a next step is to imlement mobile first ui, by using `less/scss` or `css in js`.
4. Components are not covered with automation tests . It would be also beneficial to create automation tests where we can test our application on a different browsers and devices.


