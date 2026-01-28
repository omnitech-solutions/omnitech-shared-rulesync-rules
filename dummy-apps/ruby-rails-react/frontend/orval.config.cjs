module.exports = {
  taxApi: {
    input: {
      target: "http://localhost:3000/api-docs/v1/swagger.yaml"
    },
    output: {
      target: "src/api/generated.ts",
      client: "react-query",
      mode: "single",
      clean: true,
      prettier: true
    }
  }
};
