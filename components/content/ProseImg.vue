<template>
    <img :src="refinedSrc" :alt="alt" :width="width" :height="height" class="object-contain w-full h-auto my-8 mx-auto p-8" loading="lazy">
</template>
  
<script setup lang="ts">
  import { withBase } from 'ufo'
  import { useRuntimeConfig, computed } from '#imports'
  
  const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    width: {
        type: [String, Number],
        default: undefined
    },
    height: {
        type: [String, Number],
        default: undefined
    }
  })
  
  const refinedSrc = computed(() => {
    if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
        return withBase(props.src, useRuntimeConfig().app.baseURL)
    }
    return props.src
  })
</script>
