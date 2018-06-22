// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

// onCancel passed as prop from SurveyNew
// formValues from connect function Redux
// formFields from our array object from formFields.js (we map over it to obtain each field's name/label property)
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });


  return (
    <div>
      <h5>Please Confirm your Entries</h5>
      {reviewFields}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}
        >
          Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat white-text right"
        >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default withRouter(connect(mapStateToProps, actions)(SurveyFormReview));
