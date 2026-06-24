import swaggerAutogen from "swagger-autogen";

const doc = {
  openapi: "3.0.0",
  info: {
    title: "Tuition Media API",
    description: "API documentation for Tuition Media",
  },
  servers: [
    {
      url: "https://localhost:8001",
      description: "Localhost",
    },
    {
      url: `https://192.168.68.120:8001`,
      description: "Farhan - PC",
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
