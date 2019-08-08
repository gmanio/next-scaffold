import UserStore from '@src/stores/UserStore';

class RootStore {
  private userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
  }
}

export default RootStore;