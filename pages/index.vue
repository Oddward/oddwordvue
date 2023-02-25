<template>
    <section id="hero" class="flex flex-wrap md:flex-nowrap content-center justify-around gap-6 py-8">
        <div class="w-[300px] lg:w-[400px] h-auto m-4 shrink-0 grow-0">
            <img src="/img/pfp1_crop_nobg.png" alt="Oddward silhouette hero portrait" class="border-l border-b rounded-bl-[3rem] lg:rounded-bl-[6rem] w-full h-auto">
        </div>

        <article class="flex flex-col justify-center gap-6 w-75 m-4 w-full xxl:w-3/4">
            <header class="relative my-6">
                <span>Welcome to the</span>
                <h1 class="main text-orange-gradient relative">Oddward blog</h1>
            </header>
            <p class="text-xl lg:text-2xl xxl:text-3xl">Explore, reach out and discuss some ideas around software development, personal development, design, and where my hobbies and interests align with those.</p>
            <div class="flex justify-end px-4">
                <PageLink label="About me" />
            </div>
        </article>
    </section>

    <div class="flex flex-col gap-4 my-4">
        <div class="bg-slate-500 h-[2px] w-1/2 mr-auto"></div>
        <div class="bg-slate-500 h-[2px] w-1/2 mx-auto"></div>
        <div class="bg-slate-500 h-[2px] w-1/2 ml-auto"></div>
    </div>

    <section id="main-links" class="flex justify-evenly flex-wrap gap-2 py-8 px-8 mx-auto lg:max-xxl:w-3/4 xxl:px-0">
        <PeekingSocialLinks />
    </section>

    <section id="posts" class="relative py-8 px-8 xxl:my-8 xxl:ml-8">
        <SectionHeader title="BLOG POSTS" class="xxl:hidden"/>
        <SectionHeader vertical title="BLOG POSTS" class="absolute -left-8" />
        <BlogPosts preview />
    </section>

    <section id="projects" class="relative py-8 px-8 xxl:my-8">
        <SectionHeader title="PROJECTS" class="xxl:hidden"/>
        <SectionHeader vertical title="PROJECTS" class="absolute -left-8" />
        <Projects />
    </section>
    
</template>

<style scoped>
    h1::after {
        position: absolute;
        content: 'Creative';
        bottom: -1.5em;
        left: 8ch;
        font-size: 1.2rem;
        font-weight: light;
        color: white;
        font-family: cursive;
    }
</style>