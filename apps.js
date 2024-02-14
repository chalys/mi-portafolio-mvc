const express = require("express");
const app = express();
const port = 3030;

/* Rutas */
const otherRoutes = require("./routers/main.routes");
const aboutRoutes = require("./routers/about.routes");

/* Settings */
app.use(express.static("public"));

/* Enrutadores */
app.use("/", otherRoutes);
app.use("/about", aboutRoutes);

/* Configuramos servidor */
app.listen(port, () => {
  console.log("Servidor funcionanado");
});
