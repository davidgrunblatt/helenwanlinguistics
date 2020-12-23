
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyP = require('body-parser');

// middleware
app.use(bodyP.urlencoded());
app.use(bodyP.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

