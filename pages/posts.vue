<template>
    <section id="main-links" class="flex justify-evenly flex-wrap gap-2 py-8 px-8 mx-auto lg:w-3/4">
        <PeekingSocialLinks />
    </section>

    <section id="posts" class="flex gap-16 py-8">
        <div class="min-w-64">
            <BlogPosts />
        </div>
        
        <div id="side-nav" class="w-64">
            <SectionHeader title="NAV" class="text-xl xxl:hidden"/>
            <SectionHeader title="NAV" vertical class="text-xl absolute -left-4" />

            <!-- tags/recent/popular -->
            <a href="#">Some link to post or tag</a>
            <a href="#">Some link to post or tag</a>

            <SectionHeader title="FRIENDS" class="text-xl xxl:hidden"/>
            <SectionHeader title="FRIENDS" vertical class="text-xl absolute -left-4" />

            <!-- friends site links -->
            <a href="#">Some link</a>
            <a href="#">Some link</a>
        </div>
    </section>
</template>