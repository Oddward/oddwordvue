<template>
    <nav class="mobile md:desktop xxl:ultrawide">
        <a href="/" class="w-8">
            <Logo width="32" height="32" class="logo" />
        </a>

        <ul class="links hidden md:flex items-center gap-12">
            <PageLink label="Home" url="/" />
            <PageLink label="About" url="/about" />
            <PageLink label="Contact" url="#contact" />
        </ul>

        <ul class="links md:hidden flex items-center gap-12 text-2xl">
            <a href="/"><Icon name="iconoir:home-alt-slim" /></a>
            <a href="/about"><Icon name="iconoir:home-user" /></a>
            <a href="#contact"><Icon name="iconoir:message" /></a>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            mobile: Boolean
        }
    }
</script>

<style scoped>
    .mobile {
        @apply sticky bottom-0 flex justify-between items-center border-t border-slate-700 bg-slate-900 w-full p-4 md:px-16 z-20
    }
    .md\:desktop {
        @apply sticky top-0 bottom-auto flex justify-between items-center border-b border-slate-700 bg-slate-900 w-full p-4 md:px-16 pr-20 z-20
    }
    .xxl\:ultrawide {
        @apply sticky top-16 left-0 flex flex-col justify-start items-start border-0 text-xl gap-16 w-full h-auto min-h-0 h-64 p-16;
    }
    .xxl\:ultrawide .logo {
        width: 48px;
        height: 48px;
    }
    .xxl\:ultrawide ul {
        @apply flex-col gap-6 items-start
    }
</style>

<!-- :class="{ desktop: !mobile, mobile: mobile }" -->