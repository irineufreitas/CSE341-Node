const express = require('express');
const app = express();
const port = 3000;

app.use('/', require('./routes/routes'));

app.use('/wife', require('./routes/routes'));

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});
