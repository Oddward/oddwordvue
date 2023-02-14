<template>
    <header class="flex items-end gap-8 text-4xl text-slate-300 h-[1em]">
        <h1 class="inline-block whitespace-nowrap">BLOG POSTS</h1>
        <div class="bg-slate-500 w-full h-[2px]"></div>
    </header>

    <PostCard title="Some interesting title" desc="This is a description for or a snippet from some fancy post." src="http://via.placeholder.com/300x200" url="/"/>
    <PostCard title="Another interesting title" desc="This is a description for or a snippet from some fancy post." src="http://via.placeholder.com/300x200" url="/"/>
    <PostCard title="Actually not a very interesting title" desc="This is a description for or a snippet from some fancy post." src="http://via.placeholder.com/300x200" url="/"/>
    <div class="flex justify-center content-center">
        <PageLink label="View all posts" href="/" />
    </div>
    
</template>