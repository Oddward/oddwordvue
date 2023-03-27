
<template>
    <main class="md:grid grid-cols-10 h-full py-8">
        <ContentDoc v-slot="{ doc }">

            <header class="w-full h-full col-span-5 px-4">
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

                <img :src="`${doc.image.src}`" alt="post thumbnail image" class="w-full h-auto my-8 rounded-sm" width="400" height="300">
            </header>

            <article class="w-full h-full col-span-5 overflow-y-auto md:max-h-[80vh] text-xl font-light px-8 py-12">
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
            </article>

        </ContentDoc>
    </main>
</template>

<script>
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
    article {
        scrollbar-width: thin;
        scrollbar-color: #222;
    }
    article::-webkit-scrollbar {
        width: 1rem;
        height: 1rem;
        background: transparent;
    }
    article::-webkit-scrollbar-track {
        width: 4px;
        @apply bg-slate-500
    }
    article::-webkit-scrollbar-thumb {
        width: 1rem;
        height: 2rem;
        @apply bg-slate-400 rounded-sm
    }
</style>