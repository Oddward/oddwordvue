<template>
  <div class="flex justify-center bg-black p-2">
    <a href="https://github.com/oddward/oddwordvue">Website under construction</a>
  </div>

  <div class="container mx-auto xxl:w-[1800px] xxl:ml-[15%]">
    <NuxtLayout>
      <Nav />
      <NuxtPage />
    </NuxtLayout>
  </div>

  <footer class="flex justify-between gap-8 text-slate-400 border-t border-slate-700 p-4 mt-12">
    <p>© 2023 — Oddward // Mugtaba G</p>
    <div class="flex justify-between nowrap">
      <a rel="me" href="https://universeodon.com/@oddward">
        <Icon name="ri:mastodon-fill" />
      </a>
      <a href="https://x.com/oddward_io">
        <Icon name="ri:twitter-x-fill" />
      </a>
      <a href="https://threads.com/@mugtaba.g">
        <Icon name="ri:threads-fill" />
      </a>
      <a href="https://github.com/Oddward">
        <Icon name="ri:github-fill" />
      </a>
    </div>
  </footer>
</template>