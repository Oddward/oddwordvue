<template>
    <nav class="flex w-full justify-between p-4 border-b border-slate-700 xxl:floater-nav">
        <a href="/" class="w-8">
            <Logo width="32" height="32" class="logo" />
        </a>
        <ul class="links flex gap-12">
            <PageLink label="Home">
                <Icon name="ri:home-2-line" size="1.3em" class="icon" />
            </PageLink>
            <PageLink label="About" />
            <PageLink label="Contact" />
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
    .mobile {
        @apply fixed bottom-0 bg-black w-full;
    }
</style>