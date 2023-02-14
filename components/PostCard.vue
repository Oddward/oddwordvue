<template>
    <div class="card flex rounded-md bg-gray-900 border-2 border-slate-700 hover:border-slate-300 overflow-hidden my-8">
        <a :href="url">
            <header class="w-[300px] h-[200px]" :style="{ backgroundImage: 'url('+src+')'}"></header>
        </a>
        
        <div class="flex flex-col justify-between p-4">
            <div>
                <a :href="url">
                    <h2 class="text-2xl font-bold my-4" :class={}>{{ title }}</h2>
                </a>
                <p class="text-xl">{{ desc }}</p>
            </div>
            <div class="flex flex-end py-4">
                <PageLink label="Read" href="/" />
            </div>
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