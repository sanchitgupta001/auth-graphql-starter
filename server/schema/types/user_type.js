/**
 * Created by sanchitgupta001 on 15/12/2019
 */
const graphql = require('graphql');
const { GraphQLID, GraphQLString, GraphQLObjectType } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString },
    id: { type: GraphQLID }
  }
});

module.exports = UserType;
