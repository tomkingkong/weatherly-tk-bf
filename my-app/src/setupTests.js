import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';


configure({ adapter: new Adapter() });


class LocalStorage {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, string) {
    this.store[key] = string;
  }

  clear() {
    this.store = {};
  }
}
global.localStorage = new LocalStorage;
global.document = jsdom.jsdom('');
global.window = document.defaultView;
global.navigator = window.navigator;
