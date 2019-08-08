import fetch from 'isomorphic-unfetch';
import { action, computed, observable } from 'mobx';

export default class UserStore {
  @observable users = [];
  @observable state = 'pending';
  private root: any;

  constructor(root) {
    this.root = root;
  }

  @action
  async fetchUsers () {
    const response = await fetch('https://koreanjson.com/users');
    const json = await response.json();
    this.users = json;
  }
}