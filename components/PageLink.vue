<template>
    <a href="#" class="relative page-link">
        <span class="icons-container">
            <slot name="default">
                <Icon name="ri:arrow-right-line" size="1.2em" class="icon" />
            </slot>
            <slot name="pointer">
                <Icon name="ri:arrow-right-line" size="1.2em" class="icon text-[--accent-solid]" />
            </slot>
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

        .icon, :slotted(.icon) {
            position: absolute;
            top: calc(50% - 0.6em);
            transition: all .2s ease-in-out;
        }
        :slotted(.icon:first-of-type),
        .icon:first-of-type {
            transform: scale(1);
        }
        :slotted(.icon:nth-of-type(2)),
        .icon:nth-of-type(2) {
            left: -1.2em;
        }
    }
    .page-link:hover .icons-container {
        :slotted(.icon:first-of-type),
        .icon:first-of-type {
            transform: scale(0);
        }
        :slotted(.icon:nth-of-type(2)),
        .icon:nth-of-type(2) {
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
