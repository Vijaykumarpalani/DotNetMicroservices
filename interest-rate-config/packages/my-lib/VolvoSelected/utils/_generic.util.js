import { format } from 'date-fns';

export const getDateWithTimeFromString = (timestamp) => {
  if (timestamp) {
    const date = new Date(timestamp);
    return `${date.toDateString()}`;
  }
  return timestamp;
};

export const formatDate = (date) => {
  return format(date, 'yyyy-MM-dd\'T\'HH:mm:ss');
};
