export interface AccountState {
  login: LoginState;
}

export interface LoginState {
  readonly loggedIn: boolean;
}

export const initialAccountState: AccountState = {
  login: {
    loggedIn: false,
  }
};
