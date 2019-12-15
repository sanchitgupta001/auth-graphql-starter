/**
 * Created by sanchitgupta001 on 15/12/2019
 */
const graphql = require('graphql');
const { GraphQLString, GraphQLObjectType } = graphql;
const AuthService = require('../services/auth');

const UserType = require('./types/user_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        // req: request obj coming from express server
        return AuthService.signup({ email, password, req });
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();

        return user;
      }
    }
  }
});

module.exports = mutation;
