const express = require('express');
const PORT = 3000;

const app = express();
const itemsRouter = require('./routes/items');
const { status } = require('express/lib/response');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/items', itemsRouter);

app.get('/', async (req, res) => {
    res.json({ status: 200 });
});

app.listen(PORT, () => {
    {
        console.log(`Server is running on port ${PORT}`);
    }
});