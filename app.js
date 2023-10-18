import express from 'express'
import {HttpError} from "http-errors";
import router from './routes/index'
import http from 'http'

const app = express();
app.use(express.urlencoded());
app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {
    res.status(+err.code || 500)

    res.json({

        status: 'error',
        message: err.message,
        errors: err.errors,
        stack: err.stack
    })
})

const server = http.createServer(app);




server.listen(4000, () => {
    console.log('Server start...')
})


