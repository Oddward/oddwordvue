<template>
    <div class="relative pt-4 px-2 mb-8 overflow-hidden">
        <a :href="$attrs.href" class="flex content-center rounded-md p-6 transition-all duration-200 w-[400px] h-[96] cursor-pointer" :class="$attrs.class2">
            <div class="flex items-center text-2xl">
                <Icon :name="icon" size="1em" />
                <span class="font-semibold leading-none">{{ label }}</span>
            </div>
            <img :src="$attrs.src" alt="" width="80" height="100" class="absolute transition-all duration-200 rounded bg-gray-500">
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            label: 'Instagram',
            icon: 'icon-park-outline:instagram',
            url: {
                type: String,
                default: '#'
            },
            img: {
                type: String,
                default: 'https://via.placeholder.com/80x100'
            }
        }
    }
</script>

<style scoped>
    a > div > span {
        margin-inline-start: .5em;
        transition: margin-inline-start 200ms;
        transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }
    a:hover > div > span {
        margin-inline-start: 1em;
    }
    a > img {
        bottom: -3rem;
        right: 1rem;
        transform: rotate(12deg);
    }
    a:hover > img {
        bottom: -2rem;
        right: .85rem;
        transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        transform: rotate(22deg);
    }
</style>