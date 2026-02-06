const express = require('express');
const app = express();
const port = 3000;

app.get('/get-cookie', (req, res) => {
    const cookie = req.cookies['.ROBLOSECURITY'];
    if (cookie) {
        res.send(`Roblox Security Cookie: ${cookie}`);
    } else {
        res.send('Roblox Security Cookie not found.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
