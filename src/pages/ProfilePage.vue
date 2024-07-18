<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { profileServices } from '../services/profileServices.js';
import { AppState } from '../AppState.js';
import BlogCard from '../components/BlogCard.vue';
import { Blogs } from '../models/Blog.js';
import { blogsService } from '../services/BlogsService.js';

const profile = computed(() => AppState.profile)

const blogs = computed(() => AppState.profileBlogs)

const profileCoverImg = computed(() =>
    `url(${profile.value?.coverImg})`
)
const route = useRoute()

onMounted(() => {
    const profileId = route.params.profileId
    getProfileById(profileId)
    getProfileProjectsById(profileId)
})

async function getProfileById(profileId) {
    try {
        await profileServices.getProfileById(profileId)
    }
    catch (error) {
        Pop.error(error);
    }
}
async function getProfileProjectsById(profileId) {
    try {
        await blogsService.getProfileProjectsById(profileId)
    }
    catch (error) {
        Pop.error(error);
    }
}
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-5 d-flex align-items-center">
                <img class="pfp" :src="profile?.picture" :alt="profile?.name">
                <div class="mx-3">
                    <span>
                        <h1> {{ profile?.name }}</h1>
                    </span>
                </div>
            </div>
            <div class=" col-2 mb-5">
                <i class="mdi mdi-plus fs-1 bg-warning text-dark m-3"></i>
            </div>
            <div v-for="blog in blogs" :key="blog.id" class="col-12">
                <BlogCard :blogProp="blog" />

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.pfp {
    height: 15dvh;
    aspect-ratio: 1/1;
    border-radius: 50%;
}
</style>