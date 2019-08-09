import fetch from 'isomorphic-unfetch';
import { action, observable, runInAction } from 'mobx';

export default class UserStore {
  @observable users = [];
  @observable state = 'pending';
  root: any;

  constructor(root) {
    this.root = root;
  }

  @action
  async fetchUsers () {

    this.state = "pending"
    try {
      const response = await fetch('https://koreanjson.com/users');
      const json = await response.json();
      // after await, modifying state again, needs an actions:
      runInAction(() => {
        this.state = "done";
        this.users = json;
      })
    } catch (error) {
      runInAction(() => {
        this.state = "error"
      })
    }
  }
}