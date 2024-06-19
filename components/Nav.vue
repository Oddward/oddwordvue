<template>
    <nav class="border-b border-slate-700 xxl:floater-nav">
        <a href="/" class="w-8">
            <Logo width="32" height="32" class="logo" />
        </a>
        <ul class="links flex gap-12">
            <PageLink label="Home">
                <Icon name="ri:home-2-line" size="1.2em" class="icon" />
            </PageLink>

            <PageLink label="About">
                <Icon name="ri:user-smile-line" size="1.2em" class="icon" />
            </PageLink>

            <PageLink label="Contact" class="hover-accent-bg" :class="contactShow ? 'active':''" @click="toggleContact">
                <Icon name="ri:message-3-line" size="1.2em" class="icon" />
                <template #pointer>
                    <Icon name="ri:arrow-down-line" size="1.2em" class="icon text-[--accent-solid]" />
                </template>
            </PageLink>
        </ul>
        <div id="contact-panel" v-show="contactShow">
            <p class="text-3xl font-black pt-4">Get in Touch</p>
            <form action="" method="post" @submit.prevent="" class="py-2">
                <div>
                    <label for="">name</label>
                    <input type="text" name="" class="text-input" placeholder="enter name...">
                </div>
                <div>
                    <label for="">email</label>
                    <input type="mail" name="" class="text-input" placeholder="enter email address...">
                </div>
                <div>
                    <label for="">message</label>
                    <input type="textarea" name="" class="text-input" placeholder="enter your message...">
                </div>
                <input type="button" value="send" class="btn">
            </form>
            <hr>
            <button type="button" class="btn">
                <Icon name="icon-park-outline:clipboard" size="1.2em" class="icon" />
                <span>copy email address</span>
            </button>
            <button type="button" class="btn">
                <Icon name="icon-park-outline:mail-edit" size="1.2em" class="icon" />
                <span>open mail client</span>
            </button>
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue'
    // const contactPanel = ref(false)
    const props = {
        floater: Boolean
    }

    let contactShow = ref(false)
    const toggleContact = () => {
        contactShow.value = !contactShow.value
        console.log( contactShow )
    }
    // const handleContact = () => {
    //     toggleContact()
    //     if(contactShow) {

    //     }
    // }
</script>

<style scoped>
    nav {
        position: relative;
        z-index: 30;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-inline: 1.5rem;
    }
    ul {
        display: flex;
        gap: .5rem;
    }
    ul > * {
        height: 100%;
    }
    .logo {
        flex-shrink: 0;
        width: 1.5rem;
        height: 1.5rem;
        margin-block: .5rem;
    }
    @media (min-width: 768px) {
        nav {
            position: -webkit-sticky;
            /* top: 40.5px; */
            @apply bg-base sticky
        }
        ul {
            gap: 2.5rem;
        }
        .logo {
            width: 1.8rem;
            height: 1.8rem;
        }
    }
    form {
        @apply flex flex-col gap-2
    }
    #contact-panel {
        @apply absolute z-20 top-full right-0 flex flex-col gap-4 h-auto w-full sm:w-96 bg-[gold] text-slate-900 px-8 pb-12 shadow-md
    }
    #contact-panel label {
        @apply text-sm hidden
    }
    #contact-panel .btn {
        @apply w-full bg-slate-900 text-white hover:bg-slate-700
    }
    .text-input {
        @apply block bg-slate-100 focus:bg-slate-50 text-slate-700 rounded-sm w-full py-1 px-2
    }
    /* .mobile {
        @apply fixed bottom-0 bg-black w-full;
    } */
</style>
