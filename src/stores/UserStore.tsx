import fetch from 'isomorphic-unfetch';
import { action, computed, observable } from 'mobx';

export default class UserStore {
  @observable users = [];
  @observable state = 'pending';

  @action
  async fetchUsers () {
    const response = await fetch('https://koreanjson.com/users');
  }
}