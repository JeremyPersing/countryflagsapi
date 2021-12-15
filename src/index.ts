import cors from "cors";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import path from "path";
import notFound from "./middleware/notFound";
import pages from "./routes/pages";
import flags from "./routes/flags";
import favicon from "serve-favicon";
import { createAllCountriesFile } from "./services/countries";

const app = express();
function main() {
  try {
    app.use(cors());
    app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "script-src": ["'self'", "cdn.jsdelivr.net"],
            "script-src-attr": ["'unsafe-inline'"],
          },
        },
      })
    );
    app.use(compression());
    app.use(express.json());

    app.use(favicon(path.join(__dirname, "../public/images/favicon.ico")));
    app.use(express.static(path.join(__dirname, "../public")));
    app.use("/", flags);
    app.use("/", pages);
    app.use("*", notFound);

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`listening port ${port}`));
  } catch (error) {
    console.log("error", error);
    app.use("/", pages);
  }
}

main();
