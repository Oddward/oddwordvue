<script setup>
    // let staticData = {
    //     "author": "Mugtaba G",
    //     "avatar": "/img/pfp1.jpg",
    //     "bio": "An African raised in Asia, a melting pot of cultures and interests with most of them revolving around visual arts, natural sciences and understanding people. Usually consuming tonnes of media (especially animation), practicing web development and graphic design, gaming, and/or hanging out on a discord chat.",
    //     "friends": [
    //         {
    //             "title": "Triple A",
    //             "href": "http://ahmadaa1995.wixsite.com/triplea"
    //         }
    //     ]
    // }
    
    // const { data: _about } = await useAsyncData('about', () => queryContent('.info').find())
    const { data: _about } = await queryContent('.info').find()
    // console.log( _about )
</script>

<!-- Doesn't work, empty data -->
<template>
<div>
    {{ _about }}
</div>
</template>

<!-- <script>
    export default {
        async fetch({ $content }) {
            this.content = await $content( '/.info.about' ).fetch()
        },
        data() {
            return {
                content: []
            }
        }
    }
</script> -->