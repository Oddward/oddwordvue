<template>
    <section id="hero" class="flex content-center justify-around gap-6 py-8">
        <img src="/img/pfp1_crop_nobg.png" alt="Oddward silhouette hero portrait" width="400" class="m-4 border-l border-b rounded-bl-[6rem]">
        <article class="flex flex-col justify-center gap-6 w-75 m-4">
            <header class="relative my-6">
                <span>Welcome to the</span>
                <h1 class="main text-orange-gradient relative">Oddward blog</h1>
            </header>
            <p class="text-2xl">Explore, reach out and discuss some ideas around software development, personal development, design, and where my hobbies and interests align with those.</p>
            <div class="flex justify-end px-4">
                <PageLink label="About me" />
            </div>
        </article>
    </section>

    <div class="flex flex-col gap-4">
        <div class="bg-slate-500 h-[2px] w-1/2 mr-auto"></div>
        <div class="bg-slate-500 h-[2px] w-1/2 mx-auto"></div>
        <div class="bg-slate-500 h-[2px] w-1/2 ml-auto"></div>
    </div>

    <section id="main-links" class="flex justify-evenly flex-wrap gap-4 py-8 px-8">
        <PeekLinkCard label="Instagram" icon="icon-park-outline:instagram" class2="bg-insta"/>
        <PeekLinkCard label="Github" icon="icon-park-outline:github" class2="bg-black"/>
        <PeekLinkCard label="Dribbble" icon="icon-park-outline:dribble" class2="bg-dribbble"/>
        <PeekLinkCard label="CodePen" icon="ant-design:codepen-outlined" class2="bg-black"/>
    </section>

    <section id="posts" class="py-8 px-8">
        <BlogPosts />
    </section>

    <section id="projects" class="py-8 px-8">
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
    }
</style>