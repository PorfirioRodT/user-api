import express from 'express';
import bodyParser from 'body-parser';
import "dotenv/config.js";
import usersRoute from './routes/users.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World'));

app.use('/users', usersRoute)

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});