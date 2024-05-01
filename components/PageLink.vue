<template>
    <a href="#" class="relative page-link flex items-center px-2">
        <span class="icons-container">
            <slot name="default">
                <Icon name="icon-park-outline:right-small" size="1.2em" class="icon" />
            </slot>
            <Icon name="ri:arrow-right-line" size="1.2em" class="icon" />
        </span>
        <span class="label">{{ label }}</span>
    </a>
</template>

<script>
    export default {
        props: {
            label: 'Link'
        }
    }
</script>

<style lang="scss" scoped>
    .page-link {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: .3em;
        font-size: var(--text-normal);
        padding-inline: .5rem;
        padding-block: .2rem;
    }
    .icons-container {
        position: relative;
        height: 1.2em;
        width: 1.2em;
        overflow: hidden;

        .icon {
            position: absolute;
            top: calc(50% - 0.6em);
            transition: all .25s ease-in-out;
        }

        .icon:first-of-type {
            transform: scale(1);
        }

        .icon:nth-child(2) {
            left: -1.2em;
        }
    }
    .page-link:hover .icons-container {
        .icon:first-of-type {
            transform: scale(0);
        }
        
        .icon:nth-child(2) {
            left: 0;
        }
    }
    nav .label {
        display: none;
    }
    @media screen and (min-width: 640px) {
        nav .label {
            display: inline;
        }
    }
</style>
