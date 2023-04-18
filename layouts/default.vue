<template>
    <Nav class="top-0 border-b hidden md:flex mt-[40px]" />

    <div>
        <slot />
    </div>

    <Nav class="bottom-0 border-t flex md:hidden" mobile />

    <Footer />
</template>