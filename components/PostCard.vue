<template>
    <div class="card flex rounded-md bg-gray-900 border-2 border-slate-700 hover:border-slate-300 overflow-hidden my-8">
        <a :href="url">
            <header class="w-[300px] h-[225px]" :style="{ backgroundImage: 'url('+src+')', backgroundSize: 'contain'}"></header>
        </a>
        
        <div class="flex flex-col justify-between w-full py-4 px-8">
            <div>
                <a :href="url">
                    <h2 class="text-2xl font-bold my-4 hover:underline" :class={}>{{ title }}</h2>
                </a>
                <p class="w-full h-24 text-xl overflow-hidden text-ellipsis">{{ desc }}</p>
            </div>
            <!-- <div class="flex flex-end py-4">
                <PageLink label="Read" href="/" />
            </div> -->
        </div>

        <div class="flex flex-col nowrap border-l border-slate-700">
            <a href="" class="flex justify-center items-center w-12 h-full hover:text-orange-400"><Icon name="icon-park-outline:share-one" /></a>
            <hr class="border-slate-700">
            <a href="" class="flex justify-center items-center w-12 h-full hover:text-orange-400"><Icon name="icon-park-outline:bookmark-one" /></a>
            <hr class="border-slate-700">
            <a :href="url" class="flex justify-center items-center w-12 h-full hover:text-orange-400"><Icon name="icon-park-outline:arrow-right" /></a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            desc: String,
            src: String,
            url: String
        }
    }
</script>

<style scoped>
    .card:hover h2 {
        @apply text-orange-gradient
    }
</style>