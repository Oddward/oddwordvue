<template>
        <header v-if="vertical" class="hidden xxl:flex flex-col items-end gap-8 text-2xl lg:text-4xl text-slate-300 h-full w-fit">
            <h1 class="inline-block whitespace-pre-line v-text">{{ title }}</h1>
            <div class="bg-slate-500 w-[2px] h-full mr-2"></div>
        </header>
    
        <header v-else class="flex items-end gap-8 text-2xl lg:text-4xl text-slate-300 h-[1em]">
            <h1 class="inline-block whitespace-nowrap">{{ title }}</h1>
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
    .v-text {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        rotate: 180deg;
    }
</style>