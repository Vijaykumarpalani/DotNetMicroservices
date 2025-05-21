// mainApp/components/App.jsx
import React41, { memo as memo18, useEffect as useEffect2 } from "react";
import { ThemeProvider } from "@mui/material";
import { StyledApp, theme } from "vfs-data-portal-components";

// mainApp/provider/reactQuery.provider.jsx
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// SalesOnline/config/reactQuery.config.js
import { QueryCache, QueryClient } from "@tanstack/react-query";

// mainApp/utils/asyncWrapper.util.jsx
var alertMessageFunction;
var setAlertMessageFunction = (func) => alertMessageFunction = func;
var asyncWrapper = async (promise, successMessage) => {
  var _a, _b, _c;
  try {
    const { data } = await promise;
    if (successMessage && alertMessageFunction) {
      alertMessageFunction(successMessage, "success");
    }
    return [data, null];
  } catch (e) {
    console.log((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message);
    const message = (_c = e.message) != null ? _c : "Something went wrong";
    alertMessageFunction(message, "error");
    return [null, e];
  }
};

// SalesOnline/config/reactQuery.config.js
var queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      var _a;
      const message = (_a = error.message) != null ? _a : "Something went wrong";
      console.log(error);
      alertMessageFunction(message, "error");
    }
  })
});

// mainApp/provider/reactQuery.provider.jsx
var ReactQueryWrapper = ({ children }) => {
  return /* @__PURE__ */ React.createElement(QueryClientProvider, {
    client: queryClient,
    contextSharing: true
  }, children, /* @__PURE__ */ React.createElement(ReactQueryDevtools, null));
};

// mainApp/components/_common/style.jsx
import { styled, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DatePicker } from "@mui/x-date-pickers";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";

// mainApp/consts/ui.consts.js
var PADDING = "2.8rem";
var REGULAR_FONT_SIZE = "1.6rem";
var TABLE_FONT_SIZE = "1.4rem";
var ERROR_COLOR = "#C52127";
var GREY = "#888B8D";

// mainApp/components/_common/style.jsx
var RegularText = styled(Typography)`
    font-size: ${REGULAR_FONT_SIZE};
    font-weight: ${({ fontWeight }) => fontWeight || 400};
    color: ${({ color }) => color != null ? color : "#000000"};
    cursor: ${({ cursor }) => cursor || "auto"};
    margin: ${({ margin }) => margin};
`;
var StyledViewWrapper = styled("div")`
    display: grid;
    grid-template-columns: 1.2fr 6.5fr;
    position: relative;
`;
var StyledDashboard = styled("div")`
    width: 100%;
    overflow: auto;
`;
var StyledContentWrapper = styled("div")`
    background: #F8F8F8;
    padding: ${PADDING};
    min-height: 80vh;
`;
var StyledTableWrapper = styled("div")`
    max-width: 100%;
`;
var StyledDataTable = styled(DataGrid)`
    background-color: #FFFFFF;
    overflow-x: auto;
    width: 100%;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */

    &::-webkit-scrollbar {
        width: 0 !important
    }

    .MuiDataGrid-columnHeaders {
        background-color: #C4D2D5 !important;
    }

    .MuiDataGrid-columnHeaderTitle {
        font-weight: 600 !important;
        text-transform: capitalize;
        font-size: ${REGULAR_FONT_SIZE};
    }

    .error-row {
        color: ${ERROR_COLOR};
        border: 1px solid ${ERROR_COLOR};
    }

    font-size: ${TABLE_FONT_SIZE};

    input {
        font-size: ${TABLE_FONT_SIZE};
    }
`;
var StyledGroup = styled("div")`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: 3rem;
`;
var StyledLabel = styled(Typography)`
    text-transform: capitalize;
    font-size: ${TABLE_FONT_SIZE};
    color: ${({ color }) => color != null ? color : "inherit"};
`;
var StyledValue = styled(Typography)`
    color: #000;
    font-weight: 600;
    font-size: ${REGULAR_FONT_SIZE};
`;
var StyledDatePicker = styled(DatePicker)`
    width: 100% !important;
    background-color: #FFFFFF;
    border-radius: 1rem;
    min-width: 0 !important;

    .MuiStack-root {
        overflow: visible;

        .MuiFormControl-root.MuiTextField-root {
        }
    }

`;
var StyledSmallIcon = styled("i")`
    font-size: ${({ size }) => size != null ? size : TABLE_FONT_SIZE};
    color: ${({ color }) => color};
`;
var StyledCardsGallery = styled("div")`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
`;
var StyledControlLabel = styled(FormControlLabel)`
    span {
        font-size: ${REGULAR_FONT_SIZE};
    }
`;
var StyledDashboardContainer = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;
var StyledUnauthorized = styled(Box)`
    display: flex;
    margin-top: 2rem;
    gap: 2rem;
    max-width: 35rem;
`;

// mainApp/components/navbar/Navbar.jsx
import React4 from "react";
import { Chip, List } from "@mui/material";

// mainApp/components/navbar/style.jsx
import { ListItem, ListItemIcon, ListItemText, styled as styled2 } from "@mui/material";
var StyledNavbar = styled2("div")`
    height: 100%;
    border-right: 1px solid #E6E6E6;
    min-height: 90vh;
`;
var StyledLogoWrapper = styled2("div")`
    height: 13vh;
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
`;
var StyledContent = styled2("div")`
    padding-top: ${PADDING};
    padding-right: 1.3rem;
`;
var StyledListItem = styled2(ListItem)`
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
    background: ${({ isselected }) => isselected === "true" ? "#E6E6E6" : "transparent"};

    &:hover {
        background-color: #E6E6E6;
    }
`;
var StyledListItemIcon = styled2(ListItemIcon)`
    min-width: 3rem;
    padding-right: 1rem;

    i {
        font-size: 2.8rem;
    }
`;
var StyledListItemText = styled2(ListItemText)`
    span {
        font-size: ${REGULAR_FONT_SIZE};
        color: ${({ isselected }) => isselected === "true" ? "#888B8D" : "inherit"};
    }
`;

// mainApp/assets/VolvoLogo.jsx
import React2 from "react";
var Logo = (props) => /* @__PURE__ */ React2.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xmlSpace: "preserve",
  style: {
    enableBackground: "new 0 0 949.4 73.7"
  },
  viewBox: "0 0 949.4 73.7",
  width: "17rem",
  ...props
}, /* @__PURE__ */ React2.createElement("path", {
  d: "m16.1 12.2 32.7 59.4h37.8l32.1-59.4h16.1V1.5H86.4v10.7h14L77 55.5 53.3 12.2h17V1.5H0v10.7zM432.4 12.2V1.5h64.8v10.7H481v48.5h15c13.9 0 22.9-9.1 22.9-21.6h10.7v32.5h-97.3V60.7h16.3V12.2h-16.2zM275.3 0c-32.5 0-49.8 16.2-49.8 36.6 0 20.6 16.6 37.1 50 37.1s49.8-16.5 49.8-37.1c0-20.4-17.5-36.6-50-36.6zm-.3 62.6c-11.9-.2-17.1-13.4-16.9-26.4.2-13.5 6.7-25.3 17.8-25.1s17 12.2 16.8 25.7c-.3 12.7-5.5 26-17.7 25.8zM640.2 12.2l32.6 59.4h37.9l32.1-59.4h16.1V1.5h-48.4v10.7h14l-23.4 43.3-23.7-43.3h17V1.5h-70.3v10.7zM899.4 0c-32.5 0-49.8 16.2-49.8 36.6 0 20.6 16.6 37.1 50 37.1s49.8-16.5 49.8-37.1c0-20.4-17.4-36.6-50-36.6zm-.4 62.6c-11.9-.2-17.1-13.4-16.9-26.4.2-13.5 6.7-25.3 17.8-25.1s17 12.2 16.8 25.7c-.2 12.7-5.4 26-17.7 25.8z"
}));

// mainApp/stores/zustand/mainApp.store.js
import { produce } from "immer";
import { create } from "zustand";
var initialState = {
  selectedInterface: null,
  navItems: [],
  currentView: null
};
var useMainAppStore = create((set) => ({
  ...initialState,
  choseInterface: (chosenInterface) => {
    set(
      produce(
        (state) => {
          state.selectedInterface = chosenInterface;
        }
      )
    );
  },
  clearInterface: () => {
    set(
      produce(
        (state) => {
          state.selectedInterface = null;
          state.currentView = null;
          state.navItems = [];
        }
      )
    );
  },
  setNavItems: (interfaceNavItems) => {
    set(
      produce(
        (state) => {
          var _a;
          state.navItems = interfaceNavItems;
          state.currentView = (_a = interfaceNavItems[0]) == null ? void 0 : _a.value;
        }
      )
    );
  },
  setCurrentView: (viewValue) => {
    set(
      produce(
        (state) => {
          state.currentView = viewValue;
        }
      )
    );
  },
  cleanup: () => {
    set(
      produce(() => initialState)
    );
  }
}));

// mainApp/stores/zustand/mainApp.selector.js
var mainAppSelector = {
  selectedInterface: (state) => state.selectedInterface,
  cleanUp: (state) => state.cleanUp,
  choseInterface: (state) => state.choseInterface,
  navItems: (state) => state.navItems,
  setNavItems: (state) => state.setNavItems,
  setCurrentView: (state) => state.setCurrentView,
  currentView: (state) => state.currentView,
  clearInterface: (state) => state.clearInterface
};

// mainApp/components/navbar/NavItem.jsx
import React3 from "react";
var NavItem = ({ item }) => {
  const setCurrentView = useMainAppStore(mainAppSelector.setCurrentView);
  const currentView = useMainAppStore(mainAppSelector.currentView);
  const checkIfSelected = (value) => {
    return currentView === value;
  };
  const isSelected = checkIfSelected(item.value);
  const handleSelect = (view) => {
    setCurrentView(view.value);
  };
  return /* @__PURE__ */ React3.createElement(StyledListItem, {
    key: item.value,
    isselected: isSelected.toString(),
    onClick: () => handleSelect(item)
  }, /* @__PURE__ */ React3.createElement(StyledListItemIcon, null, /* @__PURE__ */ React3.createElement("i", {
    className: "material-icons-outlined"
  }, item.icon)), /* @__PURE__ */ React3.createElement(StyledListItemText, {
    isselected: isSelected.toString()
  }, item.label));
};

// mainApp/components/navbar/Navbar.jsx
var Navbar = () => {
  const navItems = useMainAppStore(mainAppSelector.navItems);
  const clearInterface = useMainAppStore(mainAppSelector.clearInterface);
  const selectedInterface = useMainAppStore(mainAppSelector.selectedInterface);
  return /* @__PURE__ */ React4.createElement(StyledNavbar, null, /* @__PURE__ */ React4.createElement(StyledLogoWrapper, null, /* @__PURE__ */ React4.createElement(Logo, null)), /* @__PURE__ */ React4.createElement(StyledContent, null, !(selectedInterface == null ? void 0 : selectedInterface.label) ? /* @__PURE__ */ React4.createElement(Chip, {
    label: "No interface selected",
    variant: "outlined"
  }) : /* @__PURE__ */ React4.createElement(Chip, {
    label: selectedInterface == null ? void 0 : selectedInterface.label,
    onDelete: () => clearInterface()
  }), /* @__PURE__ */ React4.createElement(List, null, navItems == null ? void 0 : navItems.map((item, index) => /* @__PURE__ */ React4.createElement(NavItem, {
    key: index,
    item
  })))));
};

// mainApp/components/header/Header.jsx
import React5 from "react";

// mainApp/components/header/style.jsx
import { styled as styled3 } from "@mui/material";
var StyledHeader = styled3("div")`
    height: 13vh;
    border-bottom: 1px solid #E6E6E6;
    padding-left: ${PADDING};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
`;

// mainApp/components/header/Header.jsx
import { AppTitle, Paragraph } from "vfs-data-portal-components";
var Header = () => {
  var _a, _b;
  const selectedInterface = useMainAppStore(mainAppSelector.selectedInterface);
  return /* @__PURE__ */ React5.createElement(StyledHeader, null, /* @__PURE__ */ React5.createElement(AppTitle, null, (_a = selectedInterface == null ? void 0 : selectedInterface.label) != null ? _a : "Interest Rate Configurator"), /* @__PURE__ */ React5.createElement(Paragraph, null, (_b = selectedInterface == null ? void 0 : selectedInterface.description) != null ? _b : "Platform for managing Interest Rate calculations"));
};

// mainApp/components/interfaceSelection/Main.jsx
import React40 from "react";

// mainApp/consts/app.consts.js
var INTERFACE_TYPES = {
  SALES_ONLINE: 1,
  VOLVO_SELECTED: 2
};
var { SALES_ONLINE, VOLVO_SELECTED } = INTERFACE_TYPES;
var INTERFACES = {
  [SALES_ONLINE]: {
    label: "Sales Online",
    value: 1,
    icon: "explore",
    description: "Platform for maintaining Interest Rate calculations for Norway"
  },
  [VOLVO_SELECTED]: {
    label: "Volvo Selected",
    value: 2,
    icon: "paid",
    description: "Interest Rate Configurator"
  }
};

// mainApp/components/_common/surfaces/Card.jsx
import React6, { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography2 from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
var InterfaceCard = memo(({ card, selectCard }) => {
  return /* @__PURE__ */ React6.createElement(Card, null, /* @__PURE__ */ React6.createElement(CardActionArea, {
    onClick: () => selectCard(card),
    sx: {
      height: "100%",
      "&[data-active]": {
        backgroundColor: "action.selected",
        "&:hover": {
          backgroundColor: "action.selectedHover"
        }
      }
    }
  }, /* @__PURE__ */ React6.createElement(CardContent, {
    sx: { height: "100%" }
  }, /* @__PURE__ */ React6.createElement(Typography2, {
    variant: "h5",
    component: "div"
  }, card.label), /* @__PURE__ */ React6.createElement(RegularText, {
    color: "text.secondary"
  }, card.description))));
});

// SalesOnline/index.jsx
import React31 from "react";

// SalesOnline/stores/zustand/selectors/app.selector.js
var selector = {
  cleanUp: (state) => state.cleanUp,
  authenticate: (state) => state.authenticate,
  auth: (state) => state.auth,
  setAuthorization: (state) => state.setAuthorization,
  authorizedRead: (state) => state.authorizedRead,
  authorizedWrite: (state) => state.authorizedWrite,
  accessRoles: (state) => state.accessRoles,
  finishedAuth: (state) => state.finishedAuth
};

// SalesOnline/stores/zustand/selectors/cof.selector.js
var selector2 = {
  originalTableData: (state) => state.originalTableData,
  updatedTableData: (state) => state.updatedTableData,
  originalCofConfiguration: (state) => state.originalCofConfiguration,
  updatedCofConfiguration: (state) => state.updatedCofConfiguration,
  setCofData: (state) => state.setCofData,
  cleanUp: (state) => state.cleanUp,
  updateRow: (state) => state.updateRow,
  reset: (state) => state.reset,
  goBackToDate: (state) => state.goBackToDate,
  setNewValidFrom: (state) => state.setNewValidFrom,
  validFrom: (state) => state.validFrom,
  newValidFrom: (state) => state.newValidFrom,
  updateCofBaseRate: (state) => state.updateCofBaseRate,
  rowsHaveChanged: (state) => {
    return state == null ? void 0 : state.originalTableData.some((row, idx) => {
      return JSON.stringify(row) !== JSON.stringify(state.updatedTableData[idx]);
    });
  },
  cofGeneralDetails: (state) => state.cofGeneralDetails,
  updateCofConfiguration: (state) => state.updateCofConfiguration
};

// SalesOnline/stores/zustand/selectors/surcharges.selector.js
var selector3 = {
  surchargeInView: (state) => state.surchargeInView,
  surchargesDict: (state) => state.surchargesDict,
  validFrom: (state) => state.validFrom,
  newValidFrom: (state) => state.newValidFrom,
  setSurchargeInView: (state) => state.setSurchargeInView,
  setSurcharge: (state) => state.setSurcharge,
  goBackToDate: (state) => state.goBackToDate,
  setNewValidFrom: (state) => state.setNewValidFrom,
  cleanUp: (state) => state.cleanUp,
  updateRow: (state) => state.updateRow,
  reset: (state) => state.reset,
  updatedData: (state) => {
    var _a, _b;
    return (_b = (_a = state.surchargesDict) == null ? void 0 : _a[state.surchargeInView]) == null ? void 0 : _b.updatedData;
  },
  columns: (state) => {
    var _a, _b;
    return (_b = (_a = state.surchargesDict) == null ? void 0 : _a[state.surchargeInView]) == null ? void 0 : _b.columns;
  },
  minimalData: (state) => {
    var _a, _b;
    return (_b = (_a = state.surchargesDict) == null ? void 0 : _a[state.surchargeInView]) == null ? void 0 : _b.minimalData;
  }
};

// SalesOnline/stores/zustand/selectors/proforma.selector.js
var selector4 = {
  proformaInView: (state) => state.proformaInView,
  proformaDict: (state) => state.proformaDict,
  setProformaInView: (state) => state.setProformaInView,
  updatedProformaDetails: (state) => state.updatedProformaDetails,
  setProformaDetails: (state) => state.setProformaDetails,
  updateProformaDetails: (state) => state.updateProformaDetails,
  originalProformaDetails: (state) => state.originalProformaDetails,
  updateRow: (state) => state.updateRow,
  goBackToDate: (state) => state.goBackToDate,
  setProformaObject: (state) => state.setProformaObject,
  reset: (state) => state.reset,
  setNewValidFrom: (state) => state.setNewValidFrom,
  cleanUp: (state) => state.cleanUp,
  updatedData: (state) => {
    var _a, _b;
    return (_b = (_a = state.proformaDict) == null ? void 0 : _a[state.proformaInView]) == null ? void 0 : _b.updatedData;
  },
  columns: (state) => {
    var _a, _b;
    return (_b = (_a = state.proformaDict) == null ? void 0 : _a[state.proformaInView]) == null ? void 0 : _b.columns;
  },
  minimalData: (state) => {
    var _a, _b;
    return (_b = (_a = state.proformaDict) == null ? void 0 : _a[state.proformaInView]) == null ? void 0 : _b.minimalData;
  },
  originalData: (state) => {
    var _a, _b;
    return (_b = (_a = state.proformaDict) == null ? void 0 : _a[state.proformaInView]) == null ? void 0 : _b.originalData;
  }
};

// SalesOnline/stores/zustand/selectors/rateConfiguration.selector.js
var selector5 = {
  rateConfiguration: (state) => state.rateConfiguration,
  setRateConfiguration: (state) => state.setRateConfiguration,
  cleanUp: (state) => state.cleanUp
};

// SalesOnline/stores/zustand/stores/global.store.js
import { create as create2 } from "zustand";
import { devtools } from "zustand/middleware";

// SalesOnline/stores/zustand/stores/app.store.js
import { produce as produce2 } from "immer";

// SalesOnline/consts/_common/localstorage.consts.js
var SALES_ONLINE_TOKEN = "sales_online_token";

// SalesOnline/utils/_common/localstorage.util.js
var LocalStorageUtil = (() => {
  const _setSalesOnlineToken = (token) => {
    localStorage.setItem(SALES_ONLINE_TOKEN, token);
  };
  const _getSalesOnlineToken = () => {
    return localStorage.getItem(SALES_ONLINE_TOKEN);
  };
  const _clearStorage = () => {
    localStorage.removeItem(SALES_ONLINE_TOKEN);
  };
  return {
    clearStorage: _clearStorage,
    setSalesOnlineToken: _setSalesOnlineToken,
    getSalesOnlineToken: _getSalesOnlineToken
  };
})();
var localstorage_util_default = LocalStorageUtil;

// SalesOnline/consts/security/auth.consts.js
var SALES_ONLINE_KEY = "sales-online-auth";

// SalesOnline/consts/_common/global.consts.js
var env;
var setEnv = (envName) => {
  env = envName;
};

// SalesOnline/utils/security/authenticator.util.js
import { BrowserCacheLocation, PublicClientApplication } from "@azure/msal-browser";

// mainApp/utils/security.util.js
import VFSAuth from "vfs-msal-auth";

// mainApp/config/axios.config.js
import axios from "axios";

// mainApp/consts/localstorage.consts.js
var ACCESS_TOKEN = "access_token";
var ID_TOKEN = "id_token";
var ACCOUNT = "account";
var ENV = "env";

// mainApp/utils/localstorage.util.js
var LocalStorageUtil2 = (() => {
  const _setAccessToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN, token);
  };
  const _setIdToken = (token) => {
    localStorage.setItem(ID_TOKEN, token);
  };
  const _getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
  };
  const _getIdToken = () => {
    return localStorage.getItem(ID_TOKEN);
  };
  const _removeAccessToken = () => {
    return localStorage.removeItem(ACCESS_TOKEN);
  };
  const _removeIdToken = () => {
    return localStorage.removeItem(ID_TOKEN);
  };
  const _setAccount = (account) => {
    localStorage.setItem(ACCOUNT, JSON.stringify(account));
  };
  const _getAccount = () => {
    const accountString = localStorage.getItem(ACCOUNT);
    return accountString ? JSON.parse(accountString) : null;
  };
  const _setEnvironment = (env4) => {
    localStorage.setItem(ENV, env4);
  };
  const _getEnvironment = () => {
    return localStorage.getItem(ENV);
  };
  const _clearStorage = () => {
    localStorage.removeItem(ENV);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(ID_TOKEN);
    localStorage.removeItem(ACCOUNT);
  };
  return {
    setAccessToken: _setAccessToken,
    setIdToken: _setIdToken,
    getAccessToken: _getAccessToken,
    getIdToken: _getIdToken,
    removeIdToken: _removeIdToken,
    removeAccessToken: _removeAccessToken,
    setAccount: _setAccount,
    getAccount: _getAccount,
    setEnvironment: _setEnvironment,
    getEnvironment: _getEnvironment,
    clearStorage: _clearStorage
  };
})();
var localstorage_util_default2 = LocalStorageUtil2;

