// src/stores/LoginStore.ts

import { observable, action } from 'mobx';

class LoginStore {
    @observable username: string = '';
    @observable password: string = '';
    @observable isLogin: boolean = false;
    @observable isRegisterOpen: boolean = false;
  
    @action setUsername = (value: string) => {
      this.username = value;
    };
  
    @action setPassword = (value: string) => {
      this.password = value;
    };
  
    @action setIsLogin = (value: boolean) => {
      this.isLogin = value;
    };
    @action setIsRegisterOpen = (value: boolean) => {
        this.isRegisterOpen = value;
      };
}

const loginStore = new LoginStore();

export default loginStore;
