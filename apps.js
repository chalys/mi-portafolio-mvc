const express = require("express");
const app = express();
const port = 3030;
const path = require('path');

/* Rutas */
const otherRoutes = require("./routes/main.routes");
const aboutRoutes = require("./routes/about.routes");

/* Middleware */
app.use(express.static("public"));

/* Settings*/
app.set("view engine","ejs");
app.set("views", "./views");

/* Enrutadores */
app.use("/", otherRoutes);
app.use("/about", aboutRoutes);

/* Configuramos servidor */
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
