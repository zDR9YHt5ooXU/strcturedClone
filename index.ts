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

// console.log('Cloning a source entry');
// const clonedPerson = structuredClone(new Person());
// // clonedPerson[SOURCES].greet();

// console.log('Cloning a source');
// const clonedSource = structuredClone(new Source());
// clonedSource.greet();

class OmniSource {
  constructor(public name: string) {}

  method() {
    return true;
  }
}

const SOURCE = Symbol('source');
const PRIMARY_KEY = Symbol('primary_key');
class OmniSourceEntry {
  [SOURCE]: OmniSource;

  constructor(omniSource: OmniSource, protected semiSecret: string) {
    this[SOURCE] = omniSource;
  }

  clone() {
    return structuredClone(this);
  }
}

const SECRET = 'secret';
const OPEN = 'open';
const SEMISECRET = 'semiSecret';
const UPDATED = 'updated';

class InterfaceSourceEntry extends OmniSourceEntry {
  willBeDiscarded = { [PRIMARY_KEY]: 'primary' };
  cloneWithoutMethods: { source: OmniSource };
  willStay = { data: { name: 'name' } };
  private nestedSecret = { secret: SECRET };

  constructor(
    private secret: string,
    public open: string,
    omniSource: OmniSource,
    protected semiSecret: string
  ) {
    super(omniSource, semiSecret);
    this.cloneWithoutMethods = {
      source: omniSource,
    };
  }

  setSecret(secret: string) {
    this.secret = secret;
  }

  getSecret() {
    return this.secret;
  }

  setSemiSecret(secret: string) {
    this.semiSecret = secret;
  }

  getSemiSecret() {
    return this.semiSecret;
  }

  updateData() {
    this.willStay.data.name = 'updated';
  }

  setNestedSecret(secret: string) {
    this.nestedSecret.secret = secret;
  }

  getNestedSecret() {
    return this.nestedSecret.secret;
  }
}

const interfaceEntry = new InterfaceSourceEntry(
  SECRET,
  OPEN,
  new OmniSource('interface'),
  SEMISECRET
);
const clonedEntry = interfaceEntry.clone();
/**
 * clonedEntry.setSecret should not update private interfaceEntry.secret
 */
console.log(clonedEntry.getSecret());
