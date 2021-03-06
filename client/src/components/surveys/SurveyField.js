// SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '3px' }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {meta.touched && meta.error}
      </div>
    </div>
  )
}
