<template>
    <div class="relative">

        <div class="md:widescreen-grid xxl:ultrawide-grid relative">
            <Nav />
            <slot />
        </div>

        <Footer />

    </div>
</template>

<style scoped>
    .md\:widescreen-grid {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr;
        min-height: 0;
    }
    .xxl\:ultrawide-grid {
        position: relative;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: auto 1fr;
        /* grid-template-areas: 
            'sidenav content'
            'footer footer'; */
        min-height: 0;
    }
</style>