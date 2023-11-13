const express = require('express');
const app = express();

app.use(express.static('public'));  // Serve static files from the "public" directory

const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home'); // This will render views/index.ejs
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
