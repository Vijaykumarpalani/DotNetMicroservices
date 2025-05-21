import { format, parseISO } from 'date-fns';

export const formatDateTimeForDisplay = (date) => {
  if (!date) {
    return date;
  }
  return format(date, 'dd MMM yyyy k:mm');
};

export const formatDateForPicker = (date) => {
  if (!date) {
    return date;
  }
  return parseISO(date);
};

export const formatDateForDb = (date) => {
  return format(date, 'yyyy-MM-dd\'T\'HH:mm:ss');
};
