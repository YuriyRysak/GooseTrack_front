import * as yup from 'yup';
import { patterns } from './patterns';

export const validateDate = date => {
  const schema = yup
    .string()
    .matches(
      patterns.datePattern,
      'Incorrect date format! Please use the format yyyy-dd-mm.'
    );

  try {
    schema.validateSync(date);
    return true;
  } catch (error) {
    console.log(
      'Incorrect date format! Please use the format yyyy-dd-mm in validateDate.'
    );
    return false;
  }
};
