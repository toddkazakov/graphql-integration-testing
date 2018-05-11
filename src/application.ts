import * as bodyParser from "body-parser";
import * as express from "express";
import { Express } from "express";
import { graphqlRouter } from "./graphqlRouter";

export class Application {
  public readonly express: Express;

  constructor() {
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(graphqlRouter);
  }
}
