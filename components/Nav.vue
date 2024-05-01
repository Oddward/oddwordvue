<template>
    <nav class="border-b border-slate-700 xxl:floater-nav">
        <a href="/" class="w-8">
            <Logo width="32" height="32" class="logo" />
        </a>
        <ul class="links flex gap-12">
            <PageLink label="Home">
                <Icon name="ri:home-2-line" size="1.2em" class="icon" />
            </PageLink>
            <PageLink label="About">
                <Icon name="ri:user-smile-line" size="1.2em" class="icon" />
            </PageLink>
            <PageLink label="Contact">
                <Icon name="ri:message-3-line" size="1.2em" class="icon" />
            </PageLink>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            floater: Boolean
        }
    }
</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: .5rem 1rem;
    }
    ul {
        display: flex;
        gap: .5rem;
    }
    .logo {
        width: 1.5rem;
        height: 1.5rem;
    }
    @media (min-width: 640px) {
        ul {
            gap: 2.5rem;
        }
        .logo {
            width: 2rem;
            height: 2rem;
        }
    }
    /* .mobile {
        @apply fixed bottom-0 bg-black w-full;
    } */
</style>
