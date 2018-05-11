import { graphqlExpress } from "apollo-server-express";
import { Router } from "express";
import { Schema } from "./schemas/index";

const graphqlRouter = Router();
const handler = graphqlExpress({
  schema: Schema.make(),
});

graphqlRouter.get("/graphql", handler);
graphqlRouter.post("/graphql", handler);

export {
  graphqlRouter,
};
