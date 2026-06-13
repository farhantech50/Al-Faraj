import swaggerAutogen from "swagger-autogen";

const doc = {
  openapi: "3.0.0",
  info: {
    title: "Tuition Media API",
    description: "API documentation for Tuition Media",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Localhost",
    },
    {
      url: `http://192.168.68.120:5000`,
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [{ bearerAuth: [] }],
};

const outputFile = "./config/swagger-output.json";
const routes = ["./server.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
