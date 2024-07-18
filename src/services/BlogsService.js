import { AppState } from "../AppState.js"
import { Blogs } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
    async getProfileProjectsById(profileId) {
        AppState.profileBlogs = []
        const response = await api.get(`api/blogs/?creatorId=${profileId}`)
        logger.log(response.data)
        const blogs = response.data.map(Pojo => new Blogs(Pojo))
        AppState.profileBlogs = blogs
    }
    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log('got the blogs', res.data)
        const blogs = res.data.map(blogPojo => new Blogs(blogPojo))
        AppState.blogs = blogs
        logger.log('appstate', AppState.blogs)
    }
}
export const blogsService = new BlogsService()