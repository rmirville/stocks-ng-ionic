const names = {
  authService: '[Auth Service]',
  loginPage: '[Login Page]',
  noteLoaderSvc: '[Note Loader Service]',
  noteDetailsPg: '[Note Details Page]',
  noteSummaryCmp: '[Note Summary Component]',
  registerPage: '[Register Page]',
  stockLoaderSvc: '[Stock Loader Service]',
};

export const ACTION_TYPES = {
  authService: {
    LOGIN_SUCCESS: `${names.authService} Login Attempt Success`,
    LOGIN_FAILURE: `${names.authService} Login Attempt Failure`,
    REGISTER_SUCCESS: `${names.authService} Registration Attempt Success`,
    REGISTER_FAILURE: `${names.authService} Registration Attempt Failure`,
  },
  loginPage: {
    LOGIN: `${names.loginPage} Login Attempt`,
  },
  noteLoaderService: {
    GET_DETAILS_ONE_SUCCESS: `${names.noteLoaderSvc} Stock Note Details Fetch Success`,
    GET_DETAILS_ONE_FAILURE: `${names.noteLoaderSvc} Stock Note Details Fetch Failure`,
    GET_SUMMARIES_ALL_SUCCESS: `${names.noteLoaderSvc} Stock Notes Summary Fetch Success`,
    GET_SUMMARIES_ALL_FAILURE: `${names.noteLoaderSvc} Stock Notes Summary Fetch Failure`,
  },
  noteDetailsPage: {
    GET_DETAILS_ONE: `${names.noteDetailsPg} Stock Note Details Request`,
  },
  noteSummaryComponent: {
    GET_SUMMARIES_ALL: `${names.noteSummaryCmp} Stock Notes Request`,
  },
  registerPage: {
    REGISTER: `${names.registerPage} Registration Request`,
  },
  stockLoaderService: {
    GET_ONE_SUCCESS: `${names.stockLoaderSvc} Stock Fetch Success`,
    GET_ONE_FAILURE: `${names.stockLoaderSvc} Stock Fetch Failure`,
    GET_MULTI_SUCCESS: `${names.stockLoaderSvc} Stock Fetch Multiple Success`,
    GET_MULTI_FAILURE: `${names.stockLoaderSvc} Stock Fetch Multiple Failure`,
    GET_ALL_SUCCESS: `${names.stockLoaderSvc} Stock Fetch All Success`,
    GET_ALL_FAILURE: `${names.stockLoaderSvc} Stock Fetch All Failure`,
  }
};
