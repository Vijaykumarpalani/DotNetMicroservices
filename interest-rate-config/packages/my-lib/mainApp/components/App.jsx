import React, { memo, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { StyledApp, theme } from 'vfs-data-portal-components';
import { ReactQueryWrapper } from '../provider/reactQuery.provider';
import { StyledContentWrapper, StyledDashboard, StyledViewWrapper } from './_common/style';
import { Navbar } from './navbar/Navbar';
import { Header } from './header/Header';
import { Main } from './interfaceSelection/Main';
import LocalStorageUtil from '../utils/localstorage.util';
import { setCommonApiInterceptors } from '../config/axios.config';
import { setAlertMessageFunction } from '../utils/asyncWrapper.util';


const App = memo(({ state }) => {
  useEffect(() => {
    if (state) {
      setCommonApiInterceptors();
      LocalStorageUtil.setEnvironment(state.environment);
      setAlertMessageFunction(state.addNotification);
    }
  }, [state]);
  
  return (
    <ThemeProvider theme={theme}>
      <ReactQueryWrapper>
        <StyledApp>
          <StyledViewWrapper>
            <Navbar/>
            <StyledDashboard>
              <Header/>
              <StyledContentWrapper>
                <Main state={state}/>
              </StyledContentWrapper>
            </StyledDashboard>
          </StyledViewWrapper>
        </StyledApp>
      </ReactQueryWrapper>
    </ThemeProvider>
  );
});

export default App;
