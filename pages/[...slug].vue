
<template>
    <div>
    <NuxtLayout name="blogposts">

    <main class="post-content py-8 relative">
        <ContentDoc v-slot="{ doc }">

            <header class="w-[60rem] px-16 relative">
                <div class="mx-auto lg:sticky top-28 max-w-screen">
                    <a id="back-btn" href="/posts" class="group flex items-center noshrink gap-2 text-xl text-slate-500 hover:text-slate-300 py-4">
                        <Icon name="icon-park-outline:arrow-left"/>
                        <span class="lg:opacity-0 group-hover:opacity-100 leading-tight">posts</span>
                    </a>

                    <a href="/posts" class="tag text-slate-400 hover:underline hover:text-slate-500 p-2 pl-0">{{ doc.tags }}</a>
                    <h1 class="text-4xl font-extrabold text-orange-gradient">{{ doc.title }}</h1>
                    <p class="text-lg text-slate-400 italic my-4">{{ doc.subtitle }}</p>

                    <div class="flex gap-4 items-center my-3 text-slate-400">
                        <div>
                            <span>—</span>
                            <img id="bio-pic" alt="Mugtaba's profile pic" src="/img/pfp1.jpg" class="avatar ml-3" />
                            <a href="/about" class="hover:underline hover:text-slate-300">{{ doc.author ?  doc.author:'Mugtaba G' }}</a>
                        </div>
                        <small v-if="doc.updatedAt">( Updated: {{ doc.updatedAt }} )</small>
                        <!-- <a href="/posts" class="tag hover:underline hover:text-slate-300">{{ doc.tags }}</a> -->
                    </div>

                    <img :src="`${doc.image.src}`" alt="post thumbnail image" class="w-full max-w-4/5 shrink-1 h-auto my-8 rounded-sm" width="400" height="300">
                </div>
            </header>

            <article class="post-article-container text-xl font-light text-slate-300 p-16">
                <div class="post-article md:max-h-[70ch] mx-auto leading-relaxed">
                    <span class="flex justify-center mb-4">
                        <Logo :outline="true" class="fill-none stroke-[4px] stroke-slate-400" width="48" height="48" />
                    </span>
                    <span class="flex justify-center text-slate-400 text-base mb-4" ref="myDate">{{ formatDate(doc.date) }}</span>
                    
                    <ContentRenderer :value="doc" />

                    <div class="flex flex-col gap-1 my-4">
                        <div class="h-[1px] w-1/2 bg-slate-500 mr-auto"></div>
                        <div class="h-[1px] w-1/2 bg-slate-500 mx-auto"></div>
                        <div class="h-[1px] w-1/2 bg-slate-500 ml-auto"></div>
                    </div>

                    <!-- <AboutAuthor /> -->
                </div>
            </article>

        </ContentDoc>
    </main>

    </NuxtLayout>
    </div>
</template>

<script>
    definePageMeta({
        layout: false,
    })

    export default {
        methods: {
            formatDate( date ) { return new Date(date).toLocaleDateString( 'en-US', { day: 'numeric', month: 'long', year: 'numeric'} ) }
        }
    }
</script>

<style scoped>
    #back-btn span {
        font-variant: small-caps;
    }
    .post-content {
        @apply flex flex-col;
        @apply lg:flex lg:flex-row lg:flex-nowrap lg:justify-evenly lg:min-h-0;
    }
    .post-article-container {
        @apply min-h-0 min-w-0 w-full max-w-full h-auto;
        @apply md:justify-around;
        @apply lg:overflow-y-auto lg:h-[inherit];
        scrollbar-width: thin;
        scrollbar-color: #222;
    }
    .post-article-container::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
        background: transparent;
    }
    .post-article-container::-webkit-scrollbar-track {
        width: 4px;
        @apply bg-slate-500;
    }
    .post-article-container::-webkit-scrollbar-thumb {
        width: 1rem;
        height: 1.5rem;
        @apply bg-slate-400 rounded-sm;
    }
    .post-article {
        max-width: 80ch;
    }
</style>