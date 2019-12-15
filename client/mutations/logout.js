/**
 * Created by sanchitgupta001 on 15/12/2019
 */
import gql from 'graphql-tag';

export default gql`
  mutation {
    logout {
      email
      id
    }
  }
`;
