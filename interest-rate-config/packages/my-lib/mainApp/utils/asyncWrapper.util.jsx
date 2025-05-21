export let alertMessageFunction;

export const setAlertMessageFunction = (func) => alertMessageFunction = func;

export const asyncWrapper = async (promise, successMessage) => {
  try {
    const { data } = await promise;
    if (successMessage && alertMessageFunction) {
      alertMessageFunction(successMessage, 'success');
    }
    return [data, null];
  } catch (e) {
    console.log(e?.response?.data?.message);
    const message = e.message ?? 'Something went wrong';
    alertMessageFunction(message, 'error');
    return [null, e];
  }
};