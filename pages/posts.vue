<template>
    <section id="main-links" class="flex justify-evenly flex-wrap gap-2 py-8 px-8 mx-auto lg:w-3/4">
        <PeekingSocialLinks />
    </section>

    <section id="posts" class="flex gap-16 py-8">
        <div class="min-w-64">
            <BlogPosts />
        </div>
        
        <div id="side-nav" class="w-64">
            <header class="flex items-end gap-2 text-xl text-slate-300 h-[1em]">
                <h1 class="inline-block whitespace-nowrap">NAV</h1>
                <div class="bg-slate-500 w-full h-[2px] mb-2"></div>
            </header>
        </div>
    </section>
</template>