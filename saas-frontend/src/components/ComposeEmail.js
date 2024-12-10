import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import axios from '../services/api';

const ComposeEmail = () => {
  const formik = useFormik({
    initialValues: { recipient: '', subject: '', body: '' },
    validationSchema: yup.object({
      recipient: yup.string().email('Invalid email').required('Required'),
      subject: yup.string().required('Required'),
      body: yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post('/emails/send', values, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        alert('Email sent successfully!');
        formik.resetForm();
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    },
  });

  return (
    <div className="compose-container">
      <h2>Compose Email</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Recipient</label>
          <input
            type="email"
            name="recipient"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.recipient}
          />
          {formik.errors.recipient ? <div className="text-danger">{formik.errors.recipient}</div> : null}
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.subject}
          />
          {formik.errors.subject ? <div className="text-danger">{formik.errors.subject}</div> : null}
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea
            name="body"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.body}
          />
          {formik.errors.body ? <div className="text-danger">{formik.errors.body}</div> : null}
        </div>
        <button type="submit" className="btn btn-success">Send Email</button>
      </form>
    </div>
  );
};

export default ComposeEmail;
