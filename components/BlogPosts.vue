<template>
    <!-- <slot></slot> -->
    <div class="flex justify-center xxl:max-w-[900px]">
        <ContentList v-slot="{ list }">
            <PostCard v-for="post in list" :key="post._path" 
                :title="post.title"
                :desc="post.description"
                :src="post.thumbnail"
                :url="post._path" />
        </ContentList>
    </div>
    

    <div v-if="preview" class="flex justify-center content-center">
        <PageLink label="View all posts" href="/posts" />
    </div>
</template>

<script>
    export default {
        props: {
            preview: Boolean
        }
    }
</script>