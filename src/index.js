import '@babel/polyfill';
import configureStore from './store';
import { Container, Header, Score, Footer } from './components';

const store = configureStore();

(()=> {
  document.getElementById("app").innerHTML = `
    <h1>Paper Rock Scissors!</h1>
    <div>
      <button>Start</button>
      comming soon...
    </div>
  `;
})();
