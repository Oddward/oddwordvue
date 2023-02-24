<template>
    <a :href="href" class="w-[400px] h-[300px] rounded-lg my-8 text-2xl font-semibold text-slate-100 overflow-hidden border-2 border-slate-900 hover:border-slate-500" :style="{ backgroundImage: 'url('+src+')'}">
        <div class="w-full h-full bg-gradient-to-t from-black to-[#00000000]">
            <div class="flex justify-between gap-4 items-end h-full p-4 mt-full">
                <h2>{{ title }}</h2>
                <span class="flex justify-center items-center shrink-0 w-8 h-8 rounded-full bg-[#00000088]"><Icon name="icon-park-outline:arrow-right-up" /></span>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        props: {
            title: String,
            src: String,
            href: String
        }
    }
</script>