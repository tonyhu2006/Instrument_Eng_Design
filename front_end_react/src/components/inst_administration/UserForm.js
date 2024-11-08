  // components/user_management/UserForm.js
  import React from 'react';
  import { Formik, Form, Field, ErrorMessage } from 'formik';
  import * as Yup from 'yup';

  const UserSchema = Yup.object().shape({
    username: Yup.string().required('Compulsory'),
    email: Yup.string().email('invalid Email Address').required('Compulsory'),
    // 其他验证规则...
  });

  const UserForm = ({ initialValues, onSubmit }) => (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">User Name</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="email">Emial</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          {/* 其他字段 */}
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );

  export default UserForm;