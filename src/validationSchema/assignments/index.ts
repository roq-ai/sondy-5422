import * as yup from 'yup';

export const assignmentValidationSchema = yup.object().shape({
  status: yup.string().required(),
  survey_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
