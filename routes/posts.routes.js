const express = require('express');

//const { filterObj } = require('../util/filterObj');

const {
    getAllPosts,
    getPostById,
    savePosts,
    updatePostPut,
    updatePostPatch,
    deletePost
} = require('../controllers/posts.controller')

const router = express.Router();

router.get('/', getAllPosts);

router.get('/:id', getPostById);

router.post('/', savePosts);

router.put('/:id', updatePostPut);

router.patch('/:id', updatePostPatch);

router.delete('/:id', deletePost);

module.exports = { postsRouter: router };