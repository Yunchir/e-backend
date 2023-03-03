import Router from "./routes/emplyees.js";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const port = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("listening on port", port);
});

app.use(Router);
