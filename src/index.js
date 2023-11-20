const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("../controllers");
const cors = require("cors");
var admin = require("firebase-admin");

var serviceAccount = require("../sermalucapp-firebase-adminsdk-s9i57-14007320d2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(cors());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public/views"));

app.use(express.json());


app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.render("index", { titulo: "titulo" });
});

// server running ------------------------------------
app.set("port", process.env.PORT || 9000);
app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en el puerto", app.get("port"));
});
