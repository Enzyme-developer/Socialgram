const Post = require('../models/postModel')
const UnauthenticatedError = require('../errors/Unauthorized')
const BadRequestError = require('../errors/Badrequest')


const createPost = async (req: { body: any }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any } } }) => {
    const post = await Post.create(req.body)
    res.status(200).json('post created')
}



const getAllPosts = async (req: { params: { id: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) => {
    const allPosts = await Post.find({})
    res.status(200).json(allPosts)
}



const getSinglePost = async (req: { params: { id: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) => {
    const id : string = req.params.id
    if (id) {
        const singlePost = await Post.findById(id)
        res.status(200).json(singlePost)
    } else {
        res.status(404).json('post not found')
    }
}



const updatePost = async (req: { params: { id: string; }; body: { userId: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) => {
    const id: string = req.params.id
    const { userId } = req.body
    
    const post = await Post.findById(id)
    if (post.userId == userId) {
        await post.updateOne({ $set : req.body })
        res.status(200).json('update successeful')
    } else {
        throw new UnauthenticatedError('Unauthorized access')
    }
}



const deletePost = async (req: { params: { id: string; }; body: { userId: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) => {
    const id: string = req.params.id
    const { userId } = req.body
    
    const post = await Post.findById(id)
    if (post) {
        if (post.userId == userId) {
            await post.deleteOne()
            res.status(200).json('delete successeful')
        } else {
            throw new UnauthenticatedError('Unauthorized access')
        }
    } else {
        throw new BadRequestError ('No post matches')
    }
}


//like/dislike a post 
const likePost = async (req: { params: { id: string; }; body: { userId: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) => {
    const id = req.params.id
    const { userId } = req.body
    
    const post = await Post.findById(id)
    if (!post.likes.includes(userId)) {
        await post.updateOne({ $push: { likes: userId } })
        res.status(200).json('post liked')
    } else {
        await post.updateOne({ $pull: { likes: userId } })
        res.status(200).json('post unliked')
    }
}


export {} 
module.exports = { createPost, getSinglePost, getAllPosts, deletePost, updatePost, likePost }