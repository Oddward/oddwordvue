<template>
    <nav class="xxl:floater-nav" :class="{ desktop: !mobile, mobile: mobile }">
        <a href="/" class="w-8">
            <Logo width="32" height="32" class="logo" />
        </a>

        <ul class="links hidden md:flex gap-12">
            <PageLink label="Home" url="/" />
            <PageLink label="About" url="/about" />
            <PageLink label="Contact" url="#contact" />
        </ul>

        <ul class="links md:hidden flex gap-12 text-2xl">
            <a href="/"><Icon name="iconoir:home-alt-slim" /></a>
            <a href="/about"><Icon name="iconoir:home-user" /></a>
            <a href="#contact"><Icon name="iconoir:message" /></a>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            floater: Boolean,
            mobile: Boolean
        }
    }
</script>

<style scoped>
    .mobile {
        @apply sticky bottom-0 flex md:hidden justify-between items-center border-slate-700 bg-slate-900 w-full p-4 z-20
    }
    .desktop {
        @apply sticky top-0 hidden md:flex justify-between border-slate-700 bg-slate-900 w-full p-4 pr-8 z-20
    }
</style>