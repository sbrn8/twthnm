const express = require ('express');
const cors = require('cors');

const app = express();

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
    // if (isValidPost(req.body)){
    //     const post = {
    //         name: req.body.name.toString(),
    //         content:  req.body.content.toString()
    //     };
    //     console.log(post);
    // }else {
    //     res.status(422);
    //     res.json({
    //         message: 'Name and content are required!'
    //     });
    // }

    console.log(req.body);

});

app.listen(5000, () => {
    console.log('Listening on https://localhost:5000');
});