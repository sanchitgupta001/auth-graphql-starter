/**
 * Created by sanchitgupta001 on 15/12/2019
 */
import gql from 'graphql-tag';

export default gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      email
      id
    }
  }
`;
