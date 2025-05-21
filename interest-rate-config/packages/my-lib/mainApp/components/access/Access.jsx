import React, { memo, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { PrimaryButton } from 'vfs-data-portal-components';
import { StyledAccess, StyledAccessRow } from './style';
import { StyledLabel, StyledValue } from '../_common/style';
import { asyncWrapper } from '../../utils/asyncWrapper.util';
import emailUtil from '../../utils/email.util';
import { sendEmail } from '../../api/_common.api';
import { ACCESS_ROLES } from '../../consts/access.consts';


export const Access = memo(({ auth, accessRoles, interfaceType }) => {
  const { READ, WRITE } = ACCESS_ROLES[interfaceType];
  const userHasRead = accessRoles.includes(READ);
  const userHasWrite = accessRoles.includes(WRITE);
  const [loading, setLoading] = useState({
    [READ]: false,
    [WRITE]: false
  });
  
  const requestAccess = useCallback(async (accessType) => {
    setLoading(prevState => ({
      ...prevState,
      [accessType]: true
    }));
    await asyncWrapper(sendEmail(emailUtil.buildEmailPayload({
      accessType,
      user: auth?.username,
      interfaceType
    })), 'access request sent');
    
    setLoading(prevState => ({
      ...prevState,
      [accessType]: false
    }));
  }, []);
  
  return (
    <StyledAccess>
      <StyledAccessRow>
        <StyledLabel>
          role
        </StyledLabel>
        <StyledLabel>
          granted
        </StyledLabel>
        <StyledLabel>
          action
        </StyledLabel>
      </StyledAccessRow>
      <StyledAccessRow>
        <StyledValue>
          {READ}
        </StyledValue>
        <StyledValue>
          <i
            style={{ fontSize: '2.4rem' }}
            className="material-icons-outlined">
            {userHasRead ? 'check' : 'close'}
          </i>
        </StyledValue>
        <Box>
          <PrimaryButton
            disabled={userHasRead || loading[READ]}
            isLoading={loading[READ]}
            onClick={() => requestAccess(READ)}
          >
            request
          </PrimaryButton>
        </Box>
      </StyledAccessRow>
      <StyledAccessRow>
        <StyledValue>
          {WRITE}
        </StyledValue>
        <StyledValue>
          <i
            style={{ fontSize: '2.4rem' }}
            className="material-icons-outlined"
          >{userHasWrite ? 'check' : 'close'}</i>
        </StyledValue>
        <Box>
          <PrimaryButton
            disabled={userHasWrite || loading[WRITE]}
            isLoading={loading[WRITE]}
            onClick={() => requestAccess(WRITE)}
          >
            request
          </PrimaryButton>
        </Box>
      </StyledAccessRow>
    </StyledAccess>
  );
});