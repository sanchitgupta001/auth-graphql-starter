/**
 * Created by sanchitgupta001 on 15/12/2019
 */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// queries/mutations
import query from '../queries/currentUser';
import mutation from '../mutations/signup';
import { hashHistory } from 'react-router';

// components
import AuthForm from './AuthForm';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.data.user && this.props.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }]
      })
      .then(() => {})
      .catch(err => {
        this.setState({
          errors: err.graphQLErrors.map(error => error.message)
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(SignupForm));
