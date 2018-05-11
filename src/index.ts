import { Application } from "./application";

const app = new Application();
const express = app.express;
const port = process.env.PORT || 3000;

express.listen(port, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Server is listening on port ${port}`);
});
