/**
 * Created by sanchitgupta001 on 16/12/2019
 */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

// queries
import query from '../queries/currentUser';

export default function(WrappedComponent) {
  class RequireAuth extends Component {
    componentDidUpdate() {
      const { loading, user } = this.props.data;

      if (!loading && !user) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(query)(RequireAuth);
}
