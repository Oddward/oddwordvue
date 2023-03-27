<template>
        <!-- <header v-if="vertical" class="hidden xxl:flex flex-col items-end gap-8 text-2xl lg:text-4xl text-slate-300 h-full w-fit">
            <h1 class="inline-block whitespace-pre-line v-text">{{ title }}</h1>
            <div class="bg-slate-500 w-[2px] h-full mr-2"></div>
        </header>
    
        <header v-else class="flex items-end gap-8 text-2xl lg:text-4xl text-slate-300 h-[1em]">
            <h1 class="inline-block whitespace-nowrap">{{ title }}</h1>
            <div class="bg-slate-500 w-full h-[1px] lg:h-[2px] mb-2"></div>
        </header> -->

        <header class="flex items-end gap-8 text-2xl lg:text-3xl text-slate-300 xxl:vertical">
            <h1 class="inline-block whitespace-nowrap text-inherit">{{ title }}</h1>
            <div class="line"></div>
        </header>
</template>

<script>
    export default {
        props: {
            title: 'TITLE'
            // vertical: Boolean
        }
    }
</script>

<style scoped>
    h1 { font-size: inherit; }
    .vertical {
        @apply flex-col items-end gap-8 h-full w-fit absolute -left-8
    }
    .vertical h1 {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        rotate: 180deg;
    }
    .line {
        @apply bg-slate-500 w-full h-[1px] lg:h-[2px] mb-2
    }
    .vertical .line {
        @apply bg-slate-500 w-[2px] h-full mr-2
    }
    .small {
        @apply gap-4 text-xl xxl:text-2xl
    }
    .small .line {
        @apply mb-4
    }
    .vertical .small .line {
        @apply mr-4
    }
</style>