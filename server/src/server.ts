import express from 'express'

const app = express();

app.get('/ads', (request, response) => {
    return response.json([
        {NLW: 'esports'}
    ])
});

app.listen(3333);