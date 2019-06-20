module.exports = {
    read: async (req, res) => {
        try {
            let db = req.app.get('db')
            let posts = await db.getPosts()
            res.send(posts)
        } catch (error) {
            console.log('error fetching posts', error)
            res.status(500).send(error)
        }
    },
    getPost: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { id } = req.params
            let posts = await db.getPost(id)
            let post = posts[0]
            res.send(post)
        } catch (error) {
            console.log('error fetching post', error)
            res.status(500).send(error)
        }
    },
    create: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { title, content } = req.body
            // check to see if there is a user
            if (!req.session.user) {
                return res.status(401).send('user not authenticated')
            }

            let { id: user_id } = req.session.user

            let newPost = { user_id, title, content }
            let posts = await db.createPost(newPost)
            res.send(posts)

        } catch (error) {
            console.log('error creating posts', error)
            res.status(500).send(error)
        }
    }

}