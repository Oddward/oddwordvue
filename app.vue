<template>
  <div class="flex justify-center bg-black p-2">
    <a href="https://github.com/oddward/oddwordvue">Website under construction</a>
  </div>

  <div class="container mx-auto">
    <NuxtLayout>
      <Nav />
      <NuxtPage />
    </NuxtLayout>
  </div>

  <footer class="flex justify-between text-slate-400 border-t border-slate-700 p-4 mt-12">
    <p>© Oddward // Mugtaba G</p>
    <div class="flex justify-between nowrap">
      <a href="https://github.com/oddward">
        <Icon name="icon-park-outline:github" />
      </a>
    </div>
  </footer>
</template>