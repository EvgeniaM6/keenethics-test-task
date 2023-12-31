import Message from 'antd-message';

export const showError = (error: unknown) => {
  let errMsg = 'Opps! Something went wrong! Try again';
  if ('message' in (error as Error)) {
    errMsg = (error as Error).message;
  } else if ('error' in (error as Error)) {
    errMsg = (error as { error: string }).error;
  }

  Message.error(errMsg, 10000);
};
