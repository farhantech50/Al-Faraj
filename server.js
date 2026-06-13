import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./config/swagger-output.json" with { type: "json" };

const app = express();
const PORT = process.env.PORT;

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    persistAuthorization: true,
    swaggerOptions: {
      responseInterceptor: (response) => {
        if (
          response.url.includes("/api/auth/login") &&
          response.body
            .FzZVVybCIswfnBvc3RncmVzO68vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbX
        ) {
          const token =
            response.body
              .FzZVVybCIswfnBvc3RncmVzO68vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbX;
          const swagger = window.ui;
          swagger.preauthorizeApiKey("bearerAuth", `${token}`);
        }
        return response;
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(routes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
