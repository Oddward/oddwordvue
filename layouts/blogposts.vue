<template>
    <div class="relative">

        <div class="content-layout relative">
            <Nav />
            <slot />
        </div>

        <Footer />

    </div>
</template>

<style scoped>
    .content-layout {
        /* display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr; */
        min-height: 0;
        @apply flex flex-col;
        @apply xxl:flex xxl:flex-row;
    }
    /* .ultrawide-grid {
        @apply xxl:relative xxl:grid;
        position: relative;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: auto 1fr;
        min-height: 0;
    } */
</style>