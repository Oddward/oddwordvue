<template>
    <div class="inline-block relative group cursor-pointer">
        <Icon :name="icon" />
        <label class="absolute bottom-[-2rem] inset-x-0 text-center text-slate-300 text-[.4em] w-full hidden group-hover:inline-block">{{label}}</label>
    </div>
</template>

<script>
    export default {
        props: {
            icon: String,
            label: String
        }
    }
</script>
<!-- 
<style scoped>
    
</style> -->