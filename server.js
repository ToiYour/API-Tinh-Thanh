import cors from "cors";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import jsonServer from "json-server";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = jsonServer.create();
const dbPath = path.join(__dirname, "db.json");
const db = JSON.parse(fs.readFileSync(dbPath));
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
// Middleware để chỉ cho phép yêu cầu GET
const allowOnlyGetRequests = (req, res, next) => {
  if (req.method !== "GET") {
    return res.status(403).send("Only GET requests are allowed.");
  }
  next();
};
server.use(cors(
  {
  origin: true,
  credentials: true,
}
));
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(allowOnlyGetRequests);
server.use(router);
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
