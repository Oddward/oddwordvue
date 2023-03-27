
<template>
    <div>   
        <div class="flex flex-row items-center content-center">
            <img id="bio-pic" alt="Mugtaba's bio pic" src="/img/pfp1.jpg" class="w-10 h-10 md:w-12 md:h-12 rounded-full my-3 mr-3 inline-block border border-slate-400" />
            <p class="inline-block text-lg text-gray-400 font-semibold">Mugtaba G</p>
        </div>
        <p class="italic leading-tight">
            <small>An African raised in Asia, a melting pot of cultures and interests with most of them revolving around visual arts, natural sciences and understanding people. Usually consuming tonnes of media (especially animation), practicing web development and graphic design, gaming, and/or hanging out on a discord chat.</small>
        </p>
        
        <div class="flex flex-row text-xl text-slate-400 gap-2 mt-2 p-2">
            <a v-for="item in socials" :href="item.href">
                <Icon :name="item.icon" class="" />
            </a>
        </div>
        
    </div>
</template>

<script setup>
    const socials = [
        {
            'name':'twitter',
            'username':'oddward_io',
            'href':'https://twitter.com/oddward_io',
            'title':'Twitter profile',
            'icon':'fa fa-twitter',
            'bg-color':'bg-[#1da1f2]'
        },
        {
            'name':'instagram',
            'username':'mugtaba.g',
            'href':'https://instagram.com/mugtaba.g',
            'title':'Main Insta profile',
            'icon':'fa fa-instagram',
            'bg-color':'bg-insta'
        },
        {
            'name':'instagram',
            'username':'oddward.io',
            'href':'https://instagram.com/oddward.io',
            'title':'Dev Insta profile',
            'icon':'fa fa-instagram',
            'bg-color':'bg-insta'
        },
        {
            'name':'github',
            'username':'Oddward',
            'href':'https://github.com/Oddward',
            'title':'GitHub repositories',
            'icon':'fa fa-github',
            'bg-color':'bg-black'
        },
        {
            'name':'Dribbble',
            'username':'oddward',
            'href':'https://dribbble.com/oddward',
            'title':'Dribbble portfolio',
            'icon':'fab fa-dribbble',
            'bg-color':'bg-[#ea4c89]'
        },
        {
            'name':'CodePen',
            'username':'oddward',
            'href':'https://codepen.io/oddward',
            'title':'CodePen playground',
            'icon':'fa fa-codepen',
            'bg-color':'bg-black'
        },
    ]
    console.log( socials )
</script>