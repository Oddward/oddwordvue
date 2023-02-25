<template>
    <div class="card inline-flex flex-col md:flex-row w-[300px] lg:w-full min-w-fit max-w-[300px] lg:max-w-none rounded-md bg-gray-900 border-2 border-slate-700 hover:border-slate-300 overflow-hidden my-8">
        <a :href="url" class="w-[300px] h-[225px] md:max-lg:w-[200px] md:max-lg:h-[150px]">
            <header class="w-[300px] h-[225px] md:max-lg:w-[200px] md:max-lg:h-[150px]" :style="{ backgroundImage:'url('+src+')', backgroundSize:'cover', backgroundPosition:'center center' }"></header>
        </a>
        
        <div class="flex flex-col justify-between md:justify-start w-[300px] md:w-full py-2 md:py-4 lg:py-8 px-4 lg:px-8">
            <a :href="url">
                <h2 class="text-lg lg:text-2xl font-bold hover:underline">{{ title }}</h2>
            </a>
            <p class="w-full h-24 md:h-auto text-sm lg:text-xl overflow-hidden text-ellipsis">{{ desc }}</p>
        </div>

        <div class="flex flex-row md:flex-col items-center nowrap border-t md:border-l border-slate-700 w-[300px] md:w-24">
            <a href="" class="flex justify-center items-center w-full h-full hover:text-orange-400 p-4"><Icon name="icon-park-outline:share-one" /></a>
            <!-- <hr class="border-slate-700"> -->
            <a href="" class="flex justify-center items-center w-full h-full hover:text-orange-400 p-4"><Icon name="icon-park-outline:bookmark-one" /></a>
            <!-- <hr class="border-slate-700"> -->
            <a :href="url" class="flex justify-center items-center w-full h-full hover:text-orange-400 p-4"><Icon name="icon-park-outline:arrow-right" /></a>
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