import { generate } from "openapi-typescript-codegen";

console.log("🚀 Generating API client...");

await generate({
  input: "http://localhost:8000/openapi.json",
  output: "./api-client",
  httpClient: "fetch",
  useOptions: true,
  clientName: "trpgApi",
});

console.log("✅ API client generation complete!");
