const express = require ('express');
const cors = require('cors');
const monk = require('monk');

const app = express();
const db = monk('localhost/hnmtwt');
const posts = db.get('posts');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'post 0.4'
    });
});

function isValidPost(post) {
    return post.name && post.name.toString().trim() !== '' &&
        post.content && post.content.toString().trim() !== '';
}

app.post('/posts',(req, res) => {
    if (isValidPost(req.body)){
        const post = {
            name: req.body.name.toString(),
            content: req.body.content.toString(),
            created: new Date()
        };
        posts
            .insert(post)
            .then(createdPost => {
                res.json(createdPost);
            });
    }else {
        res.status(422);
        res.json({
            message: 'Name and content are required!'
        });
    }

});

app.listen(5000, () => {
    console.log('Listening on https://localhost:5000');
});