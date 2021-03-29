export interface OAuthAbstractService {
  getLoginUrl: () => Promise<string>;
};
