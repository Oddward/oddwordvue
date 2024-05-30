<template>
    <div class="card-post-result rounded-md bg-gray-900 border-2 border-slate-700 hover:border-slate-300">
        <a :href="url" class="">
            <header class="" :style="{ backgroundImage:'url('+src+')', backgroundSize:'cover', backgroundPosition:'center center' }"></header>
        </a>
        
        <div class="content flex flex-col justify-between md:justify-start w-[300px] md:w-full py-2 md:py-4 lg:py-8 px-4 lg:px-8">
            <a :href="url">
                <h3 class="hover:underline">{{ title }}</h3>
            </a>
            <p class="w-full h-24 md:h-auto overflow-hidden text-ellipsis">{{ desc }}</p>
        </div>

        <div class="buttons flex flex-row md:flex-col items-center nowrap border-t md:border-l border-slate-700 w-[300px] md:w-24">
            <span class="flex justify-center items-center w-full h-full hover:text-orange-400 p-4" @click="shareHandler">
                <Icon name="icon-park-outline:share-one" />
            </span>
            <!-- <hr class="border-slate-700"> -->
            <a href="#" class="flex justify-center items-center w-full h-full hover:text-orange-400 p-4" ref="bookmark" @click="createBookmark" :title="props.title" rel="sidebar">
                <Icon name="icon-park-outline:bookmark-one" />
            </a>
            <!-- <hr class="border-slate-700"> -->
            <a :href="url" class="flex justify-center items-center w-full h-full hover:text-orange-400 p-4">
                <Icon name="icon-park-outline:arrow-right" />
            </a>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const bookmark = ref(null)
    // export default {
    //     props: {
    //         title: String,
    //         desc: String,
    //         src: String,
    //         url: String
    //     }
    // }
    const props = defineProps({
        title: String,
        desc: String,
        src: String,
        url: String
    })
    const shareStr = () => `Check out this article from Oddward`
    const shareData = {
        title: props.title,
        text: shareStr(),
        url: props.url
    }
    const shareHandler = async () => {
        try {
            await navigator.share(shareData)

        } catch (err) {
            alert(`Error: ${err} (If you're on Firefox, please enable webshare)`)
        }
    }
    const createBookmark = () => {
        if( window.sidebar && window.sidebar.addPanel ) {
            window.sidebar.addPanel(props.title, props.url, '')
        } 
        else if(window.external && ('AddFavorite' in window.external)) {
            window.external.AddFavorite(props.url,props.title)
        } 
        // else if( window.opera && window.print || window.sidebar && ! (window.sidebar instanceof Node)) {
        //     bookmark.attr('rel', 'sidebar').attr('title', props.title).attr('location', props.url)
        //     return true
        // } 
        else {
            try {
                browser.bookmarks.create({
                    title: props.title,
                    url: props.url
                })
            } catch(err) {
                alert('Could not save it for you. You can add this page to your bookmarks by pressing ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D on your keyboard.');
            }
        }
        return false
    }
</script>

<style lang="scss" scoped>
    /* @import url(@/assets/css/theme.scss); */

    .card-post-result {
        display: inline-flex;
        flex-direction: column;
        width: 13rem;
        max-width: 13rem;
        min-width: fit-content;
        height: auto;
        overflow: hidden;
        margin-block: 2rem;

        h3:hover {
            text-decoration: underline;
            text-decoration-color: transparent;
        }
        a:has(header) {
            aspect-ratio: 4/3;
            width: 100%;
            height: auto;
    
            header {
                width: 100%;
                height: 100%;
            }
            @media screen and (min-width: 768px) {
                height: 100%;
                width: auto;
            }
        }
        @media screen and (min-width: 768px) {
            flex-direction: row;
            width: 100%;
            max-width: none;
            height: 8rem;
        }
        @media screen and (min-width: 1024px) {
            height: 12rem;
        }
    }
    .card-post-result .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .5rem;
        padding-inline: 1rem;
        padding-block: .5rem;

        /*p {
            font-size: .9rem;
            width: 16rem;
            height: 8rem;

            @media screen and (min-width: 1024px) {
                font-size: 1rem;
            }
        }*/
        @media screen and (min-width: 768px) {
            width: 100%;
        }
    }
    .card-post-result .content p {
        @apply w-full h-24 text-sm lg:text-base md:h-auto overflow-hidden text-ellipsis
    }
    .card-post-result .buttons {
        @apply flex flex-row md:flex-col items-center whitespace-nowrap border-t md:border-l border-slate-700 w-[300px] md:w-24
    }
    .card-post-result .buttons > * {
        @apply flex justify-center items-center w-full h-full hover-accent-bg p-2 lg:p-4 cursor-pointer
    }
</style>
