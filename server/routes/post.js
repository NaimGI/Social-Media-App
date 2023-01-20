import  express  from "express";
import {getPosts,createPost,updatePost,deletePost,getPost,likePost,getPostsBySearch,commentPost} from "../controller/post.js";
const router =express.Router(); 
import auth from "../middlewre/auth.js"

router.get("/",getPosts);
router.get('/search', getPostsBySearch);
router.get('/:id', getPost);
router.post("/",auth,createPost);
router.patch("/:id",auth,updatePost);
router.delete("/:id",auth,deletePost);
router.patch("/:id/likePost",auth,likePost);
router.post('/:id/commentPost', commentPost);

export default router;