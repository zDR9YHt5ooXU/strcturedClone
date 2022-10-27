// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const SOURCES = Symbol('data');
class Source {
  greet() {
    console.log('Hi');
  }
}
class Person {
  [SOURCES] = new Source();
}

const clonedPerson = structuredClone(new Person());

clonedPerson[SOURCES].greet();

const clonedSource = structuredClone(new Source());
clonedSource.greet();
