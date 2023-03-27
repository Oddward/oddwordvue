<template>
    <section id="main-links" class="flex justify-around flex-wrap gap-2 py-8 px-4 mx-auto lg:w-3/4">
        <PeekingSocialLinks />
    </section>

    <section id="posts" class="flex gap-16 py-8">
        <div class="min-w-64">
            <SectionHeader title="BLOG POSTS" class="xxl:hidden"/>

            <BlogPosts />
        </div>
        
        <div id="side-nav" class="flex flex-col gap-4 w-64">
            <div>
                <SectionHeader title="NAV" class="text-lg lg:text-xl small"/>
                <!-- tags/recent/popular -->
                <ContentNavigation v-slot="{ navigation }">
                    <ul>
                        <li v-for="link of navigation" :key="link._path">
                            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                        </li>
                    </ul>
                </ContentNavigation>
            </div>
            
            <div>
                <SectionHeader title="FRIENDS" class="text-lg lg:text-xl small"/>
                <ul>
                    <li>
                        <a href="https://tripleapro.wixsite.com/triplea" _blank>Triple A</a>
                    </li>
                </ul>
            </div>
            
        </div>
    </section>

    <section class="mx-auto py-12 px-8">
        <ContactForm />
    </section>
</template>

<style scoped>
    #side-nav li {
        @apply font-semibold text-slate-500 hover:underline hover:text-blue-gradient
    }
</style>