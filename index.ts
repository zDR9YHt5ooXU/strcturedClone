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

console.log('Cloning a source entry');
const clonedPerson = structuredClone(new Person());
clonedPerson[SOURCES].greet();

console.log('Cloning a source');
const clonedSource = structuredClone(new Source());
clonedSource.greet();
