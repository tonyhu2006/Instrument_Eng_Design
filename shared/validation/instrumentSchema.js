// shared/validation/instrumentSchema.js
import * as Yup from 'yup';

export const instrumentSchema = Yup.object().shape({
  tag: Yup.string().required('Tag is required'),
  type: Yup.string().required('Type is required'),
  // ... other fields
});