<template>
    <div id="bio">
        <ContentDoc path="/about.yml">
            
            <template v-slot="{ about }">
                <div class="flex flex-row items-center content-center">
                    <img id="bio-pic" alt="Mugtaba's bio pic" src="/img/pfp1.jpg" class="w-10 h-10 md:w-12 md:h-12 rounded-full my-3 mr-3 inline-block" />
                    <p class="inline-block text-base text-gray-500">{{ about.author }}</p>
                </div>
                <p class="italic leading-tight"><small>{{ about.bio }}</small></p>
                
                <ContentList  path="/socials.yml" v-slot="{ socials }">
                    <div class="flex flex-row gap-2 mt-2">

                        <a v-for="item in socials" :key="item._id" :href="item.href">
                            <Icon :name="item.icon" class="w-4 h-4 opacity-secondary hover:opacity-primary" />
                        </a>
                            
                    </div>
                </ContentList>
            </template>
            
            <template #not-found>
                <p>The author info appears to be missing or disconnected. Try refreshing, or message me about any issues.</p>
            </template>

        </ContentDoc>
    </div>
</template>