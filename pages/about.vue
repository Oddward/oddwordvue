<template>
    <section class="flex flex-col items-center py-8 px-8">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full lg:w-[900px] my-8">
            <div class="shrink rounded-full border border-t-transparent border-l-transparent rotate-[45deg] overflow-hidden">
                <img src="/img/pfpnobg.png" alt="" width="240" height="240" class="rotate-[-45deg]">
            </div>
            <div class="inline-block text-center lg:text-left">
                <h1 class="main text-orange-gradient">MUGTABA GAROOT</h1>
                <p class="text-xl text-slate-400">Developer // Designer // Digital content creator</p>
            </div>
        </div>

        <div class="shrink text-xl w-full lg:w-[900px] my-8 leading-loose">
            <p>
                Computer science graduate who's passionate about all things art. I have some junior experience in web development, graphic design and social media marketing, and a lot of self-learning. 
            </p>
            <p>
                Usually found consuming tonnes of media (especially animation), practicing web development and graphic design, gaming, and/or hanging out on a discord chat.
            </p>
        </div>
    </section>

    <section class="mx-auto py-12 px-8">
        <SectionHeader title="Dev Skills" class="xxl:hidden my-4"/>
        <SectionHeader vertical title="Dev Skills" class="absolute -left-8" />

        <p class="text-xl text-slate-200 rounded-md p-4 bg-slate-800">Solid fundamentals in HTML, CSS, JS, with a focus on frontend design and experience with different view libraries. Main stack currently: Vue + TailwindCSS + NodeJS/some backend framework</p>

        <div class="flex justify-start gap-12 flex-wrap mx-auto text-3xl lg:text-5xl my-8">
            <BigIconLabeled icon="iconoir:html5" label="HTML5" />
            <BigIconLabeled icon="iconoir:css3" label="CCS3" />
            <BigIconLabeled icon="teenyicons:javascript-outline" label="Javascript" />
            <BigIconLabeled icon="simple-icons:git" label="Git" />
            <BigIconLabeled icon="mdi:tailwind" label="TailwindCSS" />
            <BigIconLabeled icon="simple-icons:bootstrap" label="Bootstrap" />
            <BigIconLabeled icon="simple-icons:vuedotjs" label="Vue" />
            <BigIconLabeled icon="simple-icons:react" label="React" />
            <BigIconLabeled icon="simple-icons:laravel" label="Laravel" />
            <BigIconLabeled icon="simple-icons:mysql" label="MySQL" />
            <BigIconLabeled icon="simple-icons:postgresql" label="PosgreSQL" />
            <BigIconLabeled icon="simple-icons:microsoftazure" label="MSAzure" />
            <BigIconLabeled icon="simple-icons:jupyter" label="Jupyter" />
            <BigIconLabeled icon="simple-icons:python" label="Python" />
            <BigIconLabeled icon="simple-icons:cplusplus" label="C++" />
            <BigIconLabeled icon="simple-icons:r" label="R" />
            <BigIconLabeled icon="simple-icons:visualstudiocode" label="VSCode" />
            <BigIconLabeled icon="simple-icons:github" label="Github" />
            <BigIconLabeled icon="simple-icons:bitbucket" label="Bitbucket" />
            <BigIconLabeled icon="simple-icons:vercel" label="Vercel" />
            <BigIconLabeled icon="simple-icons:webflow" label="Webflow" />
            <BigIconLabeled icon="simple-icons:wordpress" label="Wordpress" />
        </div>
    </section>

    <section class="mx-auto py-12 px-8">
        <SectionHeader title="Design Skills" class="xxl:hidden my-4"/>
        <SectionHeader vertical title="Design Skills" class="absolute -left-8" />

        <p class="text-xl text-slate-200 rounded-md p-4 bg-slate-800">Solid graphic design fundamentals for UI, UX, and illustration. 2D & 3D art, and experience with lots of different tools.</p>

        <div class="flex justify-start gap-12 flex-wrap mx-auto text-3xl lg:text-5xl my-8">
            <BigIconLabeled icon="simple-icons:figma" label="Figma" />
            <BigIconLabeled icon="simple-icons:framer" label="Framer" />
            <BigIconLabeled icon="simple-icons:adobeillustrator" label="Illustrator" />
            <BigIconLabeled icon="simple-icons:adobephotoshop" label="Photoshop" />
            <BigIconLabeled icon="simple-icons:blender" label="Blender" />
            <!-- Add support for custom svg (size em) in BigIconLabeled -->
            <!-- <BigIconLabeled icon="simple-icons:" label="Davinci Resolve" /> -->
        </div>
    </section>

    <section class="mx-auto py-12 px-8 text-slate-200">
        <SectionHeader title="Extras" class="xxl:hidden my-4"/>
        <SectionHeader vertical title="Extras" class="absolute -left-8" />

        <div class="pb-8">
            <h2 class="flex items-center gap-4 text-xl font-semibold text-slate-400"><Icon name="icon-park-outline:translate" /> Language</h2>
            <ul class="text-xl list-[circle] list-inside pl-10">
                <li class="py-2">English (advanced/fluent)</li>
                <li class="py-2">Arabic (native)</li>
                <li class="py-2">Malay (conversational)</li>
            </ul>
        </div>

        <div class="pb-8">
            <h2 class="flex items-center gap-4 text-xl font-semibold text-slate-400"><Icon name="iconoir:activity" /> Activities</h2>
            <ul class="text-xl list-[circle] list-inside pl-10">
                <li class="py-2">Developing open source projects on Github</li>
                <li class="py-2">Freelancing - Graphic design, Dev support</li>
                <li class="py-2">Educational and introspective content creation</li>
            </ul>
        </div>

        <div class="pb-8">
            <h2 class="flex items-center gap-4 text-xl font-semibold text-slate-400"><Icon name="iconoir:task-list" /> Past activities</h2>
            <ul class="text-xl list-[circle] list-inside pl-10">
                <li class="py-2">Participated in a Kaggle data science challenge (Kiva crowdfunding data set + R)</li>
                <li class="py-2">Assisted in conducting a quantum computing workshop around using IBM's online simulator</li>
                <li class="py-2">Qualified to join the Malaysian Mensa high IQ society</li>
            </ul>
        </div>
    </section>

    <section class="mx-auto py-12 px-8">
        <ContactForm />
    </section>
</template>
