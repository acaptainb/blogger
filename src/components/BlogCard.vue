<script setup>
import { RouterLink } from 'vue-router';
import { Blogs } from '../models/Blog.js';

defineProps({
    blogProp: { type: Blogs, required: true }
})
</script>


<template>
    <div class="row mb-3 shadow border ">
        <div class="col-8">
            <div class="d-flex justify-content-start align-items-center">
                <RouterLink :to="{ name: 'Profile', params: { profileId: blogProp.creatorId } }"
                    :title="`Go to ${blogProp.creator.name}'s page.`">
                    <img class="pfp selectable" :src="blogProp.creator.picture" :alt="blogProp.creator.name">
                </RouterLink>

                <div class="mx-4">
                    <span>
                        <h2>
                            {{ blogProp.creator.name }}
                        </h2>
                    </span>
                </div>
            </div>
            <h2>{{ blogProp.title }}</h2>
            <p>{{ blogProp.body }}</p>
            <p>{{ blogProp.createdAt.toLocaleDateString() }}</p>
        </div>
        <div class="col-4 px-0">
            <img class="img-fluid w-100 img-fix px-0" :src="blogProp.imgUrl" :alt="blogProp.title">
        </div>
    </div>
</template>


<style lang="scss" scoped>
.img-fix {
    width: 100%;
    object-fit: cover;
    height: 35dvh;
    object-position: center;
}

.pfp {
    height: 15dvh;
    aspect-ratio: 1/1;
    border-radius: 50%;
    padding-top: .5em;
}
</style>