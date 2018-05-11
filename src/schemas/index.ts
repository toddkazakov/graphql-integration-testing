import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { resolver } from "../resolvers/index";
import { root } from "./query";

export class Schema {
  public static make(): GraphQLSchema {
    return makeExecutableSchema({
      resolvers: [ resolver ],
      typeDefs: root,
    });
  }
}
