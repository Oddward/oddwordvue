<template>
    <div class="inline-flex items-center relative group cursor-pointer">
        <Icon v-if="icon" :name="icon" />
        <span v-else :style="{ backgroundImage:`url(${src})`, backgroundSize: 'contain' }" :title="label" class="bg-no-repeat bg-center w-full h-full" />
        <label class="absolute bottom-[-2rem] inset-x-0 text-center text-slate-300 text-[.3em] w-full hidden group-hover:inline-block">{{ label }}</label>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                path: useRoute().name
            }
        },
        props: {
            icon: String,
            label: String,
            src: String
        }
    }
</script>
<!-- 
<style scoped>
    
</style> -->