// mainApp/config/axios.config.js
var commonClient = axios.create();
var setCommonApiInterceptors = () => {
  commonClient.interceptors.request.use(async (config) => {
    const token = localstorage_util_default2.getIdToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  commonClient.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log("error");
      const originalRequest = error.config;
      if (error.response && error.response.status === 401) {
        const { idToken } = await loginDataPortal();
        axios.defaults.headers.common["Authorization"] = "Bearer " + idToken;
        originalRequest.headers["Authorization"] = "Bearer " + idToken;
        return axios(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};

// mainApp/utils/security.util.js
var loginDataPortal = async () => {
  const res = await VFSAuth.signIn();
  setCommonApiInterceptors();
  return res;
};
var isInteractionNeeded = (error) => {
  if (!error.message || error.message.length <= 0) {
    return false;
  }
  return error.message.indexOf("consent_required") > -1 || error.message.indexOf("interaction_required") > -1 || error.message.indexOf("login_required") > -1 || error.message.indexOf("no_account_in_silent_request") > -1 || error.name.indexOf("InteractionRequiredAuthError") > -1;
};

// SalesOnline/utils/security/authenticator.util.js
var defaultScope = {
  scopes: ["user.read"]
};
var defaultStorageConfig = {
  cache: {
    cacheLocation: BrowserCacheLocation.SessionStorage
  }
};
var Authenticator = class {
  constructor({ msalConfig, scope }) {
    this.scopeRequestConfig = scope != null ? scope : defaultScope.scopes.toString();
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
      if (allAccounts && allAccounts.length <= 0)
        throw new Error("login_required");
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
};
var authenticator_util_default = Authenticator;

// mainApp/api/_common.api.js
var env2 = localstorage_util_default2.getEnvironment();
var sendEmail = (payload) => commonClient.post("https://vfs-dp-email-function.azurewebsites.net/api/sendEmail", payload);
var getMSALConfig = (secretName) => commonClient.post(`https://kevyvault-connector-${env2}.azurewebsites.net/api/getSecret`, { secretName });

// SalesOnline/utils/security/security.util.js
var authSalesOnline = async (manualLoginNeeded) => {
  const [data] = await asyncWrapper(getMSALConfig(SALES_ONLINE_KEY));
  if (!data)
    return;
  const msalConfig = JSON.parse(data.value);
  const scope = msalConfig.scopes[env];
  const authenticator = new authenticator_util_default({ msalConfig, scope });
  let account, token, error;
  if (manualLoginNeeded) {
    ({ account, token, error } = await authenticator.loginPopup());
  } else {
    ({ account, token, error } = await authenticator.getAccessToken());
  }
  localstorage_util_default.setSalesOnlineToken(token);
  return {
    account,
    token,
    headers: msalConfig.headers,
    error
  };
};

// mainApp/utils/utils.js
import { jwtDecode } from "jwt-decode";
var decodeToken = (token) => {
  if (!token)
    return;
  return jwtDecode(token);
};

// mainApp/consts/access.consts.js
var ACCESS_ROLES = {
  [INTERFACE_TYPES.SALES_ONLINE]: {
    READ: "Read.SalesOnline",
    WRITE: "Write.SalesOnline"
  },
  [INTERFACE_TYPES.VOLVO_SELECTED]: {
    READ: "Read.VolvoSelected",
    WRITE: "Write.VolvoSelected"
  }
};

// SalesOnline/stores/zustand/stores/app.store.js
var authorizationTypes = ACCESS_ROLES[INTERFACE_TYPES.VOLVO_SELECTED];
var initialState2 = {
  auth: null,
  finishedAuth: false,
  authorizedRead: true,
  authorizedWrite: true,
  accessRoles: []
};
var appStore = (set, get) => ({
  ...initialState2,
  authenticate: async () => {
    const auth = get().auth;
    if (!auth) {
      const res = await authSalesOnline();
      const decoded = decodeToken(res.token);
      if (res.account) {
        set(
          produce2(
            (state) => {
              var _a;
              state.auth = res.account;
              state.finishedAuth = true;
              state.accessRoles = decoded == null ? void 0 : decoded.roles;
              state.authorizedRead = (_a = decoded == null ? void 0 : decoded.roles) == null ? void 0 : _a.includes(authorizationTypes.READ);
            }
          )
        );
      }
      return res;
    }
  },
  setAuthorization: ({ type, value }) => {
    set(
      produce2(
        (state) => {
          state[type] = value;
        }
      )
    );
  },
  cleanUp: () => {
    console.log("cleaning up");
    set(
      produce2(() => initialState2)
    );
  }
});

// SalesOnline/stores/zustand/stores/cof.store.js
import { produce as produce3 } from "immer";

// SalesOnline/types/cof.types.js
var COF_CONFIGURATION = {
  CONFIGURATION_NAME: "configurationName",
  COUNTRY: "country",
  CURRENCY: "currency",
  BASE_INDEX: "baseIndex",
  TERM: "term",
  RESIDUAL: "residual",
  AMORT_PER_YEAR: "amortPerYear",
  FORWARD_START: "forwardStart",
  PRICING_DECIMALS: "pricingDecimals",
  VALID_FROM: "validFrom",
  USERNAME: "username",
  USER_ID: "userId",
  BASE_RATE: "baseRate",
  BASIS_POINTS: "basisPoints",
  BASIS_SWAP: "basisSwaps",
  UPDATED_DATE: "updatedDate"
};
var COF_BASE_RATE = {
  UPDATED_DATE: "updatedDate",
  USERNAME: "username",
  BASE_RATE: "baseRate",
  USER_ID: "userId"
};
var COF_BASIS_POINTS = {
  DETAIL: "detail"
};
var COF_BASIS_SWAP = {
  DETAIL: "detail"
};
var COF_BASIS_POINTS_DETAIL = {
  ID: "id",
  TERM: "term",
  BASIS_POINTS: "basisPoints",
  USER_ID: "userId",
  USERNAME: "username",
  UPDATED_DATE: "updatedDate"
};
var COF_BASIS_SWAPS_DETAIL = {
  ID: "id",
  TERM: "term",
  BASIS_SWAP: "basisSwap",
  UPDATED_DATE: "updatedDate",
  USER_ID: "userId",
  USERNAME: "username"
};

// SalesOnline/consts/cof/cof.consts.jsx
var TABLE_KEYS = {
  TERM: COF_BASIS_POINTS_DETAIL.TERM,
  BASIS_POINTS: COF_CONFIGURATION.BASIS_POINTS,
  BASIS_SWAP: COF_CONFIGURATION.BASIS_SWAP,
  LENDING: "lending"
};
var errMsgArrayVar = "errorMsgs";

// SalesOnline/types/proforma.types.js
var PROFORMA_LIST = {
  CONFIGURATION_NAME: "configurationName",
  SURCHARGES: "surchargeConfiguration"
};
var PROFORMA_LIST_ITEM = {
  NAME: "name"
};
var PROFORMA = {
  CONFIGURATION_NAME: "configurationName",
  VALID_FROM: "validFrom",
  CREATE_DATE: "createDate",
  USERNAME: "userName",
  SURCHARGE: "surchargeName",
  UPDATED_DATE: "updatedDate",
  DETAIL: "detail"
};
var PROFORMA_POINTS_KEYS = {
  BASE_POINTS: "basePoints",
  BUSINESS_AREA: "businessArea",
  TERM: "term"
};
var PROFORMA_CONFIG = {
  CREATE_DATE: "createDate",
  ID: "id",
  MIN_SPREAD: "minspread",
  PROFORMA: "proforma",
  RATE_CONFIGURATION_ID: "rateConfigurationId",
  USERNAME: "userName",
  USER_ID: "userId",
  VALID_FROM: "validFrom",
  UPDATED_DATE: "updatedDate"
};

// SalesOnline/utils/ui/ui.util.jsx
import React8 from "react";

// SalesOnline/components/Cof/style.jsx
import { styled as styled4 } from "@mui/material";
import { StyledFlex } from "vfs-data-portal-components";
var StyledCofWrapper = styled4("div")`
    width: 100%;
    display: grid;
    //grid-template-columns: 2fr 1fr 0.6fr; // with Go back to calendar
    grid-template-columns: 2.5fr 1.3fr;
    column-gap: 4rem;
`;
var StyledCofDashboard = styled4("div")`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 2rem;
`;
var StyledCofDashboardDetails = styled4("div")`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
var StyledEditCell = styled4(StyledFlex)`
    font-weight: 600;

    i {
        font-size: ${TABLE_FONT_SIZE};
    }
`;
var StyledTableErrors = styled4("div")`
    color: ${ERROR_COLOR};
    margin-top: 2rem;

    p {
        font-weight: 600;
    }
`;

// mainApp/components/_common/icons/GenericIcon.jsx
import React7 from "react";
var Icon = ({ label, color, size }) => /* @__PURE__ */ React7.createElement(StyledSmallIcon, {
  className: "material-icons-outlined",
  color,
  size
}, label);

// SalesOnline/utils/ui/ui.util.jsx
var renderDisabledCell = (field) => {
  return /* @__PURE__ */ React8.createElement("span", {
    style: { color: GREY }
  }, field.value);
};
var renderEditableColumn = (params) => {
  return /* @__PURE__ */ React8.createElement(StyledEditCell, {
    gap: "1rem"
  }, /* @__PURE__ */ React8.createElement("span", null, params.colDef.headerName), /* @__PURE__ */ React8.createElement(Icon, {
    label: "edit"
  }));
};
var maxLength = 25;
var ellipsisMidSentence = ({ str }) => {
  if (str.length <= maxLength)
    return str;
  const halfLength = Math.floor((maxLength - 3) / 2);
  return str.slice(0, halfLength) + "..." + str.slice(str.length - halfLength);
};

// SalesOnline/types/surcharges.types.js
var SURCHARGES_LIST = {
  CONFIGURATION_NAME: "configurationName",
  SURCHARGE_CONFIGURATION: "surchargeConfiguration"
};
var SURCHARGES_LIST_ITEM = {
  NAME: "name"
};
var SURCHARGE = {
  CONFIGURATION_NAME: "configurationName",
  CREATE_DATE: "createDate",
  DETAIL: "detail",
  SURCHARGE_NAME: "surchargeName",
  USERNAME: "userName",
  VALID_FROM: "validFrom",
  UPDATED_DATE: "updatedDate"
};
var SURCHARGE_POINTS_KEYS = {
  BASE_POINTS: "basePoints",
  BUSINESS_AREA: "businessArea",
  REVENUE_OVER_50M: "revenueOver50M",
  CREDIT_RATING: "creditRating"
};

// SalesOnline/utils/_common/date.util.js
import { format, parseISO } from "date-fns";
var formatDateTimeForDisplay = (date) => {
  if (!date) {
    return date;
  }
  return format(date, "dd MMM yyyy k:mm");
};
var formatDateForPicker = (date) => {
  if (!date) {
    return date;
  }
  return parseISO(date);
};
var formatDateForDb = (date) => {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss");
};

// SalesOnline/consts/surcharges/surcharges.consts.jsx
var TABLE_KEYS2 = {
  BUSINESS_AREA: "Business Area",
  RATING_TERM: "Rating/Term",
  AAA: "AAA",
  AA: "AA",
  A: "A",
  B: "B",
  C: "C",
  NONE: "NoRating"
};
var TABLE_RATING_TERMS = {
  OVER_50M: "Revenue > 50.000",
  UNDER_50M: "Revenue < 50.000"
};
var NO_RATING_TRANSLATION = "Ingen Rating";

// SalesOnline/utils/surcharges/surcharges.util.js
var { BUSINESS_AREA, RATING_TERM, NONE } = TABLE_KEYS2;
var { OVER_50M, UNDER_50M } = TABLE_RATING_TERMS;
var arrangeData = ({ data, isOpex = false }) => {
  if (isOpex) {
    return data[SURCHARGE.DETAIL].reduce((acc, curr) => {
      const businesAarea = curr[SURCHARGE_POINTS_KEYS.BUSINESS_AREA];
      const ratingTerm = curr[SURCHARGE_POINTS_KEYS.REVENUE_OVER_50M] === "TRUE" ? OVER_50M : UNDER_50M;
      const basisPoints = curr[SURCHARGE_POINTS_KEYS.BASE_POINTS];
      const creditRating = curr[SURCHARGE_POINTS_KEYS.CREDIT_RATING] === NONE ? NO_RATING_TRANSLATION : curr[SURCHARGE_POINTS_KEYS.CREDIT_RATING];
      const idx = acc.findIndex(
        (item) => item[BUSINESS_AREA] === businesAarea && item[RATING_TERM] === ratingTerm
      );
      if (idx < 0) {
        acc.push({
          [BUSINESS_AREA]: businesAarea,
          [RATING_TERM]: ratingTerm,
          [creditRating]: Math.round(basisPoints * 100) / 100
        });
      } else {
        acc[idx] = {
          ...acc[idx],
          id: idx,
          [creditRating]: Math.round(basisPoints * 100) / 100
        };
      }
      return acc;
    }, []);
  }
  return transformKeysToCapitalized(data[SURCHARGE.DETAIL]);
};
var createUpdatedDetailPayloadForOpex = ({ rawDetail, updatedData }) => {
  return rawDetail.map((item) => {
    const currRatingTerm = item[SURCHARGE_POINTS_KEYS.REVENUE_OVER_50M] === "TRUE" ? OVER_50M : UNDER_50M;
    const match = updatedData.find((updatedItem) => updatedItem[BUSINESS_AREA] === item[SURCHARGE_POINTS_KEYS.BUSINESS_AREA] && updatedItem[RATING_TERM] === currRatingTerm);
    const creditRating = item.creditRating === NONE ? NO_RATING_TRANSLATION : item.creditRating;
    const basePoints = match[creditRating];
    return {
      ...item,
      basePoints
    };
  });
};

// SalesOnline/utils/_common/_common.util.js
var validateRow = (originalRow, relevantKeys2) => {
  var _a, _b, _c, _d;
  const row = JSON.parse(JSON.stringify(originalRow));
  for (let key of relevantKeys2) {
    const errMsg = `${key} is required`;
    if (isNaN(row[key]) || row[key] === null) {
      if (!((_a = row[errMsgArrayVar]) == null ? void 0 : _a.includes(errMsg))) {
        if (!((_b = row[errMsgArrayVar]) == null ? void 0 : _b.length)) {
          row[errMsgArrayVar] = [errMsg];
        } else {
          row[errMsgArrayVar].push(errMsg);
        }
      }
      row["error"] = true;
    } else {
      if ((_c = row[errMsgArrayVar]) == null ? void 0 : _c.length) {
        const idx = row[errMsgArrayVar].indexOf(errMsg);
        if (idx >= 0) {
          row[errMsgArrayVar].splice(idx, 1);
        }
        row["error"] = !!((_d = row[errMsgArrayVar]) == null ? void 0 : _d.length);
      }
      row[key] = +row[key];
    }
  }
  return row;
};
var capitalizeWords = (str) => {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (match) => match.toUpperCase());
};
var transformKeysToCapitalized = (objArray) => {
  return objArray == null ? void 0 : objArray.map((obj, idx) => {
    const transformedObj = {
      id: (obj == null ? void 0 : obj.id) ? obj.id : idx
    };
    Object.entries(obj).forEach(([key, value]) => {
      transformedObj[capitalizeWords(key)] = value;
    });
    return transformedObj;
  });
};
var toCamelCase = (str) => str.toLowerCase().replace(
  /^\w|[A-Z]|\b\w/g,
  (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()
).replace(/\s+/g, "");
var disabledColumns = [capitalizeWords(PROFORMA_POINTS_KEYS.TERM), capitalizeWords(SURCHARGE_POINTS_KEYS.BUSINESS_AREA), capitalizeWords(SURCHARGE_POINTS_KEYS.REVENUE_OVER_50M)];
var createColumns = (data) => {
  const objectReference = Object.keys(data[0]);
  return objectReference.map((key, idx) => {
    const type = typeof data[0][key];
    const disabled = type === "string" || disabledColumns.includes(key);
    if (key.toLowerCase() !== "id") {
      return {
        field: key,
        minWidth: 100,
        headerName: key,
        headerAlign: "center",
        align: "center",
        type,
        disabled,
        flex: objectReference.length === idx + 1 ? 1 : 0,
        editable: !disabled,
        renderCell: disabled && renderDisabledCell,
        renderHeader: !disabled && renderEditableColumn
      };
    }
  }).filter(Boolean);
};
var createSchema = (columns2) => {
  return columns2.map((column) => ({
    column: column.headerName,
    type: column.type === "string" ? String : Number,
    value: (prop) => prop[column.field]
  }));
};
var createDetailPayload = (original, updated, relevantKeys2) => {
  return original.map((item) => {
    const match = updated.find((updatedItem) => updatedItem["Id"] === item.id);
    const obj = relevantKeys2.reduce((acc, curr) => {
      acc[toCamelCase(curr)] = match[curr];
      return acc;
    }, {});
    return {
      ...item,
      ...obj
    };
  });
};
var createSurchargesPayload = ({ raw, updatedData, relevantKeys: relevantKeys2, newValidFrom, isOpex = false }) => {
  const clone = JSON.parse(JSON.stringify(raw));
  clone[SURCHARGE.DETAIL] = isOpex ? createUpdatedDetailPayloadForOpex({ rawDetail: raw[SURCHARGE.DETAIL], updatedData }) : createDetailPayload(raw[SURCHARGE.DETAIL], updatedData, relevantKeys2);
  clone[SURCHARGE.VALID_FROM] = formatDateForDb(newValidFrom);
  return clone;
};

// SalesOnline/stores/zustand/stores/cof.store.js
var {
  CURRENCY,
  VALID_FROM,
  USERNAME,
  COUNTRY,
  UPDATED_DATE
} = COF_CONFIGURATION;
var {
  BASIS_POINTS,
  BASIS_SWAP
} = TABLE_KEYS;
var TODAY = new Date();
var initialState3 = {
  cofGeneralDetails: null,
  originalTableData: [],
  updatedTableData: [],
  originalCofConfiguration: null,
  updatedCofConfiguration: null,
  validFrom: TODAY,
  newValidFrom: TODAY
};
var relevantKeys = [BASIS_POINTS, BASIS_SWAP];
var cofStore = (set, get) => ({
  ...initialState3,
  updateCofBaseRate: (value) => {
    set(
      produce3(
        (state) => {
          state.updatedCofConfiguration[COF_CONFIGURATION.BASE_RATE][COF_BASE_RATE.BASE_RATE] = value ? +value : value;
        }
      )
    );
  },
  updateCofConfiguration: (key, value) => {
    set(
      produce3(
        (state) => {
          state.updatedCofConfiguration[key] = value ? +value : value;
        }
      )
    );
  },
  setCofData: ({ tableData, configuration }) => {
    set(
      produce3(
        (state) => {
          state.originalTableData = tableData;
          state.updatedTableData = tableData;
          state.originalCofConfiguration = configuration;
          state.updatedCofConfiguration = configuration;
          state.validFrom = formatDateForPicker(configuration[COF_CONFIGURATION.VALID_FROM]);
          state.cofGeneralDetails = {
            [CURRENCY]: configuration == null ? void 0 : configuration[CURRENCY],
            [COUNTRY]: configuration == null ? void 0 : configuration[COUNTRY],
            [USERNAME]: configuration == null ? void 0 : configuration[USERNAME],
            [VALID_FROM]: configuration == null ? void 0 : configuration[VALID_FROM],
            [UPDATED_DATE]: configuration == null ? void 0 : configuration[UPDATED_DATE]
          };
        }
      )
    );
  },
  updateRow: (newRow) => {
    const reviewedRow = validateRow(newRow, relevantKeys);
    set(
      produce3(
        (state) => {
          const index = state.updatedTableData.findIndex((r) => r.id === reviewedRow.id);
          state.updatedTableData[index] = reviewedRow;
        }
      )
    );
  },
  reset: () => {
    set(
      produce3(
        (state) => {
          state.updatedTableData = state.originalTableData;
          state.updatedCofConfiguration = state.originalCofConfiguration;
          state.validFrom = formatDateForPicker(state.originalCofConfiguration[COF_CONFIGURATION.VALID_FROM]);
          state.newValidFrom = TODAY;
        }
      )
    );
  },
  goBackToDate: (value) => {
    set(
      produce3(
        (state) => {
          state.validFrom = value;
        }
      )
    );
  },
  setNewValidFrom: (value) => {
    set(
      produce3(
        (state) => {
          state.newValidFrom = value;
        }
      )
    );
  },
  cleanUp: () => {
    set(
      produce3(() => initialState3)
    );
  }
});

// SalesOnline/stores/zustand/stores/surcharges.store.js
import { produce as produce4 } from "immer";
var TODAY2 = new Date();
var initialState4 = {
  surchargeInView: null,
  surchargesDict: {}
};
var surchargesStore = (set, get) => ({
  ...initialState4,
  setSurchargeInView: (surchargeName) => {
    set(
      produce4(
        (state) => {
          state.surchargeInView = surchargeName;
        }
      )
    );
  },
  setSurcharge: (surchargeName, data) => {
    const arrangedForTable = arrangeData({ data, isOpex: data[SURCHARGE.SURCHARGE_NAME].toLowerCase() === "opex" });
    set(
      produce4(
        (state) => {
          var _a, _b, _c, _d, _e;
          const surchargeInViewHasMinimalData = ((_a = Object.keys(arrangedForTable == null ? void 0 : arrangedForTable[0])) == null ? void 0 : _a.length) <= 4;
          const columns2 = createColumns(arrangedForTable, surchargeInViewHasMinimalData);
          const editableKeys = (_b = columns2.filter((item) => item.editable)) == null ? void 0 : _b.map((item) => item.headerName);
          state.surchargesDict[surchargeName] = {
            raw: data,
            columns: columns2,
            editableKeys,
            minimalData: surchargeInViewHasMinimalData,
            originalData: arrangedForTable,
            updatedData: (_e = (_d = (_c = state.surchargesDict) == null ? void 0 : _c[surchargeName]) == null ? void 0 : _d.updatedData) != null ? _e : arrangedForTable,
            originalValidFrom: formatDateForPicker(data[SURCHARGE.CREATE_DATE]),
            validFrom: formatDateForPicker(data[SURCHARGE.CREATE_DATE]),
            newValidFrom: TODAY2
          };
        }
      )
    );
  },
  updateRow: (surchargeName, newRow) => {
    const editableKeys = get().surchargesDict[surchargeName].editableKeys;
    const reviewedRow = validateRow(newRow, editableKeys);
    set(
      produce4(
        (state) => {
          const index = state.surchargesDict[surchargeName]["updatedData"].findIndex((r) => r.id === reviewedRow.id);
          state.surchargesDict[surchargeName]["updatedData"][index] = reviewedRow;
        }
      )
    );
  },
  goBackToDate: (value, surchargeName) => {
    set(
      produce4(
        (state) => {
          state.surchargesDict[surchargeName]["validFrom"] = value;
        }
      )
    );
  },
  reset: (surchargeName) => {
    set(
      produce4(
        (state) => {
          state.surchargesDict[surchargeName] = {
            ...state.surchargesDict[surchargeName],
            ["validFrom"]: state.surchargesDict[surchargeName]["originalValidFrom"],
            ["newValidFrom"]: TODAY2,
            updatedData: state.surchargesDict[surchargeName]["originalData"]
          };
        }
      )
    );
  },
  setNewValidFrom: (value, surchargeName) => {
    set(
      produce4(
        (state) => {
          state.surchargesDict[surchargeName]["newValidFrom"] = value;
        }
      )
    );
  },
  cleanUp: () => {
    set(
      produce4(() => initialState4)
    );
  }
});

// SalesOnline/stores/zustand/stores/proforma.store.js
import { produce as produce5 } from "immer";
var TODAY3 = new Date();
var initialState5 = {
  proformaInView: null,
  originalProformaDetails: null,
  updatedProformaDetails: null,
  proformaDict: {}
};
var proformaStore = (set, get) => ({
  ...initialState5,
  setProformaDetails: (data) => {
    set(
      produce5(
        (state) => {
          state.originalProformaDetails = data;
          state.updatedProformaDetails = data;
        }
      )
    );
  },
  updateProformaDetails: (key, value) => {
    set(
      produce5(
        (state) => {
          state.updatedProformaDetails[key] = value ? +value : value;
        }
      )
    );
  },
  setProformaInView: (surchargeName) => {
    set(
      produce5(
        (state) => {
          state.proformaInView = surchargeName;
        }
      )
    );
  },
  setProformaObject: (surchargeName, data) => {
    var _a;
    const arrangedForTable = transformKeysToCapitalized(data[PROFORMA.DETAIL]);
    const columns2 = createColumns(arrangedForTable);
    const editableKeys = (_a = columns2.filter((item) => item.editable)) == null ? void 0 : _a.map((item) => item.field);
    set(
      produce5(
        (state) => {
          var _a2, _b, _c;
          state.proformaDict[surchargeName] = {
            raw: data,
            columns: columns2,
            editableKeys,
            minimalData: arrangedForTable.length === 1,
            originalData: arrangedForTable,
            updatedData: (_c = (_b = (_a2 = state.proformaDict) == null ? void 0 : _a2[surchargeName]) == null ? void 0 : _b.updatedData) != null ? _c : arrangedForTable,
            originalValidFrom: formatDateForPicker(data[PROFORMA.CREATE_DATE]),
            validFrom: formatDateForPicker(data[PROFORMA.CREATE_DATE]),
            newValidFrom: TODAY3
          };
        }
      )
    );
  },
  updateRow: (surchargeName, newRow) => {
    const { editableKeys, minimalData } = get().proformaDict[surchargeName];
    const relevantKeys2 = minimalData ? [PROFORMA_POINTS_KEYS.BASE_POINTS] : editableKeys;
    const reviewedRow = validateRow(newRow, relevantKeys2);
    set(
      produce5(
        (state) => {
          const index = state.proformaDict[surchargeName]["updatedData"].findIndex((r) => r.id === reviewedRow.id);
          state.proformaDict[surchargeName]["updatedData"][index] = reviewedRow;
        }
      )
    );
  },
  goBackToDate: (value, surchargeName) => {
    set(
      produce5(
        (state) => {
          state.proformaDict[surchargeName]["validFrom"] = value;
        }
      )
    );
  },
  reset: (surchargeName) => {
    set(
      produce5(
        (state) => {
          state.updatedProformaDetails = state.originalProformaDetails;
          state.proformaDict[surchargeName] = {
            ...state.proformaDict[surchargeName],
            ["validFrom"]: state.proformaDict[surchargeName]["originalValidFrom"],
            ["newValidFrom"]: TODAY3,
            updatedData: state.proformaDict[surchargeName]["originalData"]
          };
        }
      )
    );
  },
  setNewValidFrom: (value, surchargeName) => {
    set(
      produce5(
        (state) => {
          state.proformaDict[surchargeName]["newValidFrom"] = value;
        }
      )
    );
  },
  cleanUp: () => {
    set(
      produce5(() => initialState5)
    );
  }
});

// SalesOnline/stores/zustand/stores/rateConfiguration.store.js
import { produce as produce6 } from "immer";

// SalesOnline/types/rateConfigurations.types.js
var RATE_CONFIGURATION = {
  ID: "id",
  CONFIGURATION_NAME: "configurationName",
  CALCULATION_TYPE: "calculationType",
  UPDATED_DATE: "updatedDate",
  USERNAME: "username",
  USER_ID: "userId"
};

// SalesOnline/stores/zustand/stores/rateConfiguration.store.js
var initialState6 = {
  rateConfiguration: null
};
var rateConfigurationStore = (set, get) => ({
  ...initialState6,
  setRateConfiguration: (data) => {
    var _a;
    const clone = JSON.parse(JSON.stringify(data));
    clone[RATE_CONFIGURATION.CALCULATION_TYPE] = (_a = data[RATE_CONFIGURATION.CALCULATION_TYPE]) == null ? void 0 : _a.toUpperCase();
    set(
      produce6(
        (state) => {
          state.rateConfiguration = clone;
        }
      )
    );
  },
  cleanUp: () => {
    set(
      produce6(() => initialState6)
    );
  }
});

// SalesOnline/stores/zustand/stores/global.store.js
var useAppStore = create2(devtools((set, get) => ({
  ...appStore(set, get)
}), { name: "vfs-interest-rate-config: app" }));
var useCofStore = create2(devtools((set, get) => ({
  ...cofStore(set, get)
}), { name: "vfs-interest-rate-config: Cof" }));
var useSurchargesStore = create2(devtools((set, get) => ({
  ...surchargesStore(set, get)
}), { name: "vfs-interest-rate-config: Surcharges" }));
var useProformaStore = create2(devtools((set, get) => ({
  ...proformaStore(set, get)
}), { name: "vfs-interest-rate-config: Proforma" }));
var useRateConfigurationStore = create2(devtools((set, get) => ({
  ...rateConfigurationStore(set, get)
}), { name: "vfs-interest-rate-config: Rate Configuration" }));

// SalesOnline/consts/rateConfiguration/rateConfiguration.consts.js
var RATE_CONFIGURATION_TYPE = {
  PROFORMA: "PROFORMA",
  COF: "COF"
};

// SalesOnline/components/RateConfiguration/RateConfiguration.jsx
import React10 from "react";
import { LoadingMessage } from "vfs-data-portal-components";

// SalesOnline/components/RateConfiguration/style.jsx
import { styled as styled5 } from "@mui/material";
var StyledRateConfiguration = styled5("div")`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    padding-left: 3rem;
    gap: 4rem;
`;
var StyledRateConfigurationWrapper = styled5("div")`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-auto-columns: auto;
    gap: 3rem;
`;

// SalesOnline/stores/reactQuery/hooks/rateConfiguration.hook.js
import { useQuery } from "@tanstack/react-query";

// SalesOnline/stores/reactQuery/queryKeys.js
var QUERY_KEYS = {
  RATE_CONFIGURATION: "RATE_CONFIGURATION",
  COF_BASE_RATE: "COF_BASE_RATE",
  COF_BASIS_POINTS: "COF_BASIS_POINTS",
  COF_BASIS_SWAP: "COF_BASIS_SWAP",
  COF_DATA: "COF_DATA",
  SURCHARGES_LIST: "SURCHARGES_LIST",
  SURCHARGE: "SURCHARGE",
  PROFORMA_CONFIG: "PROFORMA_CONFIG",
  PROFORMA_LIST: "PROFORMA_LIST",
  PROFORMA_SURCHARGE: "PROFORMA_SURCHARGE"
};

// SalesOnline/config/axios.js
import axios2 from "axios";

// SalesOnline/consts/api/api.consts.js
var URL_PATHS = {
  dev: "https://app-interestratecalculator-dev.azurewebsites.net/",
  qa: "https://app-interestratecalculator-qa.azurewebsites.net/",
  prod: "http://localhost:7071/api/"
};
var CONFIGURATION_NAME = "SalesOnline";

// SalesOnline/config/axios.js
var client;
var setClient = (env4) => {
  client = axios2.create({
    baseURL: URL_PATHS[env4]
  });
  client.interceptors.request.use(async (config) => {
    const token = localstorage_util_default.getSalesOnlineToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  client.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log("error");
      const originalRequest = error.config;
      if (error.response && error.response.status === 401) {
        const { token } = await authSalesOnline();
        axios2.defaults.headers.common["Authorization"] = "Bearer " + token;
        originalRequest.headers["Authorization"] = "Bearer " + token;
        return axios2(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};

// SalesOnline/api/rateConfiguration.api.js
var getCofConfiguration = async () => {
  const { data } = await client.get(`rate-configurations/configurations/${CONFIGURATION_NAME}`);
  return data;
};

// SalesOnline/stores/reactQuery/hooks/rateConfiguration.hook.js
var useCofConfiguration = (userHasAccessRole) => {
  const setRateConfiguration = useRateConfigurationStore(selector5.setRateConfiguration);
  const rateConfiguration = useRateConfigurationStore(selector5.rateConfiguration);
  const { data, isLoading, isFetched } = useQuery({
    queryKey: [QUERY_KEYS.RATE_CONFIGURATION],
    queryFn: async () => {
      const data2 = await getCofConfiguration();
      setRateConfiguration(data2);
      return data2;
    },
    enabled: !(rateConfiguration == null ? void 0 : rateConfiguration[RATE_CONFIGURATION.CALCULATION_TYPE]) && !!userHasAccessRole
  });
  return {
    data,
    isLoading,
    isFetched
  };
};

// SalesOnline/components/error/InsufficientRights.jsx
import React9 from "react";
import { Box as Box2, Typography as Typography3 } from "@mui/material";
import { StyledFlex as StyledFlex2 } from "vfs-data-portal-components";
var InsufficientRights = ({ message = "Please request Read/Write roles to use this application." }) => {
  return /* @__PURE__ */ React9.createElement(StyledUnauthorized, null, /* @__PURE__ */ React9.createElement("i", {
    className: "material-icons-outlined"
  }, "lock"), /* @__PURE__ */ React9.createElement(StyledFlex2, {
    gap: "2rem",
    direction: "column",
    align: "flex-start"
  }, /* @__PURE__ */ React9.createElement(Box2, null, /* @__PURE__ */ React9.createElement(Typography3, {
    variant: "h6",
    fontWeight: 600
  }, "Insufficient permissions"), /* @__PURE__ */ React9.createElement(RegularText, null, message))));
};

// SalesOnline/components/RateConfiguration/RateConfiguration.jsx
var authorizationTypes2 = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];
var RateConfiguration = () => {
  const accessRoles = useAppStore(selector.accessRoles);
  const { isLoading, data, isFetched } = useCofConfiguration(accessRoles.includes(authorizationTypes2.READ));
  if (!accessRoles.includes(authorizationTypes2.READ)) {
    return /* @__PURE__ */ React10.createElement(InsufficientRights, {
      message: "Please request Read/Write roles to use this application."
    });
  }
  if (isLoading || !isFetched) {
    return /* @__PURE__ */ React10.createElement(LoadingMessage, {
      text: "Fetching configuration",
      width: "fit-content"
    });
  }
  return /* @__PURE__ */ React10.createElement(StyledRateConfiguration, null, /* @__PURE__ */ React10.createElement(StyledRateConfigurationWrapper, null, /* @__PURE__ */ React10.createElement(StyledGroup, null, /* @__PURE__ */ React10.createElement(StyledLabel, null, "name"), /* @__PURE__ */ React10.createElement(StyledValue, null, "Sales Online")), /* @__PURE__ */ React10.createElement(StyledGroup, null, /* @__PURE__ */ React10.createElement(StyledLabel, null, "type"), /* @__PURE__ */ React10.createElement(StyledValue, null, data[RATE_CONFIGURATION.CALCULATION_TYPE]))));
};

// SalesOnline/components/Cof/Cof.jsx
import React18 from "react";

// SalesOnline/stores/reactQuery/hooks/cof.hook.js
import { useMutation, useQuery as useQuery2 } from "@tanstack/react-query";

// SalesOnline/api/cof.api.js
var updateCof = async (payload) => {
  const { data } = await client.put(`cost-of-funds/configurations/${CONFIGURATION_NAME}`, payload);
  return data;
};
var getCofCurrent = async () => {
  const { data } = await client.get(`cost-of-funds/configurations/${CONFIGURATION_NAME}/current`);
  return data;
};

// SalesOnline/utils/cof/cof.util.js
var { BASIS_SWAP: BASIS_SWAP2, BASIS_POINTS: BASIS_POINTS2, TERM, VALID_FROM: VALID_FROM2 } = COF_CONFIGURATION;
var updateCofDetail = ({ cofDetail, updatedTableData, tableKey, cofKey }) => {
  return updatedTableData.map((updatedRow) => {
    const originalValue = cofDetail.find((item) => item[TERM] === updatedRow[TERM]);
    const newValue = (updatedRow == null ? void 0 : updatedRow[tableKey]) ? updatedRow[tableKey] : originalValue[cofKey];
    if (originalValue) {
      return {
        ...originalValue,
        [cofKey]: newValue
      };
    }
    return {
      ["id"]: 0,
      [TERM]: updatedRow[TERM],
      [cofKey]: newValue
    };
  });
};
var calculateLending = ({ basisPoints, basisSwap, baseRate }) => {
  return !!basisPoints && !!basisSwap ? Math.round(baseRate * 100) + basisPoints + basisSwap : 0;
};
var prepareUpdatePayload = ({ cofConfiguration, updatedTableData, newValidFrom }) => {
  const updatedBasisPoints = updateCofDetail({
    cofDetail: cofConfiguration[BASIS_POINTS2][COF_BASIS_POINTS.DETAIL],
    updatedTableData,
    tableKey: TABLE_KEYS.BASIS_POINTS,
    cofKey: TABLE_KEYS.BASIS_POINTS
  });
  const updatedBasisSwaps = updateCofDetail({
    cofDetail: cofConfiguration[BASIS_SWAP2][COF_BASIS_SWAP.DETAIL],
    updatedTableData,
    tableKey: TABLE_KEYS.BASIS_SWAP,
    cofKey: COF_BASIS_SWAPS_DETAIL.BASIS_SWAP
  });
  const updatedConfigObjectClone = JSON.parse(JSON.stringify(cofConfiguration));
  updatedConfigObjectClone[BASIS_POINTS2][COF_BASIS_POINTS.DETAIL] = updatedBasisPoints;
  updatedConfigObjectClone[BASIS_SWAP2][COF_BASIS_SWAP.DETAIL] = updatedBasisSwaps;
  updatedConfigObjectClone[VALID_FROM2] = formatDateForDb(newValidFrom);
  return updatedConfigObjectClone;
};
var combineCofData = (data) => {
  var _a, _b;
  const cofBasisPoints = ((_a = data[BASIS_POINTS2]) == null ? void 0 : _a[COF_BASIS_POINTS.DETAIL]) || [];
  const cofBasisSwap = ((_b = data[BASIS_SWAP2]) == null ? void 0 : _b[COF_BASIS_SWAP.DETAIL]) || [];
  const pointsMap = /* @__PURE__ */ new Map();
  const swapMap = /* @__PURE__ */ new Map();
  const result = [];
  for (const row of cofBasisPoints) {
    pointsMap.set(row[COF_BASIS_POINTS_DETAIL.TERM], row);
  }
  for (const row of cofBasisSwap) {
    swapMap.set(row[COF_BASIS_SWAPS_DETAIL.TERM], row);
  }
  const allTerms = /* @__PURE__ */ new Set([...pointsMap.keys(), ...swapMap.keys()]);
  for (const [idx, term] of allTerms.entries()) {
    const basisPoint = pointsMap.get(term);
    const basisSwap = swapMap.get(term);
    result.push({
      id: idx,
      [TERM]: term,
      [BASIS_POINTS2]: basisPoint == null ? void 0 : basisPoint[COF_BASIS_POINTS_DETAIL.BASIS_POINTS],
      [BASIS_SWAP2]: basisSwap == null ? void 0 : basisSwap[COF_BASIS_SWAPS_DETAIL.BASIS_SWAP]
    });
  }
  return result;
};

// SalesOnline/stores/reactQuery/hooks/cof.hook.js
var authorizationTypes3 = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];
var useLoadCof = () => {
  const setCofData = useCofStore(selector2.setCofData);
  const originalTableData = useCofStore(selector2.originalTableData);
  const { data, isLoading, isFetched, refetch } = useQuery2({
    queryKey: [QUERY_KEYS.COF_DATA],
    queryFn: async () => {
      const data2 = await getCofCurrent();
      const tableData = combineCofData(data2);
      setCofData({
        tableData,
        configuration: data2
      });
      return data2;
    },
    enabled: !(originalTableData == null ? void 0 : originalTableData.length)
  });
  return {
    data,
    isLoading,
    isFetched,
    refetch
  };
};
var useMutateCof = (refetchCallback) => {
  const setAuthorization = useAppStore(selector.setAuthorization);
  const setCofData = useCofStore(selector2.setCofData);
  const mutation = useMutation({
    mutationFn: (payload) => updateCof(payload),
    onSuccess: (data) => {
      if (data) {
        const tableData = combineCofData(data);
        setCofData({
          tableData,
          configuration: data
        });
      }
      alertMessageFunction("COF saved successfully.", "success");
      refetchCallback == null ? void 0 : refetchCallback();
    },
    onError: (error) => {
      var _a, _b, _c;
      if (error.status === 403) {
        setAuthorization({
          type: authorizationTypes3.WRITE,
          value: false
        });
      }
      const message = (_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) != null ? _c : "Configuration save error";
      alertMessageFunction(message, "error");
    }
  });
  return mutation;
};

// SalesOnline/components/Cof/CofTable.jsx
import React12, { memo as memo3, useCallback as useCallback2, useMemo as useMemo3 } from "react";

// mainApp/components/_common/tables/CommonDataGrid.jsx
import React11, { memo as memo2, useCallback, useMemo } from "react";
import { Button } from "@mui/material";
import { getGridNumericOperators, getGridStringOperators } from "@mui/x-data-grid";
import { StyledFlex as StyledFlex3 } from "vfs-data-portal-components";
var CommonDataGrid = memo2((props) => {
  const { rows, columns: columns2, handleUpdate, rowsWithErrors, loading, reset, handleExport, isMinimal } = props;
  const columnsWithCustomFilters = useMemo(() => {
    return columns2 == null ? void 0 : columns2.map((column) => {
      if (column.type === "number") {
        return {
          ...column,
          filterOperators: getGridNumericOperators().filter(
            (operator) => operator.value === ">" || operator.value === "<"
          )
        };
      } else {
        return {
          ...column,
          filterOperators: getGridStringOperators().filter((operator) => operator.value === "contains")
        };
      }
    });
  }, [columns2]);
  const isItReallyError = useCallback((row) => {
    var _a;
    return (_a = rowsWithErrors == null ? void 0 : rowsWithErrors.find((r) => r.id === row.id)) == null ? void 0 : _a.error;
  }, [rowsWithErrors]);
  const getRowClassName = (params) => {
    if (params.row.error) {
      const isError = isItReallyError(params.row);
      return isError ? "error-row" : "";
    }
  };
  const CustomFooter = () => {
    return /* @__PURE__ */ React11.createElement(StyledFlex3, {
      gap: "1.5rem",
      width: "100%",
      justify: isMinimal ? "center" : "flex-end",
      sx: {
        padding: "10px",
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #ddd"
      }
    }, /* @__PURE__ */ React11.createElement(Button, {
      sx: { textTransform: "capitalize" },
      onClick: reset
    }, "reset"), /* @__PURE__ */ React11.createElement(Button, {
      disabled: !!(rowsWithErrors == null ? void 0 : rowsWithErrors.length),
      sx: { textTransform: "capitalize" },
      onClick: handleExport
    }, "export"));
  };
  return /* @__PURE__ */ React11.createElement(StyledTableWrapper, null, /* @__PURE__ */ React11.createElement(StyledDataTable, {
    autoHeight: true,
    disableRowSelectionOnClick: true,
    rows,
    loading,
    columns: columnsWithCustomFilters,
    editMode: "row",
    processRowUpdate: handleUpdate,
    onProcessRowUpdateError: (error) => console.error(error),
    slotProps: {
      loadingOverlay: {
        variant: "linear-progress",
        noRowsVariant: "skeleton"
      }
    },
    slots: { footer: CustomFooter },
    getRowClassName,
    hideFooterPagination: true
  }));
});

// SalesOnline/utils/_common/excel.util.jsx
import writeXlsxFile from "write-excel-file";
var generateExcel = async ({ schema, fileName = "template", data = [] }) => {
  return await writeXlsxFile(data, {
    schema,
    fileName: `${fileName}.xlsx`,
    headerStyle: {
      fontWeight: "light",
      height: 20,
      alignVertical: "center",
      span: 100,
      backgroundColor: "#E1DFDD",
      color: "#202A44"
    }
  });
};

// SalesOnline/hooks/_common/useRowErrors.hook.jsx
import { useMemo as useMemo2 } from "react";
var useRowsWithErrors = (data) => {
  const rowsWithErrors = useMemo2(() => {
    return data == null ? void 0 : data.filter((row) => row.error);
  }, [data]);
  return { rowsWithErrors };
};

// SalesOnline/components/Cof/CofTable.jsx
var CofTable = memo3(({ isLoading }) => {
  var _a, _b;
  const updatedTableData = useCofStore(selector2.updatedTableData);
  const updateRow = useCofStore(selector2.updateRow);
  const cofGeneralDetails = useCofStore(selector2.cofGeneralDetails);
  const updatedCofBaseRate = (_b = (_a = useCofStore(selector2.updatedCofConfiguration)) == null ? void 0 : _a[COF_CONFIGURATION.BASE_RATE]) == null ? void 0 : _b[COF_BASE_RATE.BASE_RATE];
  const reset = useCofStore(selector2.reset);
  const { rowsWithErrors } = useRowsWithErrors(updatedTableData);
  const columns2 = useMemo3(() => {
    return [
      {
        field: TABLE_KEYS.TERM,
        headerName: "Term",
        headerAlign: "center",
        align: "center",
        type: "number",
        disabled: true,
        renderCell: renderDisabledCell,
        width: 80
      },
      {
        field: TABLE_KEYS.BASIS_POINTS,
        headerName: "Basis Points",
        headerAlign: "center",
        align: "center",
        width: 150,
        editable: true,
        type: "number",
        renderHeader: renderEditableColumn,
        valueFormatter: (value) => value == null ? void 0 : value.toFixed(2)
      },
      {
        field: TABLE_KEYS.BASIS_SWAP,
        headerName: "Basis Swap",
        width: 150,
        headerAlign: "center",
        align: "center",
        editable: true,
        type: "number",
        renderHeader: renderEditableColumn,
        valueFormatter: (value) => value == null ? void 0 : value.toFixed(2)
      },
      {
        field: TABLE_KEYS.LENDING,
        headerAlign: "center",
        align: "center",
        headerName: "Lending",
        type: "number",
        renderCell: renderDisabledCell,
        flex: 1,
        valueGetter: (value, row) => {
          return calculateLending({
            baseRate: updatedCofBaseRate,
            basisPoints: row[TABLE_KEYS.BASIS_POINTS],
            basisSwap: row[TABLE_KEYS.BASIS_SWAP]
          });
        }
      }
    ];
  }, [updatedCofBaseRate]);
  const handleUpdate = useCallback2((newRow) => {
    updateRow(newRow);
    return newRow;
  }, [updateRow]);
  const handleExport = () => {
    const schema = createSchema(columns2);
    return generateExcel({
      schema,
      fileName: `Sales_Online_COF_${cofGeneralDetails[COF_CONFIGURATION.VALID_FROM]}`,
      data: updatedTableData
    });
  };
  return /* @__PURE__ */ React12.createElement(CommonDataGrid, {
    width: "100%",
    loading: isLoading,
    columns: columns2,
    rows: updatedTableData,
    handleUpdate,
    rowsWithErrors,
    reset,
    handleExport
  });
});

// SalesOnline/components/Cof/CofDashboard.jsx
import React17, { useCallback as useCallback5 } from "react";

// SalesOnline/components/Cof/CofDashboardSubmit.jsx
import React15, { useMemo as useMemo4 } from "react";
import { PrimaryButton, StyledFlex as StyledFlex4 } from "vfs-data-portal-components";

// mainApp/components/_common/inputs/DatePicker.jsx
import React13 from "react";
import { enGB } from "date-fns/locale/en-GB";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
var BasicDatePicker = (props) => {
  const {
    label,
    onChange,
    value,
    minDate,
    maxDate,
    width = "100%",
    disabled,
    onlyDate = false,
    disablePast = false
  } = props;
  return /* @__PURE__ */ React13.createElement(LocalizationProvider, {
    dateAdapter: AdapterDateFns,
    adapterLocale: enGB
  }, /* @__PURE__ */ React13.createElement(DemoContainer, {
    components: ["DatePicker"],
    sx: { width, overflow: "visible" }
  }, /* @__PURE__ */ React13.createElement(StyledDatePicker, {
    fullWidth: true,
    variant: "standard",
    disableOpenPicker: onlyDate,
    disabled,
    label,
    value,
    minDate,
    maxDate,
    disablePast,
    onChange
  })));
};

// SalesOnline/hooks/cof/useCofSubmit.hook.js
import { useCallback as useCallback3 } from "react";
var useCofSubmitHook = () => {
  const updatedCofConfiguration = useCofStore(selector2.updatedCofConfiguration);
  const updatedTableData = useCofStore(selector2.updatedTableData);
  const newValidFrom = useCofStore(selector2.newValidFrom);
  const { refetch } = useLoadCof();
  const { mutate, isPending } = useMutateCof(refetch);
  const handleSubmit = useCallback3(async () => {
    const payload = prepareUpdatePayload({ cofConfiguration: updatedCofConfiguration, updatedTableData, newValidFrom });
    await mutate(payload);
  }, [updatedCofConfiguration, updatedTableData, newValidFrom]);
  return {
    handleSubmit,
    isPending
  };
};

// SalesOnline/components/error/SubmitHOC.jsx
import React14 from "react";
var authorizationTypes4 = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];
var withWriteCheck = (Component) => (props) => {
  const accessRoles = useAppStore(selector.accessRoles);
  if (!accessRoles.includes(authorizationTypes4.WRITE)) {
    return /* @__PURE__ */ React14.createElement(InsufficientRights, {
      message: "Please request Write roles to change configurations."
    });
  }
  return /* @__PURE__ */ React14.createElement(Component, {
    ...props
  });
};

// SalesOnline/components/Cof/CofDashboardSubmit.jsx
var CofSubmit = () => {
  var _a, _b, _c, _d, _e, _f;
  const rowsHaveChanged = useCofStore(selector2.rowsHaveChanged);
  const newValidFrom = useCofStore(selector2.newValidFrom);
  const setNewValidFrom = useCofStore(selector2.setNewValidFrom);
  const updatedCofBaseRate = (_b = (_a = useCofStore(selector2.updatedCofConfiguration)) == null ? void 0 : _a[COF_CONFIGURATION.BASE_RATE]) == null ? void 0 : _b[COF_BASE_RATE.BASE_RATE];
  const originalCofBaseRate = (_d = (_c = useCofStore(selector2.originalCofConfiguration)) == null ? void 0 : _c[COF_CONFIGURATION.BASE_RATE]) == null ? void 0 : _d[COF_BASE_RATE.BASE_RATE];
  const updatedPricingDecimals = (_e = useCofStore(selector2.updatedCofConfiguration)) == null ? void 0 : _e[COF_CONFIGURATION.PRICING_DECIMALS];
  const originalPricingDecimals = (_f = useCofStore(selector2.originalCofConfiguration)) == null ? void 0 : _f[COF_CONFIGURATION.PRICING_DECIMALS];
  const { rowsWithErrors } = useRowsWithErrors();
  const { handleSubmit, isPending } = useCofSubmitHook();
  const canSubmit = useMemo4(() => {
    const cofBaseRateChanged = originalCofBaseRate !== updatedCofBaseRate;
    const pricingDecimalsChanged = originalPricingDecimals !== updatedPricingDecimals;
    return (!!rowsHaveChanged || cofBaseRateChanged || pricingDecimalsChanged) && !(rowsWithErrors == null ? void 0 : rowsWithErrors.length);
  }, [rowsHaveChanged, rowsWithErrors == null ? void 0 : rowsWithErrors.length, updatedCofBaseRate, originalCofBaseRate, originalPricingDecimals, updatedPricingDecimals]);
  return /* @__PURE__ */ React15.createElement(StyledFlex4, {
    gap: "2rem",
    align: "flex-start",
    direction: "column-reverse"
  }, /* @__PURE__ */ React15.createElement(PrimaryButton, {
    disabled: !canSubmit || isPending,
    isLoading: isPending,
    onClick: handleSubmit
  }, "update"), !!canSubmit && /* @__PURE__ */ React15.createElement(BasicDatePicker, {
    label: "New valid from",
    value: newValidFrom,
    onChange: setNewValidFrom,
    disablePast: true
  }));
};
var CofDashboardSubmit = withWriteCheck(CofSubmit);

// mainApp/components/_common/inputs/UpdatableValue.jsx
import React16, { memo as memo4, useCallback as useCallback4, useState } from "react";
import { ClickAwayListener } from "@mui/material";
var UpdatableValue = memo4(({ handleChange, label, value }) => {
  const [showInput, setShowInput] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const openInput = useCallback4(() => {
    setShowInput(true);
  }, []);
  const handleEnter = useCallback4((e) => {
    if (e.key === "Enter") {
      setShowInput(false);
    }
  }, []);
  const onClickAway = useCallback4(() => {
    if (typeof value !== "number" || isNaN(value)) {
      setErrorMsg(`${label} cannot be null`);
    } else {
      setShowInput(false);
      setErrorMsg("");
    }
  }, [label, value]);
  return /* @__PURE__ */ React16.createElement(StyledGroup, null, /* @__PURE__ */ React16.createElement(StyledLabel, {
    color: !!errorMsg ? ERROR_COLOR : "inherit"
  }, label), /* @__PURE__ */ React16.createElement(ClickAwayListener, {
    onClickAway
  }, showInput ? /* @__PURE__ */ React16.createElement(StyledTextField, {
    type: "number",
    variant: "standard",
    error: !!errorMsg,
    helperText: errorMsg,
    value,
    onChange: handleChange,
    onKeyUp: handleEnter
  }) : /* @__PURE__ */ React16.createElement(StyledValue, {
    onDoubleClick: openInput
  }, value, "\xA0\xA0", /* @__PURE__ */ React16.createElement(Icon, {
    label: "edit",
    onClick: openInput
  }))));
});

// SalesOnline/components/Cof/CofDashboard.jsx
var CofDashboard = () => {
  var _a, _b, _c;
  const cofGeneralDetails = useCofStore(selector2.cofGeneralDetails);
  const updatedCofBaseRate = (_b = (_a = useCofStore(selector2.updatedCofConfiguration)) == null ? void 0 : _a[COF_CONFIGURATION.BASE_RATE]) == null ? void 0 : _b[COF_BASE_RATE.BASE_RATE];
  const updateCofBaseRate = useCofStore(selector2.updateCofBaseRate);
  const updatedPricingDecimals = (_c = useCofStore(selector2.updatedCofConfiguration)) == null ? void 0 : _c[COF_CONFIGURATION.PRICING_DECIMALS];
  const updateCofConfiguration = useCofStore(selector2.updateCofConfiguration);
  const handleChangeCofRate = useCallback5((e) => {
    updateCofBaseRate(e.target.value);
  }, [updateCofBaseRate]);
  const handleChangeConfiguration = useCallback5((e) => {
    updateCofConfiguration(COF_CONFIGURATION.PRICING_DECIMALS, e.target.value);
  }, [updateCofConfiguration]);
  if (!cofGeneralDetails) {
    return null;
  }
  return /* @__PURE__ */ React17.createElement(StyledCofDashboard, null, /* @__PURE__ */ React17.createElement(StyledCofDashboardDetails, null, /* @__PURE__ */ React17.createElement(StyledGroup, null, /* @__PURE__ */ React17.createElement(StyledLabel, null, "Currency"), /* @__PURE__ */ React17.createElement(StyledValue, null, cofGeneralDetails == null ? void 0 : cofGeneralDetails[COF_CONFIGURATION.CURRENCY])), /* @__PURE__ */ React17.createElement(StyledGroup, null, /* @__PURE__ */ React17.createElement(StyledLabel, null, "valid from"), /* @__PURE__ */ React17.createElement(StyledValue, null, formatDateTimeForDisplay(cofGeneralDetails == null ? void 0 : cofGeneralDetails[COF_CONFIGURATION.VALID_FROM]))), /* @__PURE__ */ React17.createElement(StyledGroup, null, /* @__PURE__ */ React17.createElement(StyledLabel, null, "updated date"), /* @__PURE__ */ React17.createElement(StyledValue, null, formatDateTimeForDisplay(cofGeneralDetails == null ? void 0 : cofGeneralDetails[COF_CONFIGURATION.UPDATED_DATE]))), /* @__PURE__ */ React17.createElement(StyledGroup, null, /* @__PURE__ */ React17.createElement(StyledLabel, null, "Created by"), /* @__PURE__ */ React17.createElement(StyledValue, null, cofGeneralDetails == null ? void 0 : cofGeneralDetails[COF_CONFIGURATION.USERNAME])), /* @__PURE__ */ React17.createElement(UpdatableValue, {
    label: "base rate",
    value: updatedCofBaseRate,
    handleChange: handleChangeCofRate
  }), /* @__PURE__ */ React17.createElement(UpdatableValue, {
    label: "pricing decimals",
    value: updatedPricingDecimals,
    handleChange: handleChangeConfiguration
  })), /* @__PURE__ */ React17.createElement(CofDashboardSubmit, null));
};

// SalesOnline/components/Cof/Cof.jsx
var Cof = () => {
  const { isLoading } = useLoadCof();
  const authorizedRead = useAppStore(selector.authorizedRead);
  return /* @__PURE__ */ React18.createElement(StyledCofWrapper, null, !authorizedRead ? /* @__PURE__ */ React18.createElement(InsufficientRights, null) : /* @__PURE__ */ React18.createElement(React18.Fragment, null, /* @__PURE__ */ React18.createElement(CofTable, {
    isLoading
  }), /* @__PURE__ */ React18.createElement(CofDashboard, null)));
};

// SalesOnline/components/Surcharges/Surcharges.jsx
import React23, { useCallback as useCallback9 } from "react";
import { SmallerLoader as SmallerLoader2, StyledFlex as StyledFlex6 } from "vfs-data-portal-components";

// SalesOnline/stores/reactQuery/hooks/surcharges.hook.js
import { useMutation as useMutation2, useQuery as useQuery3 } from "@tanstack/react-query";

// SalesOnline/api/surcharges.api.js
var getSurchargesList = async () => {
  const { data } = await client.get(`surcharges/configurations/${CONFIGURATION_NAME}/calculation-type/COF`);
  return data;
};
var getSurcharge = async (surchargeName) => {
  const { data } = await client.get(`surcharges/configurations/${CONFIGURATION_NAME}/surcharge/${surchargeName}`);
  return data;
};
var updateSurcharge = async (surchargeName, payload) => {
  const { data } = await client.put(`surcharges/configurations/${CONFIGURATION_NAME}/surcharge/${surchargeName}`, payload);
  return data;
};

// SalesOnline/stores/reactQuery/hooks/surcharges.hook.js
var authorizationTypes5 = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];
var useSurchargesList = () => {
  const setSurchargeInView = useSurchargesStore(selector3.setSurchargeInView);
  const surchargeInView = useSurchargesStore(selector3.surchargeInView);
  const { data, isLoading } = useQuery3({
    queryKey: [QUERY_KEYS.SURCHARGES_LIST],
    queryFn: async () => {
      var _a;
      const data2 = await getSurchargesList();
      if ((data2 == null ? void 0 : data2[SURCHARGES_LIST.SURCHARGE_CONFIGURATION]) && !surchargeInView) {
        setSurchargeInView((_a = data2[SURCHARGES_LIST.SURCHARGE_CONFIGURATION][0]) == null ? void 0 : _a[SURCHARGES_LIST_ITEM.NAME]);
      }
      return data2;
    }
  });
  return {
    data,
    isLoading
  };
};
var useSurcharge = (surchargeName) => {
  const setSurcharge = useSurchargesStore(selector3.setSurcharge);
  const surchargesDict = useSurchargesStore(selector3.surchargesDict);
  const { data, isLoading } = useQuery3({
    queryKey: [QUERY_KEYS.SURCHARGE, surchargeName],
    queryFn: async () => {
      const data2 = await getSurcharge(surchargeName);
      if (!surchargesDict[surchargeName]) {
        setSurcharge(surchargeName, data2);
      }
      return data2;
    },
    enabled: !surchargesDict[surchargeName]
  });
  return {
    data,
    isLoading
  };
};
var useMutateSurcharge = (surchargeName) => {
  const setAuthorization = useAppStore(selector.setAuthorization);
  const setSurcharge = useSurchargesStore(selector3.setSurcharge);
  const mutation = useMutation2({
    mutationFn: (payload) => updateSurcharge(surchargeName, payload),
    onSuccess: (data) => {
      if (data) {
        setSurcharge(surchargeName, data);
      }
      alertMessageFunction("Surcharge saved successfully.", "success");
    },
    onError: (error) => {
      var _a, _b, _c;
      if (error.status === 403) {
        setAuthorization({
          type: authorizationTypes5.WRITE,
          value: false
        });
      }
      const message = (_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) != null ? _c : "Configuration save error";
      alertMessageFunction(message, "error");
    }
  });
  return mutation;
};

// mainApp/components/_common/inputs/RadioSelection.jsx
import React19, { memo as memo5 } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
var RadioSelection = memo5(({ list, itemLabel, value, handleChange }) => {
  return /* @__PURE__ */ React19.createElement(FormControl, {
    sx: { width: "fit-content" }
  }, /* @__PURE__ */ React19.createElement(RadioGroup, {
    value,
    onChange: handleChange
  }, list == null ? void 0 : list.map((item) => /* @__PURE__ */ React19.createElement(StyledControlLabel, {
    key: item[itemLabel],
    value: item[itemLabel],
    control: /* @__PURE__ */ React19.createElement(Radio, null),
    label: item[itemLabel]
  }))));
});

// SalesOnline/components/Surcharges/SurchargeView.jsx
import React22, { memo as memo8, useCallback as useCallback8 } from "react";
import { SmallerLoader } from "vfs-data-portal-components";

// SalesOnline/components/Surcharges/style.jsx
import { styled as styled6 } from "@mui/material";
var StyledSurchargeView = styled6("div")`
    max-width: 100%;
    display: ${({ display }) => display != null ? display : "block"};
    gap: 4rem;
`;
var StyledSurchargesDashboard = styled6("div")`
    display: flex;
    gap: 6rem;
    justify-content: ${({ isminimal }) => isminimal === "false" ? "space-between" : "flex-start"};
    width: 100%;
    margin-top: ${({ isminimal }) => isminimal === "false" ? "2" : 0}rem;
    padding: 1.3rem;
`;

// SalesOnline/components/Surcharges/SurchargeViewDashboard.jsx
import React21, { memo as memo7 } from "react";
import Box3 from "@mui/material/Box";

// SalesOnline/components/Surcharges/SurchargesSubmit.jsx
import React20, { memo as memo6, useCallback as useCallback7, useMemo as useMemo5 } from "react";
import { PrimaryButton as PrimaryButton2, StyledFlex as StyledFlex5 } from "vfs-data-portal-components";

// SalesOnline/hooks/surcharges/useSurcharges.hook.js
import { useCallback as useCallback6 } from "react";
var useRowsHaveChanged = (surchargeName) => {
  const surchargeData = useSurchargesStore(selector3.surchargesDict)[surchargeName];
  return surchargeData == null ? void 0 : surchargeData.originalData.some((row, idx) => {
    return JSON.stringify(row) !== JSON.stringify(surchargeData == null ? void 0 : surchargeData.updatedData[idx]);
  });
};
var useSubmit = (surchargeName) => {
  const surchargeData = useSurchargesStore(selector3.surchargesDict)[surchargeName];
  const { mutate, isPending } = useMutateSurcharge(surchargeName);
  const handleSubmit = useCallback6(async () => {
    const isOpex = surchargeData["raw"][SURCHARGE.SURCHARGE_NAME].toLowerCase() === "opex";
    const payload = createSurchargesPayload({
      raw: surchargeData["raw"],
      updatedData: surchargeData["updatedData"],
      relevantKeys: surchargeData["editableKeys"],
      newValidFrom: surchargeData["newValidFrom"],
      isOpex
    });
    await mutate(payload);
  }, [surchargeData]);
  return {
    handleSubmit,
    isPending
  };
};

// SalesOnline/components/Surcharges/SurchargesSubmit.jsx
var Submit = memo6(({ surchargeInView, rowsWithErrors }) => {
  var _a, _b;
  const rowsHaveChanged = useRowsHaveChanged(surchargeInView);
  const setNewValidFrom = useSurchargesStore(selector3.setNewValidFrom);
  const newValidFrom = (_b = (_a = useSurchargesStore(selector3.surchargesDict)) == null ? void 0 : _a[surchargeInView]) == null ? void 0 : _b["newValidFrom"];
  const { handleSubmit, isPending } = useSubmit(surchargeInView);
  const canSubmit = useMemo5(() => {
    return !!rowsHaveChanged && !(rowsWithErrors == null ? void 0 : rowsWithErrors.length);
  }, [rowsHaveChanged, rowsWithErrors == null ? void 0 : rowsWithErrors.length]);
  const handleSetNewValidDate = useCallback7((value) => {
    setNewValidFrom(value, surchargeInView);
  }, [setNewValidFrom, surchargeInView]);
  return /* @__PURE__ */ React20.createElement(StyledFlex5, {
    direction: "column-reverse",
    align: "flex-start",
    gap: "2rem"
  }, /* @__PURE__ */ React20.createElement(PrimaryButton2, {
    disabled: !canSubmit || isPending,
    isLoading: isPending,
    onClick: handleSubmit
  }, "update"), !!canSubmit && /* @__PURE__ */ React20.createElement(BasicDatePicker, {
    label: "New valid from",
    value: newValidFrom,
    onChange: handleSetNewValidDate,
    disablePast: true
  }));
});
var SurchargesSubmit = withWriteCheck(Submit);

// SalesOnline/components/Surcharges/SurchargeViewDashboard.jsx
var SurchargeViewDashboard = memo7(({ surchargeInView, isMinimal, rowsWithErrors }) => {
  var _a;
  const details = (_a = useSurchargesStore(selector3.surchargesDict)[surchargeInView]) == null ? void 0 : _a.raw;
  return /* @__PURE__ */ React21.createElement(StyledSurchargesDashboard, {
    isminimal: isMinimal == null ? void 0 : isMinimal.toString()
  }, /* @__PURE__ */ React21.createElement(Box3, null, /* @__PURE__ */ React21.createElement(StyledGroup, null, /* @__PURE__ */ React21.createElement(StyledLabel, null, "valid from"), /* @__PURE__ */ React21.createElement(StyledValue, null, formatDateTimeForDisplay(details == null ? void 0 : details[SURCHARGE.VALID_FROM]))), /* @__PURE__ */ React21.createElement(StyledGroup, null, /* @__PURE__ */ React21.createElement(StyledLabel, null, "updated date"), /* @__PURE__ */ React21.createElement(StyledValue, null, formatDateTimeForDisplay(details == null ? void 0 : details[SURCHARGE.UPDATED_DATE]))), /* @__PURE__ */ React21.createElement(StyledGroup, null, /* @__PURE__ */ React21.createElement(StyledLabel, null, "Created by"), /* @__PURE__ */ React21.createElement(StyledValue, null, details == null ? void 0 : details[SURCHARGE.USERNAME]))), /* @__PURE__ */ React21.createElement(SurchargesSubmit, {
    surchargeInView,
    rowsWithErrors
  }));
});

// SalesOnline/components/Surcharges/SurchargeView.jsx
var SurchargeView = memo8(({ surchargeInView }) => {
  const { isLoading } = useSurcharge(surchargeInView);
  const updateRow = useSurchargesStore(selector3.updateRow);
  const updatedData = useSurchargesStore(selector3.updatedData);
  const columns2 = useSurchargesStore(selector3.columns);
  const minimalData = useSurchargesStore(selector3.minimalData);
  const reset = useSurchargesStore(selector3.reset);
  const { rowsWithErrors } = useRowsWithErrors(updatedData);
  const handleUpdate = useCallback8((newRow) => {
    updateRow(surchargeInView, newRow);
    return newRow;
  }, [surchargeInView]);
  const handleReset = useCallback8(() => {
    reset(surchargeInView);
  }, [surchargeInView]);
  const handleExport = () => {
    const schema = createSchema(columns2);
    return generateExcel({
      schema,
      fileName: `Sales_Online_Surcharges_${surchargeInView}`,
      data: updatedData
    });
  };
  if (isLoading) {
    return /* @__PURE__ */ React22.createElement(SmallerLoader, null);
  }
  if (!columns2) {
    return null;
  }
  return /* @__PURE__ */ React22.createElement(StyledSurchargeView, {
    display: minimalData ? "flex" : "block"
  }, /* @__PURE__ */ React22.createElement(CommonDataGrid, {
    key: minimalData,
    loading: isLoading,
    columns: columns2,
    rows: updatedData,
    handleUpdate,
    isMinimal: minimalData,
    rowsWithErrors,
    reset: handleReset,
    handleExport
  }), /* @__PURE__ */ React22.createElement(SurchargeViewDashboard, {
    isMinimal: minimalData,
    rowsWithErrors,
    surchargeInView
  }));
});

// SalesOnline/components/Surcharges/Surcharges.jsx
var Surcharges = () => {
  const { data, isLoading } = useSurchargesList();
  const surchargeInView = useSurchargesStore(selector3.surchargeInView);
  const setSurchargeInView = useSurchargesStore(selector3.setSurchargeInView);
  const handleChange = useCallback9((event) => {
    setSurchargeInView(event.target.value);
  }, [setSurchargeInView]);
  if (isLoading) {
    return /* @__PURE__ */ React23.createElement(SmallerLoader2, null);
  }
  return /* @__PURE__ */ React23.createElement(StyledDashboardContainer, null, /* @__PURE__ */ React23.createElement(StyledFlex6, {
    width: "100%",
    align: "flex-start",
    justify: "space-between"
  }, /* @__PURE__ */ React23.createElement(RadioSelection, {
    list: data == null ? void 0 : data[SURCHARGES_LIST.SURCHARGE_CONFIGURATION],
    itemLabel: SURCHARGES_LIST_ITEM.NAME,
    value: surchargeInView,
    handleChange
  })), /* @__PURE__ */ React23.createElement(SurchargeView, {
    surchargeInView
  }));
};

// SalesOnline/components/Proforma/Proforma.jsx
import React28, { useCallback as useCallback14 } from "react";
import { SmallerLoader as SmallerLoader3, StyledFlex as StyledFlex10 } from "vfs-data-portal-components";

// SalesOnline/components/Proforma/ProformaInView.jsx
import React26, { memo as memo11, useCallback as useCallback12 } from "react";
import { StyledFlex as StyledFlex9 } from "vfs-data-portal-components";

// SalesOnline/stores/reactQuery/hooks/proforma.hook.js
import { useMutation as useMutation3, useQuery as useQuery4 } from "@tanstack/react-query";

// SalesOnline/api/proforma.api.js
var getProformaDetails = async () => {
  const { data } = await client.get(`/proforma/configurations/${CONFIGURATION_NAME}`);
  return data;
};
var getProformaSurchargesList = async () => {
  const { data } = await client.get(`surcharges/configurations/${CONFIGURATION_NAME}/calculation-type/Proforma`);
  return data;
};
var updateProformaDetails = async (payload) => {
  const { data } = await client.put(`/proforma/configurations/${CONFIGURATION_NAME}`, payload);
  return data;
};

// SalesOnline/stores/reactQuery/hooks/proforma.hook.js
var authorizationTypes6 = ACCESS_ROLES[INTERFACE_TYPES.SALES_ONLINE];
var useProformaDetails = () => {
  const updatedProformaDetails = useProformaStore(selector4.updatedProformaDetails);
  const setProformaDetails = useProformaStore(selector4.setProformaDetails);
  const { data, isLoading, refetch } = useQuery4({
    queryKey: [QUERY_KEYS.PROFORMA_CONFIG],
    queryFn: async () => {
      const data2 = await getProformaDetails();
      setProformaDetails(data2);
      return data2;
    },
    enabled: !updatedProformaDetails
  });
  return {
    data,
    isLoading,
    refetch
  };
};
var useProformaList = () => {
  const setProformaInView = useProformaStore(selector4.setProformaInView);
  const proformaInView = useProformaStore(selector4.proformaInView);
  const { data, isLoading } = useQuery4({
    queryKey: [QUERY_KEYS.PROFORMA_LIST],
    queryFn: async () => {
      var _a;
      const data2 = await getProformaSurchargesList();
      if ((data2 == null ? void 0 : data2[PROFORMA_LIST.SURCHARGES]) && !proformaInView) {
        setProformaInView((_a = data2[PROFORMA_LIST.SURCHARGES][0]) == null ? void 0 : _a[PROFORMA_LIST_ITEM.NAME]);
      }
      return data2;
    }
  });
  return {
    data,
    isLoading
  };
};
var useProforma = (name) => {
  const setProformaObject = useProformaStore(selector4.setProformaObject);
  const proformaDict = useProformaStore(selector4.proformaDict);
  const { data, isLoading } = useQuery4({
    queryKey: [QUERY_KEYS.PROFORMA_SURCHARGE, name],
    queryFn: async () => {
      const data2 = await getSurcharge(name);
      if (!proformaDict[name]) {
        setProformaObject(name, data2);
      }
      return data2;
    },
    enabled: !proformaDict[name]
  });
  return {
    data,
    isLoading
  };
};
var useMutateProforma = (surchargeName) => {
  const setAuthorization = useAppStore(selector.setAuthorization);
  const setProformaObject = useProformaStore(selector4.setProformaObject);
  const mutation = useMutation3({
    mutationFn: (payload) => updateSurcharge(surchargeName, payload),
    onSuccess: (data) => {
      if (data) {
        setProformaObject(surchargeName, data);
      }
      alertMessageFunction("Proforma fee saved successfully.", "success");
    },
    onError: (error) => {
      var _a, _b, _c;
      if (error.status === 403) {
        setAuthorization({
          type: authorizationTypes6.WRITE,
          value: false
        });
      }
      const message = (_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) != null ? _c : "Configuration save error";
      alertMessageFunction(message, "error");
    }
  });
  return mutation;
};
var useMutateProformaDetails = (refetchCallback) => {
  const setAuthorization = useAppStore(selector.setAuthorization);
  const mutation = useMutation3({
    mutationFn: (payload) => updateProformaDetails(payload),
    onSuccess: () => {
      alertMessageFunction("Proforma details saved successfully.", "success");
      refetchCallback == null ? void 0 : refetchCallback();
    },
    onError: (error) => {
      var _a, _b, _c;
      if (error.status === 403) {
        setAuthorization({
          type: authorizationTypes6.WRITE,
          value: false
        });
      }
      const message = (_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) != null ? _c : "Configuration save error";
      alertMessageFunction(message, "error");
    }
  });
  return mutation;
};

// SalesOnline/components/Proforma/ProformaInViewDashboard.jsx
import React25, { memo as memo10 } from "react";
import { StyledFlex as StyledFlex8 } from "vfs-data-portal-components";

// SalesOnline/components/Proforma/ProformaSubmit.jsx
import React24, { memo as memo9, useCallback as useCallback11, useMemo as useMemo7 } from "react";
import { PrimaryButton as PrimaryButton3, StyledFlex as StyledFlex7 } from "vfs-data-portal-components";

// SalesOnline/hooks/proforma/useProforma.hook.js
import { useCallback as useCallback10, useMemo as useMemo6 } from "react";
var useRowsHaveChanged2 = (proformaName) => {
  const proformaData = useProformaStore(selector4.proformaDict)[proformaName];
  return proformaData.originalData.some((row, idx) => {
    return JSON.stringify(row) !== JSON.stringify(proformaData.updatedData[idx]);
  });
};
var useProformaDetailsHaveChanged = () => {
  const originalProformaDetails = useProformaStore(selector4.originalProformaDetails);
  const updatedProformaDetails = useProformaStore(selector4.updatedProformaDetails);
  const detailsHaveChanged = useMemo6(() => {
    if (!originalProformaDetails || !updatedProformaDetails) {
      return false;
    }
    return Object.keys(originalProformaDetails).some(
      (key) => originalProformaDetails[key] !== updatedProformaDetails[key]
    );
  }, [originalProformaDetails, updatedProformaDetails]);
  return detailsHaveChanged;
};
var useSubmit2 = ({ proformaName, rowsHaveChanged, detailsHaveChanged }) => {
  const proformaData = useProformaStore(selector4.proformaDict)[proformaName];
  const updatedProformaDetails = useProformaStore(selector4.updatedProformaDetails);
  const { refetch } = useProformaDetails();
  const { mutate: mutateSurcharge, isPending: isPendingProformaConfig } = useMutateProforma(proformaName);
  const { mutate: mutateProformaDetails, isPending: isPendingProformaSurcharge } = useMutateProformaDetails(refetch);
  const handleSubmit = useCallback10(async () => {
    const surchargePayload = createSurchargesPayload({
      raw: proformaData["raw"],
      updatedData: proformaData["updatedData"],
      relevantKeys: proformaData["editableKeys"],
      newValidFrom: proformaData["newValidFrom"]
    });
    if (rowsHaveChanged) {
      await mutateSurcharge(surchargePayload);
    }
    if (detailsHaveChanged) {
      await mutateProformaDetails(
        {
          ...updatedProformaDetails,
          [PROFORMA.VALID_FROM]: formatDateForDb(proformaData["newValidFrom"])
        }
      );
    }
  }, [proformaData, updatedProformaDetails, rowsHaveChanged, detailsHaveChanged]);
  return {
    handleSubmit,
    isPending: isPendingProformaSurcharge || isPendingProformaConfig
  };
};

// SalesOnline/components/Proforma/ProformaSubmit.jsx
var Submit2 = memo9(({ proformaInView, rowsWithErrors }) => {
  var _a, _b;
  const rowsHaveChanged = useRowsHaveChanged2(proformaInView);
  const detailsHaveChanged = useProformaDetailsHaveChanged();
  const newValidFrom = (_b = (_a = useProformaStore(selector4.proformaDict)) == null ? void 0 : _a[proformaInView]) == null ? void 0 : _b["newValidFrom"];
  const setNewValidFrom = useProformaStore(selector4.setNewValidFrom);
  const { handleSubmit, isPending } = useSubmit2({ proformaName: proformaInView, rowsHaveChanged, detailsHaveChanged });
  const handleSetNewValidDate = useCallback11((value) => {
    setNewValidFrom(value, proformaInView);
  }, [setNewValidFrom, proformaInView]);
  const canSubmit = useMemo7(() => {
    return (!!rowsHaveChanged || !!detailsHaveChanged) && !(rowsWithErrors == null ? void 0 : rowsWithErrors.length);
  }, [rowsHaveChanged, detailsHaveChanged, rowsWithErrors == null ? void 0 : rowsWithErrors.length]);
  return /* @__PURE__ */ React24.createElement(StyledFlex7, {
    direction: "column-reverse",
    align: "flex-start",
    gap: "2rem"
  }, /* @__PURE__ */ React24.createElement(PrimaryButton3, {
    disabled: !canSubmit || isPending,
    isLoading: isPending,
    onClick: handleSubmit
  }, "update"), !!canSubmit && /* @__PURE__ */ React24.createElement(BasicDatePicker, {
    label: "New valid from",
    value: newValidFrom,
    onChange: handleSetNewValidDate,
    disablePast: true
  }));
});
var ProformaSubmit = withWriteCheck(Submit2);

// SalesOnline/components/Proforma/ProformaInViewDashboard.jsx
var ProformaInViewDashboard = memo10(({ proformaInView, rowsWithErrors }) => {
  var _a;
  const details = (_a = useProformaStore(selector4.proformaDict)[proformaInView]) == null ? void 0 : _a.raw;
  return /* @__PURE__ */ React25.createElement(StyledFlex8, {
    align: "flex-start",
    gap: "7rem"
  }, /* @__PURE__ */ React25.createElement("div", null, /* @__PURE__ */ React25.createElement(StyledGroup, null, /* @__PURE__ */ React25.createElement(StyledLabel, null, "valid from"), /* @__PURE__ */ React25.createElement(StyledValue, null, formatDateTimeForDisplay(details == null ? void 0 : details[PROFORMA.VALID_FROM]))), /* @__PURE__ */ React25.createElement(StyledGroup, null, /* @__PURE__ */ React25.createElement(StyledLabel, null, "updated date"), /* @__PURE__ */ React25.createElement(StyledValue, null, formatDateTimeForDisplay(details == null ? void 0 : details[PROFORMA.UPDATED_DATE]))), /* @__PURE__ */ React25.createElement(StyledGroup, null, /* @__PURE__ */ React25.createElement(StyledLabel, null, "Created by"), /* @__PURE__ */ React25.createElement(StyledValue, null, details == null ? void 0 : details[PROFORMA.USERNAME]))), /* @__PURE__ */ React25.createElement(ProformaSubmit, {
    proformaInView,
    rowsWithErrors
  }));
});

// SalesOnline/components/Proforma/ProformaInView.jsx
var ProformaInView = memo11(({ proformaInView }) => {
  const { isLoading } = useProforma(proformaInView);
  const updatedData = useProformaStore(selector4.updatedData);
  const columns2 = useProformaStore(selector4.columns);
  const updateRow = useProformaStore(selector4.updateRow);
  const reset = useProformaStore(selector4.reset);
  const { rowsWithErrors } = useRowsWithErrors(updatedData);
  const handleUpdate = useCallback12((newRow) => {
    updateRow(proformaInView, newRow);
    return newRow;
  }, [proformaInView]);
  const handleReset = useCallback12(() => {
    reset(proformaInView);
  }, [proformaInView]);
  const handleExport = () => {
    const schema = createSchema(columns2);
    return generateExcel({
      schema,
      fileName: `Proforma_Surcharges_${proformaInView}`,
      data: updatedData
    });
  };
  if (!(columns2 == null ? void 0 : columns2.length))
    return null;
  return /* @__PURE__ */ React26.createElement(StyledFlex9, {
    width: "100%",
    align: "flex-start",
    gap: "6rem"
  }, /* @__PURE__ */ React26.createElement(CommonDataGrid, {
    width: "fit-content",
    loading: isLoading,
    columns: columns2,
    rows: updatedData,
    reset: handleReset,
    handleUpdate,
    rowsWithErrors,
    handleExport
  }), /* @__PURE__ */ React26.createElement(ProformaInViewDashboard, {
    proformaInView,
    rowsWithErrors
  }));
});

// SalesOnline/components/Proforma/ProformaDetails.jsx
import React27, { useCallback as useCallback13 } from "react";
import { Tooltip } from "@mui/material";
import { LoadingMessage as LoadingMessage2 } from "vfs-data-portal-components";

// SalesOnline/components/Proforma/style.jsx
import { styled as styled7 } from "@mui/material";
var StyledProformaDetails = styled7("div")`
    width: 100%;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-auto-columns: auto;
    gap: 10rem;
`;

// SalesOnline/components/Proforma/ProformaDetails.jsx
var ProformaDetails = () => {
  const { isLoading: loadingProformaDetails } = useProformaDetails();
  const updatedProformaDetails = useProformaStore(selector4.updatedProformaDetails);
  const updateProformaDetails2 = useProformaStore(selector4.updateProformaDetails);
  const handleUpdate = useCallback13(({ key, value }) => {
    updateProformaDetails2(key, value);
  }, []);
  if (loadingProformaDetails) {
    return /* @__PURE__ */ React27.createElement(LoadingMessage2, {
      text: "Loading proforma details",
      width: "fit-content"
    });
  }
  if (!updatedProformaDetails) {
    return null;
  }
  return /* @__PURE__ */ React27.createElement(StyledProformaDetails, null, /* @__PURE__ */ React27.createElement(UpdatableValue, {
    label: "proforma",
    value: updatedProformaDetails == null ? void 0 : updatedProformaDetails[PROFORMA_CONFIG.PROFORMA],
    handleChange: (e) => handleUpdate({
      key: PROFORMA_CONFIG.PROFORMA,
      value: e.target.value
    })
  }), /* @__PURE__ */ React27.createElement(UpdatableValue, {
    label: "min spread",
    value: updatedProformaDetails == null ? void 0 : updatedProformaDetails[PROFORMA_CONFIG.MIN_SPREAD],
    handleChange: (e) => handleUpdate({
      key: PROFORMA_CONFIG.MIN_SPREAD,
      value: e.target.value
    })
  }), /* @__PURE__ */ React27.createElement(StyledGroup, null, /* @__PURE__ */ React27.createElement(StyledLabel, null, "valid from"), /* @__PURE__ */ React27.createElement(StyledValue, null, formatDateTimeForDisplay(updatedProformaDetails == null ? void 0 : updatedProformaDetails[PROFORMA_CONFIG.VALID_FROM]))), /* @__PURE__ */ React27.createElement(StyledGroup, null, /* @__PURE__ */ React27.createElement(StyledLabel, null, "updated date"), /* @__PURE__ */ React27.createElement(StyledValue, null, formatDateTimeForDisplay(updatedProformaDetails == null ? void 0 : updatedProformaDetails[PROFORMA_CONFIG.UPDATED_DATE]))), /* @__PURE__ */ React27.createElement(StyledGroup, null, /* @__PURE__ */ React27.createElement(StyledLabel, null, "created by"), /* @__PURE__ */ React27.createElement(Tooltip, {
    title: updatedProformaDetails == null ? void 0 : updatedProformaDetails[PROFORMA_CONFIG.USERNAME]
  }, /* @__PURE__ */ React27.createElement(StyledValue, null, ellipsisMidSentence({ str: updatedProformaDetails == null ? void 0 : updatedProformaDetails[PROFORMA_CONFIG.USERNAME] })))));
};

// SalesOnline/components/Proforma/Proforma.jsx
var Proforma = () => {
  const { data, isLoading: loadingList } = useProformaList();
  const setProformaInView = useProformaStore(selector4.setProformaInView);
  const proformaInView = useProformaStore(selector4.proformaInView);
  const handleChange = useCallback14((event) => {
    setProformaInView(event.target.value);
  }, [setProformaInView]);
  if (loadingList) {
    return /* @__PURE__ */ React28.createElement(SmallerLoader3, null);
  }
  return /* @__PURE__ */ React28.createElement(StyledDashboardContainer, null, /* @__PURE__ */ React28.createElement(ProformaDetails, null), /* @__PURE__ */ React28.createElement(StyledFlex10, {
    width: "100%",
    align: "flex-start",
    justify: "space-between"
  }, /* @__PURE__ */ React28.createElement(RadioSelection, {
    list: data[PROFORMA_LIST.SURCHARGES],
    itemLabel: PROFORMA_LIST_ITEM.NAME,
    value: proformaInView,
    handleChange
  })), /* @__PURE__ */ React28.createElement(ProformaInView, {
    proformaInView
  }));
};

// mainApp/components/access/Access.jsx
import React29, { memo as memo12, useCallback as useCallback15, useState as useState2 } from "react";
import { Box as Box4 } from "@mui/material";
import { PrimaryButton as PrimaryButton4 } from "vfs-data-portal-components";

// mainApp/components/access/style.jsx
import { styled as styled8 } from "@mui/material";
var StyledAccess = styled8("div")`

`;
var StyledAccessRow = styled8("div")`
    width: 70%;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-auto-columns: auto;
    gap: 3rem;
`;

// mainApp/utils/email.util.js
var RECIPIENTS = ["arvid.waldner.2@consultant.volvo.com", "vijayakumar.palani.2@consultant.volvo.com"];
var buildEmailPayload = ({ accessType, user, interfaceType }) => {
  const interfaceName = INTERFACES[interfaceType].label;
  const body = `
    <p>Hi,</p>
    <p>The user ${user} has requested the following access roles to use ${interfaceName}:</p>
    <ul>
        <li><strong>Interface:</strong> ${interfaceName}</li>
        <li><strong>Role:</strong> <span style="text-transform: capitalize">${accessType}</span></li>
    </ul>
    <p>Could you please set up the necessary roles and communicate to the user?</p>
    <p>Thanks!</p>
  `;
  return {
    recipients: RECIPIENTS,
    body,
    subject: "access Role Request"
  };
};
var utils = {
  buildEmailPayload
};
var email_util_default = utils;

// mainApp/components/access/Access.jsx
var Access = memo12(({ auth, accessRoles, interfaceType }) => {
  const { READ: READ2, WRITE: WRITE2 } = ACCESS_ROLES[interfaceType];
  const userHasRead = accessRoles.includes(READ2);
  const userHasWrite = accessRoles.includes(WRITE2);
  const [loading, setLoading] = useState2({
    [READ2]: false,
    [WRITE2]: false
  });
  const requestAccess = useCallback15(async (accessType) => {
    setLoading((prevState) => ({
      ...prevState,
      [accessType]: true
    }));
    await asyncWrapper(sendEmail(email_util_default.buildEmailPayload({
      accessType,
      user: auth == null ? void 0 : auth.username,
      interfaceType
    })), "access request sent");
    setLoading((prevState) => ({
      ...prevState,
      [accessType]: false
    }));
  }, []);
  return /* @__PURE__ */ React29.createElement(StyledAccess, null, /* @__PURE__ */ React29.createElement(StyledAccessRow, null, /* @__PURE__ */ React29.createElement(StyledLabel, null, "role"), /* @__PURE__ */ React29.createElement(StyledLabel, null, "granted"), /* @__PURE__ */ React29.createElement(StyledLabel, null, "action")), /* @__PURE__ */ React29.createElement(StyledAccessRow, null, /* @__PURE__ */ React29.createElement(StyledValue, null, READ2), /* @__PURE__ */ React29.createElement(StyledValue, null, /* @__PURE__ */ React29.createElement("i", {
    style: { fontSize: "2.4rem" },
    className: "material-icons-outlined"
  }, userHasRead ? "check" : "close")), /* @__PURE__ */ React29.createElement(Box4, null, /* @__PURE__ */ React29.createElement(PrimaryButton4, {
    disabled: userHasRead || loading[READ2],
    isLoading: loading[READ2],
    onClick: () => requestAccess(READ2)
  }, "request"))), /* @__PURE__ */ React29.createElement(StyledAccessRow, null, /* @__PURE__ */ React29.createElement(StyledValue, null, WRITE2), /* @__PURE__ */ React29.createElement(StyledValue, null, /* @__PURE__ */ React29.createElement("i", {
    style: { fontSize: "2.4rem" },
    className: "material-icons-outlined"
  }, userHasWrite ? "check" : "close")), /* @__PURE__ */ React29.createElement(Box4, null, /* @__PURE__ */ React29.createElement(PrimaryButton4, {
    disabled: userHasWrite || loading[WRITE2],
    isLoading: loading[WRITE2],
    onClick: () => requestAccess(WRITE2)
  }, "request"))));
});

// SalesOnline/consts/_common/app.consts.jsx
var {
  PROFORMA: PROFORMA2,
  COF
} = RATE_CONFIGURATION_TYPE;
var APP_VIEWS = [
  {
    label: "Rate Configuration",
    value: 1,
    icon: "home",
    enabled: [PROFORMA2, COF],
    Component: RateConfiguration
  },
  {
    label: "Cost of Funds",
    value: 2,
    icon: "payments",
    enabled: [PROFORMA2, COF],
    Component: Cof
  },
  {
    label: "Surcharges",
    value: 3,
    icon: "attach_money",
    enabled: [PROFORMA2, COF],
    Component: Surcharges
  },
  {
    label: "Proforma Fees",
    value: 4,
    icon: "paid",
    enabled: [PROFORMA2],
    Component: Proforma
  },
  {
    label: "Request access",
    value: 5,
    icon: "lock",
    enabled: [PROFORMA2, COF],
    Component: Access
  }
];

// SalesOnline/hooks/_common/useCleanUp.hook.js
var useCleanUpHook = () => {
  const cleanupApp = useAppStore(selector.cleanUp);
  const cleanupCof = useCofStore(selector2.cleanUp);
  const cleanupSurcharges = useSurchargesStore(selector3.cleanUp);
  const cleanupProforma = useProformaStore(selector4.cleanUp);
  const cleanupRateConfiguration = useRateConfigurationStore(selector5.cleanUp);
  const cleanUpStores = () => {
    cleanupApp();
    cleanupCof();
    cleanupSurcharges();
    cleanupProforma();
    cleanupRateConfiguration();
    localstorage_util_default.clearStorage();
  };
  return {
    cleanUpStores
  };
};

// SalesOnline/config/_setConfigs.js
var _setConfigs = (state) => {
  const { environment } = state;
  setClient(environment);
  setEnv(environment);
};

// mainApp/components/_common/initiateApp/InitiateApp.jsx
import React30, { memo as memo13, useCallback as useCallback16, useEffect, useRef, useState as useState3 } from "react";
import { LoadingMessage as LoadingMessage3, PrimaryButton as PrimaryButton5 } from "vfs-data-portal-components";
var InitiateApp = memo13((props) => {
  const {
    cleanStores,
    authenticate,
    finishedAuth,
    dpState,
    setConfigs,
    appViews,
    auth,
    accessRoles,
    interfaceType
  } = props;
  const connectionSet = useRef(null);
  const currentView = useMainAppStore(mainAppSelector.currentView);
  const setNavItems = useMainAppStore(mainAppSelector.setNavItems);
  const [loading, setLoading] = useState3(false);
  const [manualLoginNeeded, setManualLoginNeeded] = useState3(false);
  useEffect(() => {
    (async () => {
      if (!connectionSet.current) {
        connectionSet.current = true;
        setLoading(true);
        setConfigs(dpState);
        const res = await authenticate();
        if (res == null ? void 0 : res.error) {
          setManualLoginNeeded(true);
        } else {
          setNavItems(appViews);
        }
        setLoading(false);
      }
    })();
  }, [dpState]);
  useEffect(() => {
    return () => {
      if (cleanStores) {
        cleanStores();
      }
    };
  }, []);
  const renderView = useCallback16(() => {
    var _a;
    const Component = (_a = appViews.find((item) => item.value === currentView)) == null ? void 0 : _a.Component;
    return /* @__PURE__ */ React30.createElement(Component, {
      auth,
      accessRoles,
      interfaceType
    });
  }, [currentView, appViews, accessRoles, auth, interfaceType]);
  const renderContent = () => {
    if (finishedAuth) {
      return renderView();
    }
    if (manualLoginNeeded) {
      return /* @__PURE__ */ React30.createElement(PrimaryButton5, {
        onClick: authenticate
      }, "Login");
    }
    return /* @__PURE__ */ React30.createElement(LoadingMessage3, {
      text: "Accessing your rights",
      width: "fit-content"
    });
  };
  return /* @__PURE__ */ React30.createElement(React30.Fragment, null, loading || !finishedAuth ? /* @__PURE__ */ React30.createElement(LoadingMessage3, {
    text: "Accessing your roles",
    width: "fit-content"
  }) : renderContent());
});

// SalesOnline/index.jsx
var SalesOnline = ({ state }) => {
  const finishedAuth = useAppStore(selector.finishedAuth);
  const authenticate = useAppStore(selector.authenticate);
  const auth = useAppStore(selector.auth);
  const accessRoles = useAppStore(selector.accessRoles);
  const { cleanUpStores } = useCleanUpHook();
  return /* @__PURE__ */ React31.createElement(InitiateApp, {
    authenticate,
    cleanStores: cleanUpStores,
    finishedAuth,
    dpState: state,
    setConfigs: _setConfigs,
    appViews: APP_VIEWS,
    interfaceType: INTERFACE_TYPES.SALES_ONLINE,
    accessRoles,
    auth
  });
};

// VolvoSelected/index.jsx
import React39 from "react";

// VolvoSelected/config/axios.volvoSelected.js
import axios3 from "axios";

// VolvoSelected/utils/authenticator.util.js
import { BrowserCacheLocation as BrowserCacheLocation2, PublicClientApplication as PublicClientApplication2 } from "@azure/msal-browser";
var defaultScope2 = {
  scopes: ["user.read"]
};
var defaultStorageConfig2 = {
  cache: {
    cacheLocation: BrowserCacheLocation2.SessionStorage
  }
};
var Authenticator2 = class {
  constructor({ msalConfig, scope }) {
    this.scopeRequestConfig = scope != null ? scope : defaultScope2.scopes.toString();
    this.msalInstance = new PublicClientApplication2(msalConfig);
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
      if (allAccounts && allAccounts.length <= 0)
        throw new Error("login_required");
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
};
var authenticator_util_default2 = Authenticator2;

// VolvoSelected/consts/localstorage.consts.js
var IRC_TOKEN = "ircToken";

// VolvoSelected/utils/localstorage.util.js
var LocalStorageUtil3 = (() => {
  const _setIrcToken = (token) => {
    localStorage.setItem(IRC_TOKEN, token);
  };
  const _getIrcToken = () => {
    return localStorage.getItem(IRC_TOKEN);
  };
  const _clearStorage = () => {
    localStorage.removeItem(IRC_TOKEN);
  };
  return {
    setIrcToken: _setIrcToken,
    getIrcToken: _getIrcToken,
    clearStorage: _clearStorage
  };
})();
var localstorage_util_default3 = LocalStorageUtil3;

// VolvoSelected/consts/auth.consts.js
var VOLVO_SELECTED2 = "irc-volvo-selected-auth";

// VolvoSelected/consts/_globals.consts.js
var env3;
var setEnv2 = (envName) => {
  env3 = envName;
};
var TODAY4 = new Date();

// VolvoSelected/utils/security.util.js
var authVolvoSelected = async (manualLoginNeeded) => {
  const [data] = await asyncWrapper(getMSALConfig(VOLVO_SELECTED2));
  if (!data)
    return;
  const msalConfig = JSON.parse(data.value);
  const scope = msalConfig.scopes[env3];
  const authenticator = new authenticator_util_default2({ msalConfig, scope });
  let account, token, error;
  if (manualLoginNeeded) {
    ({ account, token, error } = await authenticator.loginPopup());
  } else {
    ({ account, token, error } = await authenticator.getAccessToken());
  }
  setVolvoSelectedAuthInterceptors();
  localstorage_util_default3.setIrcToken(token);
  return {
    account,
    token,
    headers: msalConfig.headers,
    error
  };
};

// VolvoSelected/consts/api.consts.js
var VOLVO_SELECTED_URL_PATHS = {
  dev: "https://app-interestratecalculator-dev.azurewebsites.net/interest-rates",
  qa: "https://app-interestratecalculator-qa.azurewebsites.net/interest-rates",
  prod: "https://app-interestratecalculator-dev.azurewebsites.net/interest-rates"
};

// VolvoSelected/config/axios.volvoSelected.js
var volvoSelectedClient;
var setVolvoSelectedClient = (env4) => {
  volvoSelectedClient = axios3.create({
    baseURL: VOLVO_SELECTED_URL_PATHS[env4]
  });
};
var setVolvoSelectedAuthInterceptors = () => {
  volvoSelectedClient.interceptors.request.use(async (config) => {
    const token = localstorage_util_default3.getIrcToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  volvoSelectedClient.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log("error");
      const originalRequest = error.config;
      if (error.response && error.response.status === 401) {
        const { token } = await authVolvoSelected();
        axios3.defaults.headers.common["Authorization"] = "Bearer " + token;
        originalRequest.headers["Authorization"] = "Bearer " + token;
        return axios3(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};

// VolvoSelected/config/_setConfigs.js
var _setConfigs2 = (state) => {
  const { environment } = state;
  setVolvoSelectedClient(environment);
  setEnv2(environment);
  setVolvoSelectedAuthInterceptors(environment);
};

// VolvoSelected/components/volvoSelected/VolvoSelectedDisplay.jsx
import React38 from "react";
import { LoadingMessage as LoadingMessage4 } from "vfs-data-portal-components";

// VolvoSelected/components/volvoSelected/VolvoSelectedTable.jsx
import React35, { memo as memo17, useCallback as useCallback19, useState as useState4 } from "react";

// VolvoSelected/components/_common/table/VolvoSelectedDataGrid.jsx
import React32, { memo as memo14, useCallback as useCallback17, useMemo as useMemo8 } from "react";
import Box5 from "@mui/material/Box";
import { Popover, Typography as Typography4 } from "@mui/material";
import { getGridNumericOperators as getGridNumericOperators2, getGridStringOperators as getGridStringOperators2 } from "@mui/x-data-grid";

// VolvoSelected/components/_common/style.jsx
import { styled as styled9 } from "@mui/material";
import { DataGrid as DataGrid2 } from "@mui/x-data-grid";
import { DatePicker as DatePicker2 } from "@mui/x-date-pickers/DatePicker";
var StyledDataTable2 = styled9(DataGrid2)`
    background-color: #FFFFFF;

    .MuiDataGrid-columnHeaders {
        background-color: #C4D2D5 !important;
    }

    .MuiDataGrid-columnHeaderTitle {
        font-weight: 600 !important;
        text-transform: capitalize;
    }

    .error-row {
        color: ${ERROR_COLOR};
        border: 1px solid ${ERROR_COLOR};
    }

    font-size: ${TABLE_FONT_SIZE};

    input {
        font-size: ${TABLE_FONT_SIZE};
    }
`;
var StyledDatePicker2 = styled9(DatePicker2)`
    width: 100% !important;
    background-color: #FFFFFF;
    border-radius: 1rem;

    .MuiStack-root {
        overflow: visible;

    }
`;

// VolvoSelected/components/_common/table/VolvoSelectedDataGrid.jsx
var CustomPopover = memo14(({ row, handlePopoverClose, open, anchorEl }) => {
  if (!row || !row.error)
    return null;
  return /* @__PURE__ */ React32.createElement(Popover, {
    sx: {
      pointerEvents: "none"
    },
    open,
    anchorEl,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    onClose: handlePopoverClose,
    disableRestoreFocus: true
  }, /* @__PURE__ */ React32.createElement(Typography4, {
    p: 1,
    color: ERROR_COLOR
  }, row.errorMsg));
});
var VolvoSelectedDataGrid = memo14((props) => {
  const { rows, columns: columns2, handleUpdate, rowsWithErrors, loading } = props;
  const [anchorEl, setAnchorEl] = React32.useState(null);
  const [value, setValue] = React32.useState(null);
  const columnsWithCustomFilters = useMemo8(() => {
    return columns2.map((column) => {
      if (column.type === "number") {
        return {
          ...column,
          valueFormatter: (params) => {
            return params == null ? void 0 : params.value;
          },
          filterOperators: getGridNumericOperators2().filter(
            (operator) => operator.value === ">" || operator.value === "<"
          )
        };
      } else {
        return {
          ...column,
          filterOperators: getGridStringOperators2().filter((operator) => operator.value === "contains")
        };
      }
    });
  }, [columns2]);
  const handlePopoverOpen = (event) => {
    const id = +event.currentTarget.parentElement.dataset.id;
    const row = rows.find((r) => r.id === id);
    setValue(row);
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
  };
  const open = Boolean(anchorEl);
  const isItReallyError = useCallback17((row) => {
    var _a;
    return (_a = rowsWithErrors == null ? void 0 : rowsWithErrors.find((r) => r.id === row.id)) == null ? void 0 : _a.error;
  }, [rowsWithErrors]);
  const getRowClassName = (params) => {
    if (params.row.error) {
      const isError = isItReallyError(params.row);
      return isError ? "error-row" : "";
    }
  };
  return /* @__PURE__ */ React32.createElement(Box5, {
    sx: { width: "100%" }
  }, props.children, /* @__PURE__ */ React32.createElement(StyledDataTable2, {
    rows,
    loading,
    columns: columnsWithCustomFilters,
    editMode: "row",
    disableColumnResize: true,
    processRowUpdate: handleUpdate,
    onProcessRowUpdateError: (error) => console.error(error),
    initialState: {
      pagination: {
        paginationModel: {
          pageSize: 10
        }
      }
    },
    slotProps: {
      cell: {
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose
      },
      loadingOverlay: {
        variant: "linear-progress",
        noRowsVariant: "skeleton"
      }
    },
    autoHeight: true,
    pageSizeOptions: [5, 10, 15, 20],
    disableRowSelectionOnClick: true,
    getRowClassName
  }), /* @__PURE__ */ React32.createElement(CustomPopover, {
    anchorEl,
    row: value,
    open,
    handlePopoverClose
  }));
});

// VolvoSelected/types/volvoSelected/config.type.js
var VOLVO_SELECTED_CONFIG_TYPE = {
  CONFIGURATION_NAME: "configurationName",
  VALID_FROM: "validFrom",
  DETAIL: "detail",
  CALCULATION_CONFIG_TYPE: "calculationConfiguration"
};
var VOLVO_SELECTED_CONFIG_DETAIL_TYPE = {
  COUNTRY: "country",
  TERM: "term",
  INTEREST_RATE: "interestRate"
};
var ACCESS_ROLE_TYPE_ENUM = {
  READ: "read",
  WRITE: "write"
};

// VolvoSelected/components/volvoSelected/style.jsx
import { styled as styled10 } from "@mui/material";
import Box6 from "@mui/material/Box";

// VolvoSelected/consts/ui.consts.js
var GAP = "3.5rem";

// VolvoSelected/components/volvoSelected/style.jsx
var StyledContainer = styled10("div")`
    width: 100%;
    min-height: 80vh;
    background-color: #F7F7F7;
    padding: 2rem ${GAP};
`;
var StyledVolvoSelected = styled10("div")`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    gap: 5rem;
    padding-bottom: 5rem;
    position: relative;
    height: 100%;
    padding-top: ${GAP};
`;
var StyledVolvoSelectedTime = styled10("div")`
    margin-bottom: 2rem;
`;
var StyledVolvoSelectedActions = styled10("div")`
    display: flex;
    flex-direction: column;
    height: fit-content;
    position: sticky;
    top: 7rem;
    background: rgba(0, 0, 0, .11);
    padding: 2rem;
    border-radius: .4rem;
`;
var StyledInstructions = styled10(Box6)`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 4rem;
`;
var StyledVolvoSelectedUnauthorized = styled10(Box6)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 35rem;
    margin-top: 2rem;
    gap: 1rem;
`;
var StyledVolvoSelectedTableContainer = styled10(Box6)`
    min-width: 85rem;
`;

// VolvoSelected/stores/zustand/stores/global.store.js
import { create as create3 } from "zustand";
import { devtools as devtools2 } from "zustand/middleware";

// VolvoSelected/stores/zustand/stores/app.store.js
import { produce as produce7 } from "immer";
var authorizationTypes7 = ACCESS_ROLES[INTERFACE_TYPES.VOLVO_SELECTED];
var initialState7 = {
  auth: null,
  finishedAuth: false,
  authorizedRead: true,
  authorizedWrite: true,
  accessRoles: []
};
var appStore2 = (set, get) => ({
  ...initialState7,
  authenticate: async () => {
    const auth = get().auth;
    if (!auth) {
      const res = await authVolvoSelected();
      const decoded = decodeToken(res.token);
      if (res.account) {
        set(
          produce7(
            (state) => {
              var _a;
              state.auth = res.account;
              state.finishedAuth = true;
              state.accessRoles = decoded == null ? void 0 : decoded.roles;
              state.authorizedRead = (_a = decoded == null ? void 0 : decoded.roles) == null ? void 0 : _a.includes(authorizationTypes7.READ);
            }
          )
        );
      }
      return res;
    }
  },
  setAuthorization: ({ type, value }) => {
    set(
      produce7(
        (state) => {
          state[type] = value;
        }
      )
    );
  },
  cleanUp: () => {
    set(
      produce7(() => initialState7)
    );
  }
});

// VolvoSelected/stores/zustand/stores/interestRateConfigurator.store.js
import { produce as produce8 } from "immer";
var { WRITE, READ } = ACCESS_ROLE_TYPE_ENUM;
var { INTEREST_RATE } = VOLVO_SELECTED_CONFIG_DETAIL_TYPE;
var initialState8 = {
  account: null,
  originalRows: [],
  updatedRows: [],
  latestValidFrom: null,
  validFrom: TODAY4,
  resetLoading: false,
  unauthorizedPermissions: {
    [READ]: null,
    [WRITE]: null
  }
};
var validate = (row) => {
  if (!row[INTEREST_RATE]) {
    return { ...row, [INTEREST_RATE]: "", error: true, errorMsg: "Interest Rate is required" };
  } else if (typeof row[INTEREST_RATE] !== "number" || isNaN(row[INTEREST_RATE]) || row[INTEREST_RATE] <= 0) {
    return { ...row, error: true, errorMsg: "Interest Rate must be a positive number" };
  }
  return { ...row, [INTEREST_RATE]: +row[INTEREST_RATE], error: false, errorMsg: "" };
};
var interestRateConfiguratorStore = (set, get) => ({
  ...initialState8,
  setAccount: (account) => {
    set(
      produce8(
        (state) => {
          state.account = account;
        }
      )
    );
  },
  setRows: (data) => {
    var _a;
    const rows = ((_a = data[VOLVO_SELECTED_CONFIG_TYPE.DETAIL]) == null ? void 0 : _a.map((item, idx) => ({ ...item, id: idx }))) || [];
    set(
      produce8(
        (state) => {
          state.originalRows = rows;
          state.updatedRows = rows;
          state.latestValidFrom = data[VOLVO_SELECTED_CONFIG_TYPE.VALID_FROM];
        }
      )
    );
  },
  updateRow: (newRow) => {
    const reviewedRow = validate(newRow);
    set(
      produce8(
        (state) => {
          const index = state.updatedRows.findIndex((r) => r.id === newRow.id);
          state.updatedRows[index] = reviewedRow;
        }
      )
    );
  },
  reset: () => {
    set(
      produce8(
        (state) => {
          state.resetLoading = true;
          state.updatedRows = state.originalRows;
          state.unauthorizedPermissions = initialState8.unauthorizedPermissions;
          state.validFrom = initialState8.validFrom;
        }
      )
    );
    const removeLoading = () => {
      set(
        produce8(
          (state) => {
            state.resetLoading = false;
          }
        )
      );
    };
    setTimeout(() => removeLoading(), 500);
  },
  setValidFrom: (value) => {
    set(
      produce8(
        (state) => {
          state.validFrom = value;
        }
      )
    );
  },
  setUnauthorized: (keyArg) => {
    set(
      produce8(
        (state) => {
          state.unauthorizedPermissions = {
            ...state.unauthorizedPermissions,
            ...keyArg
          };
        }
      )
    );
  },
  cleanup: () => {
    set(
      produce8(() => initialState8)
    );
  }
});

// VolvoSelected/stores/zustand/stores/global.store.js
var useAppStore2 = create3(devtools2((set, get) => ({
  ...appStore2(set, get)
}), { name: "vfs-irc-volvo-selected: app" }));
var useInterestRateConfiguratorStore = create3(devtools2((set, get) => ({
  ...interestRateConfiguratorStore(set, get)
}), { name: "vfs-irc-volvo-selected: volvoSelected" }));

// VolvoSelected/stores/zustand/selectors/app.selector.js
var selector6 = {
  auth: (state) => state.auth,
  finishedAuth: (state) => state.finishedAuth,
  authorizedRead: (state) => state.authorizedRead,
  authorizedWrite: (state) => state.authorizedWrite,
  accessRoles: (state) => state.accessRoles,
  authenticate: (state) => state.authenticate,
  setAuthorization: (state) => state.setAuthorization,
  cleanUp: (state) => state.cleanUp
};

// VolvoSelected/stores/zustand/selectors/interestRateConfigurator.selector.js
var selector7 = {
  account: (state) => state.account,
  setAccount: (state) => state.setAccount,
  cleanup: (state) => state.cleanup,
  setRows: (state) => state.setRows,
  originalRows: (state) => state.originalRows,
  updatedRows: (state) => state.updatedRows,
  latestValidFrom: (state) => state.latestValidFrom,
  updateRow: (state) => state.updateRow,
  rowsHaveChanged: (state) => {
    return state.originalRows.some((row, idx) => {
      return JSON.stringify(row) !== JSON.stringify(state.updatedRows[idx]);
    });
  },
  reset: (state) => state.reset,
  validFrom: (state) => state.validFrom,
  setValidFrom: (state) => state.setValidFrom,
  setUnauthorized: (state) => state.setUnauthorized,
  unauthorizedPermissions: (state) => state.unauthorizedPermissions,
  resetLoading: (state) => state.resetLoading
};

// VolvoSelected/hooks/useVolvoSelectedRowsWIthErrors.hook.js
import { useMemo as useMemo9 } from "react";
var useVolvoSelectedRowsWithErrors = () => {
  const updatedRows = useInterestRateConfiguratorStore(selector7.updatedRows);
  const rowsWithErrors = useMemo9(() => {
    return updatedRows.filter((row) => row.error);
  }, [updatedRows]);
  return { rowsWithErrors };
};

// VolvoSelected/components/volvoSelected/VolvoSelectedTableInstructions.jsx
import React34, { memo as memo16, useCallback as useCallback18 } from "react";
import { IconButton, Tooltip as Tooltip2, Typography as Typography6 } from "@mui/material";
import { StyledFlex as StyledFlex12 } from "vfs-data-portal-components";

// VolvoSelected/stores/reactQuery/hooks/volvoSelected.hook.js
import { useMutation as useMutation4, useQuery as useQuery5 } from "@tanstack/react-query";

// VolvoSelected/stores/reactQuery/queryKeys.js
var QUERY_KEYS2 = {
  VOLVO_SELECTED_LATEST_CONFIG: "VOLVO_SELECTED_LATEST_CONFIG"
};

// VolvoSelected/api/volvoSelected.api.js
var getLatestConfig = async () => {
  const { data } = await volvoSelectedClient.get("/configurations/VolvoSelected");
  return data;
};
var saveConfiguration = async (payload) => {
  const { data } = await volvoSelectedClient.put("/configurations/VolvoSelected", payload);
  return data;
};

// VolvoSelected/stores/reactQuery/hooks/volvoSelected.hook.js
var useVolvoSelectedGetConfig = () => {
  const setRows = useInterestRateConfiguratorStore(selector7.setRows);
  const setUnauthorized = useInterestRateConfiguratorStore(selector7.setUnauthorized);
  const { data, isLoading, isFetched, refetch } = useQuery5({
    queryKey: [QUERY_KEYS2.VOLVO_SELECTED_LATEST_CONFIG],
    queryFn: async () => {
      const data2 = await getLatestConfig();
      setRows(data2);
      return data2;
    },
    retry: (failureCount, error) => {
      var _a;
      if (((_a = error.response) == null ? void 0 : _a.status) === 403) {
        setUnauthorized({
          [ACCESS_ROLE_TYPE_ENUM.READ]: error.response.data.message
        });
        console.log(error);
        return false;
      }
      return failureCount < 3;
    }
  });
  return {
    data,
    isLoading,
    isFetched,
    refetch
  };
};
var useVolvoSelectedCreateConfig = () => {
  const setUnauthorized = useInterestRateConfiguratorStore(selector7.setUnauthorized);
  const mutation = useMutation4({
    mutationFn: (payload) => saveConfiguration(payload),
    onSuccess: () => {
      alertMessageFunction("Configuration saved successfully", "success");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS2.VOLVO_SELECTED_LATEST_CONFIG]
      });
    },
    onError: (error) => {
      var _a, _b, _c, _d;
      if (((_a = error.response) == null ? void 0 : _a.status) === 403) {
        setUnauthorized({
          [ACCESS_ROLE_TYPE_ENUM.WRITE]: error.response.data.message
        });
        return false;
      }
      const message = (_d = (_c = (_b = error.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) != null ? _d : "Configuration saved error";
      alertMessageFunction(message, "error");
    }
  });
  return { mutation };
};

// VolvoSelected/components/volvoSelected/VolvoSelectedTime.jsx
import React33, { memo as memo15 } from "react";
import { Box as Box7, Typography as Typography5 } from "@mui/material";
import { StyledFlex as StyledFlex11 } from "vfs-data-portal-components";

// VolvoSelected/utils/_generic.util.js
import { format as format2 } from "date-fns";
var getDateWithTimeFromString = (timestamp) => {
  if (timestamp) {
    const date = new Date(timestamp);
    return `${date.toDateString()}`;
  }
  return timestamp;
};
var formatDate = (date) => {
  return format2(date, "yyyy-MM-dd'T'HH:mm:ss");
};

// VolvoSelected/components/volvoSelected/VolvoSelectedTime.jsx
var VolvoSelectedTime = memo15(() => {
  const latestValidFrom = useInterestRateConfiguratorStore(selector7.latestValidFrom);
  if (!latestValidFrom) {
    return null;
  }
  return /* @__PURE__ */ React33.createElement(StyledVolvoSelectedTime, null, /* @__PURE__ */ React33.createElement(StyledFlex11, {
    gap: "1rem",
    align: "flex-end"
  }, /* @__PURE__ */ React33.createElement(Icon, {
    label: "schedule",
    size: "5rem"
  }), /* @__PURE__ */ React33.createElement(Box7, null, /* @__PURE__ */ React33.createElement(Typography5, {
    fontWeight: 600,
    color: "#000"
  }, "Latest configuration"), /* @__PURE__ */ React33.createElement(RegularText, {
    color: "#000"
  }, getDateWithTimeFromString(latestValidFrom)))));
});

// VolvoSelected/components/volvoSelected/VolvoSelectedTableInstructions.jsx
var VolvoSelectedTableInstructions = memo16(({ setIsLoading }) => {
  const { refetch } = useVolvoSelectedGetConfig();
  const handleRefetch = useCallback18(async () => {
    setIsLoading(true);
    await refetch();
    setIsLoading(false);
  }, [refetch, setIsLoading]);
  return /* @__PURE__ */ React34.createElement(StyledInstructions, null, /* @__PURE__ */ React34.createElement(VolvoSelectedTime, null), /* @__PURE__ */ React34.createElement(StyledFlex12, null, /* @__PURE__ */ React34.createElement(Typography6, null, "Double click on a row to edit"), /* @__PURE__ */ React34.createElement(Tooltip2, {
    title: "Edit in table",
    placement: "top"
  }, /* @__PURE__ */ React34.createElement(IconButton, null, /* @__PURE__ */ React34.createElement(Icon, {
    label: "edit"
  }))), /* @__PURE__ */ React34.createElement(Tooltip2, {
    title: "Refresh data",
    placement: "top"
  }, /* @__PURE__ */ React34.createElement(IconButton, {
    onClick: handleRefetch,
    color: "inherit"
  }, /* @__PURE__ */ React34.createElement(Icon, {
    label: "refresh"
  })))));
});

// VolvoSelected/components/volvoSelected/VolvoSelectedTable.jsx
var {
  COUNTRY: COUNTRY2,
  TERM: TERM2,
  INTEREST_RATE: INTEREST_RATE2
} = VOLVO_SELECTED_CONFIG_DETAIL_TYPE;
var columns = [
  { field: COUNTRY2, headerName: "Country", flex: 1 },
  {
    field: TERM2,
    headerName: "Term",
    flex: 1,
    headerAlign: "center",
    align: "center"
  },
  {
    field: INTEREST_RATE2,
    headerName: "Interest Rate",
    flex: 1,
    editable: true,
    type: "number"
  }
];
var VolvoSelectedTable = memo17(() => {
  const [isLoading, setIsLoading] = useState4(false);
  const rows = useInterestRateConfiguratorStore(selector7.updatedRows);
  const updateRow = useInterestRateConfiguratorStore(selector7.updateRow);
  const resetLoading = useInterestRateConfiguratorStore(selector7.resetLoading);
  const { rowsWithErrors } = useVolvoSelectedRowsWithErrors();
  const handleUpdate = useCallback19((row) => {
    updateRow(row);
    return row;
  }, [updateRow]);
  return /* @__PURE__ */ React35.createElement(StyledVolvoSelectedTableContainer, {
    position: "relative"
  }, /* @__PURE__ */ React35.createElement(VolvoSelectedDataGrid, {
    columns,
    rows,
    loading: resetLoading || isLoading,
    handleUpdate,
    rowsWithErrors
  }, /* @__PURE__ */ React35.createElement(VolvoSelectedTableInstructions, {
    setIsLoading
  })));
});

// VolvoSelected/components/volvoSelected/VolvoSelectedActions.jsx
import React37 from "react";
import { Label, PrimaryButton as PrimaryButton6, SecondaryButton, StyledFlex as StyledFlex13 } from "vfs-data-portal-components";

// VolvoSelected/components/volvoSelected/VolvoSelectedValidFrom.jsx
import React36 from "react";
import Box8 from "@mui/material/Box";
var VolvoSelectedValidFrom = () => {
  const rowsHaveChanged = useInterestRateConfiguratorStore(selector7.rowsHaveChanged);
  const validFrom = useInterestRateConfiguratorStore(selector7.validFrom);
  const setValidFrom = useInterestRateConfiguratorStore(selector7.setValidFrom);
  return /* @__PURE__ */ React36.createElement(Box8, null, /* @__PURE__ */ React36.createElement(BasicDatePicker, {
    width: "100%",
    label: "Valid From",
    disabled: !rowsHaveChanged,
    minDate: TODAY4,
    value: validFrom,
    onChange: setValidFrom
  }));
};

// VolvoSelected/hooks/useSubmit.hook.js
import { useCallback as useCallback20 } from "react";

// VolvoSelected/consts/volvoSelected.consts.js
var VOLVO_SELECTED_KEY = "VolvoSelected";
var VOLVO_SELECTED_CALC_CONFIG = "InterestRate";

// VolvoSelected/hooks/useSubmit.hook.js
var { CONFIGURATION_NAME: CONFIGURATION_NAME2, VALID_FROM: VALID_FROM3, DETAIL, CALCULATION_CONFIG_TYPE } = VOLVO_SELECTED_CONFIG_TYPE;
var useSubmit3 = () => {
  const updatedRows = useInterestRateConfiguratorStore(selector7.updatedRows);
  const validFrom = useInterestRateConfiguratorStore(selector7.validFrom);
  const { mutation } = useVolvoSelectedCreateConfig();
  const _submit = useCallback20(() => {
    const payload = {
      [CONFIGURATION_NAME2]: VOLVO_SELECTED_KEY,
      [CALCULATION_CONFIG_TYPE]: VOLVO_SELECTED_CALC_CONFIG,
      [VALID_FROM3]: formatDate(validFrom),
      [DETAIL]: updatedRows
    };
    mutation.mutate(payload);
  }, [updatedRows, CONFIGURATION_NAME2, VALID_FROM3, validFrom, DETAIL, mutation]);
  return {
    submit: _submit,
    isLoading: mutation.isPending
  };
};

// VolvoSelected/components/volvoSelected/VolvoSelectedActions.jsx
var VolvoSelectedActions = () => {
  const rowsHaveChanged = useInterestRateConfiguratorStore(selector7.rowsHaveChanged);
  const updatedRows = useInterestRateConfiguratorStore(selector7.updatedRows);
  const reset = useInterestRateConfiguratorStore(selector7.reset);
  const unauthorizedWrite = useInterestRateConfiguratorStore(selector7.unauthorizedPermissions)[ACCESS_ROLE_TYPE_ENUM.WRITE];
  const { rowsWithErrors } = useVolvoSelectedRowsWithErrors();
  const { submit, isLoading } = useSubmit3();
  if (!(updatedRows == null ? void 0 : updatedRows.length)) {
    return null;
  }
  return /* @__PURE__ */ React37.createElement(StyledVolvoSelectedActions, null, /* @__PURE__ */ React37.createElement(StyledGroup, null, /* @__PURE__ */ React37.createElement(Label, null, "set new configuration"), /* @__PURE__ */ React37.createElement(VolvoSelectedValidFrom, null), !!unauthorizedWrite && /* @__PURE__ */ React37.createElement(InsufficientRights, null), /* @__PURE__ */ React37.createElement(StyledFlex13, {
    gap: "2rem",
    margin: "3rem 0 0 0"
  }, /* @__PURE__ */ React37.createElement(PrimaryButton6, {
    onClick: submit,
    isLoading,
    disabled: !rowsHaveChanged || !!(rowsWithErrors == null ? void 0 : rowsWithErrors.length) || isLoading || !!unauthorizedWrite
  }, "save"), rowsHaveChanged && /* @__PURE__ */ React37.createElement(SecondaryButton, {
    disabled: isLoading,
    onClick: reset
  }, "reset"))));
};

// VolvoSelected/components/volvoSelected/VolvoSelectedDisplay.jsx
var VolvoSelectedDisplay = () => {
  const { isFetched, isLoading } = useVolvoSelectedGetConfig();
  const unauthorizedRead = useInterestRateConfiguratorStore(selector7.unauthorizedPermissions)[ACCESS_ROLE_TYPE_ENUM.READ];
  if (!!unauthorizedRead) {
    return /* @__PURE__ */ React38.createElement(InsufficientRights, null);
  }
  return /* @__PURE__ */ React38.createElement(React38.Fragment, null, isLoading && /* @__PURE__ */ React38.createElement(LoadingMessage4, {
    text: "Fetching Interest Rate",
    width: "fit-content"
  }), /* @__PURE__ */ React38.createElement(StyledVolvoSelected, null, isFetched && /* @__PURE__ */ React38.createElement(VolvoSelectedTable, null), /* @__PURE__ */ React38.createElement(VolvoSelectedActions, null)));
};

// VolvoSelected/consts/app.consts.js
var APP_VIEWS2 = [
  {
    label: "Rate Configuration",
    value: 1,
    icon: "home",
    Component: VolvoSelectedDisplay
  },
  {
    label: "Request access",
    value: 2,
    icon: "lock",
    Component: Access
  }
];

// VolvoSelected/index.jsx
var VolvoSelected = ({ state }) => {
  const authenticate = useAppStore2(selector6.authenticate);
  const finishedAuth = useAppStore2(selector6.finishedAuth);
  const accessRoles = useAppStore2(selector6.accessRoles);
  const auth = useAppStore2(selector6.auth);
  return /* @__PURE__ */ React39.createElement(InitiateApp, {
    authenticate,
    finishedAuth,
    dpState: state,
    setConfigs: _setConfigs2,
    appViews: APP_VIEWS2,
    accessRoles,
    auth,
    interfaceType: INTERFACE_TYPES.VOLVO_SELECTED
  });
};

// mainApp/components/interfaceSelection/Main.jsx
var InterfaceSelection = () => {
  const choseInterface = useMainAppStore(mainAppSelector.choseInterface);
  return /* @__PURE__ */ React40.createElement(StyledCardsGallery, null, Object.values(INTERFACES).map((interf) => /* @__PURE__ */ React40.createElement(InterfaceCard, {
    key: interf.value,
    card: interf,
    selectCard: choseInterface
  })));
};
var Main = ({ state }) => {
  const selectedInterface = useMainAppStore(mainAppSelector.selectedInterface);
  const renderView = () => {
    switch (selectedInterface == null ? void 0 : selectedInterface.value) {
      case INTERFACE_TYPES.SALES_ONLINE:
        return /* @__PURE__ */ React40.createElement(SalesOnline, {
          state
        });
      case INTERFACE_TYPES.VOLVO_SELECTED:
        return /* @__PURE__ */ React40.createElement(VolvoSelected, {
          state
        });
      default:
        return /* @__PURE__ */ React40.createElement(InterfaceSelection, null);
    }
  };
  return renderView();
};

// mainApp/components/App.jsx
var App = memo18(({ state }) => {
  useEffect2(() => {
    if (state) {
      setCommonApiInterceptors();
      localstorage_util_default2.setEnvironment(state.environment);
      setAlertMessageFunction(state.addNotification);
    }
  }, [state]);
  return /* @__PURE__ */ React41.createElement(ThemeProvider, {
    theme
  }, /* @__PURE__ */ React41.createElement(ReactQueryWrapper, null, /* @__PURE__ */ React41.createElement(StyledApp, null, /* @__PURE__ */ React41.createElement(StyledViewWrapper, null, /* @__PURE__ */ React41.createElement(Navbar, null), /* @__PURE__ */ React41.createElement(StyledDashboard, null, /* @__PURE__ */ React41.createElement(Header, null), /* @__PURE__ */ React41.createElement(StyledContentWrapper, null, /* @__PURE__ */ React41.createElement(Main, {
    state
  })))))));
});
var App_default = App;

// index.jsx
var metadata = {
  title: "vfs-interest-rate-config",
  description: "Data tool template",
  icon: "widgets"
};
export {
  App_default as default,
  metadata
};
