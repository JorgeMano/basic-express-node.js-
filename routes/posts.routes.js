const express = require('express');

const {
    getAllPosts,
    getPostById,
    savePosts,
    updatePostPut,
    updatePostPatch,
    deletePost
} = require('../controllers/posts.controller')

const posts = [
    { id: 1, title: 'Post 1', content: 'Some content 1', author: 'Jorge' },
    { id: 2, title: 'Post 2', content: 'Some content 2', author: 'Luis' },
    { id: 3, title: 'Post 3', content: 'Some content 3', author: 'Pamela' },
];

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) {
            newObj[el] = obj[el];
        }
    });
    return newObj;
};

const router = express.Router();

router.get('/', getAllPosts);

router.get('/:id', getPostById);

// POST para post
router.post('/', savePosts);

// PUT para posts
router.put('/:id', updatePostPut);

// PATCH para posts:id
router.patch('/:id', updatePostPatch);

// DELETE post:id
router.delete('/:id', deletePost);

module.exports = { postsRouter: router };