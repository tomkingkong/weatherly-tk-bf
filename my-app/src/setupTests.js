import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

<<<<<<< HEAD
configure({ adapter: new Adapter() });
=======
configure({ adapter: new Adapter() });


class API {
  constructor() {
    this.store = {};
  }

  fetch(key) {
    return this.store[key];
  }

  clear() {
    this.store = {};
  }
}

global.api = new API;
>>>>>>> testing