import { BrowserCacheLocation, PublicClientApplication } from '@azure/msal-browser';
import { isInteractionNeeded } from '../../mainApp/utils/security.util';

const defaultScope = {
  scopes: ['user.read']
};

const defaultStorageConfig = {
  cache: {
    cacheLocation: BrowserCacheLocation.SessionStorage // "sessionStorage"
  }
};

class Authenticator {
  constructor({ msalConfig, scope }) {
    this.scopeRequestConfig = scope ?? defaultScope.scopes.toString();
    this.msalInstance = new PublicClientApplication(msalConfig);
  }
  
  loginPopup = async () => {
    await this.msalInstance.initialize();
    try {
      await this.msalInstance.acquireTokenPopup({
        scopes: [this.scopeRequestConfig]
      });
      const silentResult = await this.getItSilently();
      const allAccounts = this.msalInstance.getAllAccounts();
      
      return {
        token: silentResult.token,
        idToken: silentResult.idToken,
        account: allAccounts[0]
      };
    } catch (e) {
      
      return {
        token: null,
        idToken: null,
        account: null,
        error: e
      };
    }
  };
  
  getAccessToken = async () => {
    await this.msalInstance.initialize();
    const allAccounts = this.msalInstance.getAllAccounts();
    try {
      if (allAccounts && allAccounts.length <= 0) throw new Error('login_required');
      const silentResult = await this.getItSilently();
      
      return {
        token: silentResult.token,
        idToken: silentResult.idToken,
        account: allAccounts[0]
      };
    } catch (err) {
      if (isInteractionNeeded(err)) {
        return await this.loginPopup();
      } else {
        throw err;
      }
    }
  };
  
  getItSilently = async () => {
    const allAccounts = this.msalInstance.getAllAccounts();
    const silentResult = await this.msalInstance.acquireTokenSilent({
      scopes: [this.scopeRequestConfig],
      account: allAccounts[0]
    });
    
    return {
      token: silentResult.accessToken,
      idToken: silentResult.idToken,
      account: allAccounts[0]
    };
  };
}

export default Authenticator;