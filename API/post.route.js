const express = require('express');
const postRoutes = express.Router();

// REquire Post model in our routes module
let Post = require('./post.model')

//Define store route
postRoutes.route('/add').post(function(req, res) {
    let post = new Post(req.body);
    post.save()
    .then(() => {
        res.status(200).json({'business': 'business in added sucessfully'});
    })
    .catch(() => {
        res.status(400).send("unable to save to database");
    });
});

//Defined get data(index or listing) route
postRoutes.route('/').get(function(req, res){
    Post.find(function(err, posts){
        if(err){
            res.json(err);
        }
        else {
            res.json(posts);
        }
    });
});

//Defined edit route
postRoutes.route('./update/:id').post(function (req, res) {
    Post.findById(req.params.id, function(err, post){
        if(!post)
        res.status(404).send("data is not found");
        else {
            post.title = req.body.title;
            post.body = req.body.body;
            post.save().then(() => {
                res.json('Update Complete');
            })
            .catch(() => {
                res.status(400).send("Unable to update the database");
            });
        }
    });
});

//defined delete
postRoutes.route('/delete/:id').delete(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}), function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    };
});

module.exports = postRoutes;