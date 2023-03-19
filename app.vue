<template>
  <div class="flex justify-center bg-black p-2">
    <a href="https://github.com/oddward/oddwordvue">Website under construction</a>
  </div>

  <div class="container relative mx-auto xxl:w-[1800px] xxl:ml-[15%] mb-12">
    <NuxtLayout>
      <Nav class="top-0 border-b hidden md:flex" />
      <NuxtPage />
    </NuxtLayout>
  </div>

  <Nav class="bottom-0 border-t flex md:hidden" mobile />
  
  <footer class="flex justify-between items-center gap-8 text-slate-400 border-t border-slate-700 p-4">
    <p>© 2023 — Oddward // Mugtaba G</p>
    <div class="flex justify-between nowrap text-xl gap-6">
      <a rel="me" href="https://universeodon.com/@oddward" class="hover:text-white">
        <Icon name="fa6-brands:mastodon" />
      </a>
      <a href="https://universeodon.com/@oddward" class="hover:text-white">
        <Icon name="icon-park-solid:twitter" />
      </a>
      <a href="https://github.com/oddward" class="hover:text-white">
        <Icon name="icon-park-outline:github" />
      </a>
    </div>
  </footer>
</template>
