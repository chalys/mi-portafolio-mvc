const express = require("express");
const app = express();
const port = 3030;
const path = require('path');

/* Rutas */
const otherRoutes = require("./routers/main.routes");
const aboutRoutes = require("./routers/about.routes");

/*Middleware*/
app.use(express.static("public"));

/* Settings */
app.set('view engine', 'ejs');
app.set('view',path.join(__dirname,'./views'));

/* Enrutadores */
app.use("/", otherRoutes);
app.use("/about", aboutRoutes);

/* Configuramos servidor */
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
