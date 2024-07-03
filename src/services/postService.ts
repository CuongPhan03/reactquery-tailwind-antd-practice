import { Post } from '../types/post'
import axios from '../utils/axios'

const getPostsByPage = (page: number, limit: number) => 
    axios.get<Post[]>('/posts', {
        params: { _page: page, _limit: limit }
    })

const getAllPosts = () => 
    axios.get<Post[]>('/posts')

const getPostsById = (postId: number) =>
    axios.get<Post>(`/posts/${postId}`)

const deletePost = (postId: number) =>
    axios.delete<{}>(`/posts/${postId}`)

export { getPostsByPage, getAllPosts, getPostsById, deletePost }