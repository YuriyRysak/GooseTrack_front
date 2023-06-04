import { validateLoginForm, validateRegisterForm } from './authFieldValidation';
import { patterns } from './patterns';
import {
  notification,
  NotificationProvider,
  useNotification,
} from './notification';
import { getMonthDetails, monthNamesArray } from './getMonthDetails';
import { getDateDetails, dayNamesArray, getWeekNumber } from './getDateDetails';
import { validateDate } from './validateDate';
import { getWeekDetails } from './getWeekDetails';
export {
  validateLoginForm,
  validateRegisterForm,
  patterns,
  notification,
  useNotification,
  NotificationProvider,
  getMonthDetails,
  monthNamesArray,
  getDateDetails,
  getWeekNumber,
  dayNamesArray,
  getWeekDetails,
  validateDate,
};
