const express = require('express');
const cors = require('cors');
const { PORT } = require('./src/config');
const { TaskRoutes } = require('./src/routes');
const { NotFoundMiddleware, ErrorMiddleware } = require('./src/middleware');
const ConectDatabase = require('./src/database');

const app = express();

app.use(cors()).use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', TaskRoutes);
app.use(NotFoundMiddleware).use(ErrorMiddleware);

(async () => {
  try {
    await ConectDatabase;
    console.log('Successful database connection');
    await app.listen(PORT);
    console.log(`Server run on Port:  ${PORT}`);
  } catch (error) {
    console.log(error);
  }
})();
