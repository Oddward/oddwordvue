<template>
    <a href="#" class="relative page-link flex items-center px-2">
        <span class="icons-container">
            <slot name="default">
                <Icon name="icon-park-outline:right-small" size="1.3em" class="icon" />
            </slot>
            <Icon name="icon-park-outline:right-small" size="1.3em" class="icon" />
        </span>
        <span>{{ label }}</span>
    </a>
</template>

<script>
    export default {
        props: {
            label: 'Link'
        }
    }
</script>

<style lang="scss">
    .page-link {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: .3em;
        font-size: var(--text-normal);
        height: calc(var(--text-normal) + 1em);
        padding-inline: .5em;

        .icon {
            position: absolute;
            left: 0;
            transition: all .2s ease;
        }
        .icons-container {
            position: relative;
            height: var(--text-normal);
            width: 1.3em;
            .icon {
                top: calc(50% - 0.65em);
                opacity: 1;
                transition-delay: 0;
            }
            .icon + .icon {
                top: 1.5;
                opacity: 0;
                transition-delay: .1s;
            }
        }
        &:hover .icons-container {
            .icon {
                top: -1.5em;
                opacity: 0;
                transition-delay: .1s;
            }
            .icon + .icon {
                top: calc(50% - 0.65em);
                opacity: 1;
                transition-delay: 0;
            }
        }
    }
    /* .page-link .icon {
        position: absolute;
        right: -.5em;
        opacity: 30%;
        transition: right 200ms ease-out;
    }
    .page-link:hover .icon {
        right: -1em;
        opacity: 100;
    } */
</style>