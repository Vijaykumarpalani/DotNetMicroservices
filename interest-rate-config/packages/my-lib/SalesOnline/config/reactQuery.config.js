import { QueryCache, QueryClient } from '@tanstack/react-query';
import { alertMessageFunction } from '../../mainApp/utils/asyncWrapper.util';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      const message = error.message ?? 'Something went wrong';
      console.log(error);
      alertMessageFunction(message, 'error');
    },
  })
});
