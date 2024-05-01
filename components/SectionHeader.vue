<template>
        <header v-if="vertical" class="hidden xxl:flex flex-col items-end gap-8 text-2xl lg:text-4xl text-slate-300 h-full w-fit">
            <h2 class="inline-block whitespace-pre-line v-text">{{ title }}</h2>
            <div class="bg-slate-500 w-[2px] h-full mr-2"></div>
        </header>
    
        <header v-else class="text-slate-300">
            <h2 class="inline-block whitespace-nowrap">{{ title }}</h2>
            <div class="bg-slate-500 w-full h-[1px] lg:h-[2px] mb-2"></div>
        </header>
</template>

<script>
    export default {
        props: {
            title: 'TITLE',
            vertical: Boolean
        }
    }
</script>

<style>
    /* h2 {
        font-size: 2rem;
    } */
    .header {
        display: flex;
        align-items: end;
        gap: 2rem;
        /* height: 1em; */
    }
    .v-text {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        rotate: 180deg;
    }
</style>
