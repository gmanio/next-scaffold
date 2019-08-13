import UserStore from '@src/stores/UserStore';
import makeInspectable from 'mobx-devtools-mst';

class RootStore {
  public userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
  }
}

export default makeInspectable(RootStore);