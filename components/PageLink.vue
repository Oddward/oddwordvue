<template>
    <a href="#" class="relative page-link flex items-center px-2">
        <span class="text-lg">{{ label }}</span>
        <Icon name="icon-park-outline:right-small" size="1.3em" class="icon" />
    </a>
</template>

<script>
    export default {
        props: {
            label: 'Link'
        }
    }
</script>

<style lang="css">
    .page-link .icon {
        position: absolute;
        right: -1em;
        opacity: 30%;
        transition: right 200ms ease-out;
    }
    .page-link:hover .icon {
        right: -1.5em;
        opacity: 100;
    }
</style>