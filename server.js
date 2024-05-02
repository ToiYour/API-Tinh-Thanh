import cors from "cors";
import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
// Middleware để chỉ cho phép yêu cầu GET
const allowOnlyGetRequests = (req, res, next) => {
  if (req.method !== "GET") {
    return res.status(403).send("Only GET requests are allowed.");
  }
  next();
};
server.use(cors());
server.use(jsonServer.bodyParser());
server.use(middlewares);
server.use(allowOnlyGetRequests);
server.use(router);
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
