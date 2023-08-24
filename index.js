const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define your routes and controllers here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});