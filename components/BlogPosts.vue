<template>
    <header class="flex items-end gap-8 text-4xl text-slate-300 h-[1em]">
        <h1 class="inline-block whitespace-nowrap">BLOG POSTS</h1>
        <div class="bg-slate-500 w-full h-[2px]"></div>
    </header>

    <!-- <slot></slot> -->
    <ContentList v-slot="{ list }">
        <PostCard v-for="post in list" :key="post._path" 
            :title="post.title"
            :desc="post.description"
            :src="post.thumbnail"
            :url="post._path" />
    </ContentList>

    <div class="flex justify-center content-center">
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