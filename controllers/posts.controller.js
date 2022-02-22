const posts = [
    { id: 1, title: 'Post 1', content: 'Some content 1', author: 'Jorge' },
    { id: 2, title: 'Post 2', content: 'Some content 2', author: 'Luis' },
    { id: 3, title: 'Post 3', content: 'Some content 3', author: 'Pamela' },
];



//Get all posts
exports.getAllPosts = (req, res) => {
        res.status(200).json({
            status: 'success',
            data: {
                posts
            }
        })
    }
    //Get posts by id
exports.getPostById = (req, res) => {
        const { id } = req.params;
        const post = post.find(post => post.id === +id);

        if (!post) {
            res.status(404).json({
                status: 'error',
                message: 'No post found with the given ID',
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        })
    }
    //Saveposts to database
exports.savePosts = (req, res) => {
        const { title, content } = req.body;
        const newPost = {
            id: Math.floor(Math.random() * 100),
            title,
            content,
        };

        post.push(newPost);
        res.status(200).json({
            status: 'success',
            data: { newPost },
        })
    }
    //Update post (put)
exports.updatePostPut = (req, res) => {
        const { id } = req.params;
        const { title, content, author } = req.body;

        if (!title ||
            !content ||
            !author ||
            title.length === 0 ||
            content.length === 0 ||
            author.length === 0
        ) {
            res.status(400).json({
                status: 'error',
                message: 'Must provide a title, content and the author for this reuqest',
            });
            return;
        }

        const postIndex = posts.findIndex(post => post.id === +id);

        if (postIndex === -1) {
            res.status(404).json({
                status: 'error',
                message: 'Cant update post, invalid ID',
            });
            return;
        }

        const updatePost = posts[postIndex];

        updatePost.title = title;
        updatePost.content = content;
        updatePost.author = author;
        posts[postIndex] = updatePost;
        res.status(204).json({ status: 'success' }); // 204 - No content
    }
    //Update post (patch)
exports.updatePostPatch = (req, res) => {
        const { id } = req.params;

        const data = filterObj(req.body, 'title', 'content', 'author');
        const postIndex = posts.findIndex(post => post.id === +id);

        if (postIndex === -1) {
            res.status(404).json({
                status: 'error',
                message: 'Cant update post, invalid ID',
            });
            return;
        }

        let updatedPost = posts[postIndex];
        updatedPost = {...updatedPost, ...data };
        posts[postIndex] = updatedPost;
        res.status(204).json({ status: 'success' });
    }
    //Delete posts
exports.deletePost = (req, res) => {
    const { id } = req.params;
    const postIndex = posts.findIndex(post => post.id === +id);
    if (postIndex === -1) {
        res.status(404).json({
            status: 'error',
            message: 'Cant delete post, invalid ID',
        });
        return;
    }
    posts.splice(postIndex, 1);
    res.status(204).json({
        status: 'success',
    })
}