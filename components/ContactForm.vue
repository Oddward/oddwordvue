<template>
    <div class="my-8">
    <h1 class="mb-8">
        <img src="/img/Get in touch.svg" alt="Get in touch (contact form header)">
    </h1>

    <div id="contact" class="grid :lg:grid-rows-2 lg:grid-cols-2">
        <div class="my-4">
            <div class="form-group">
                <h2 class="text-2xl text-slate-400 font-semibold">Message me:</h2>
                <div class="flex gap-4 text-2xl mb-8">
                    <div v-for="item in socials">
                        <a :href="item.url" class="hover:text-white"><Icon :name="item.icon" /></a>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <h2 class="text-2xl text-slate-400 font-semibold">Compose an email:</h2>
                <div class="flex flex-wrap gap-4 text-lg mb-8">
                    <a href="https://twitter.com/oddward_io" class="mail-btn">
                        <Icon name="icon-park-outline:email-push" />
                        <span>Casual talk</span>
                    </a>
                    <a href="https://instagram.com/mugtaba.g" class="mail-btn">
                        <Icon name="icon-park-outline:email-push" />
                        <span>Professional inquiry</span>
                    </a>
                </div>
            </div>

            <h2 class="text-2xl text-slate-400 font-semibold group">
                <span>or submit a form </span> 
                <Icon name="icon-park-outline:arrow-right-down" class="text-slate-500 transition duration-200 group-hover:rotate-45 lg:group-hover:-rotate-45" />
            </h2>
        </div>

        <form id="contact-form" name="input" action="" method="post">
            <div class="">
                <div class="text-left flex flex-col justify-start">
                    <div class="form-group my-4">
                        <label for="sender">Name:</label>
                        <input type="text" class="form-textbox" id="sender" placeholder="E.g. John D..." aria-describedby="emailHelp" name="name" v-model="sender">
                    </div>
                    <div class="form-group my-4">
                        <label for="email-ad">Email:*</label>
                        <input type="email" class="form-textbox" id="email-ad" placeholder="E.g. johnd@mymail.com..." aria-describedby="emailHelp" name="_replyto" required>
                    </div>
                    <div class="form-group my-4">
                        <label for="subject">Subject: <small id="subtext">{{ sender + subject }}</small></label>
                        <select id="subject" class="form-textbox" name="subject" v-model="subject">
                            <option disabled class="text-gray-400" value="">- Select subject -</option>
                            <option value="Professional enquiry (vercel)">Professional inquiry</option>
                            <option value="Casual talk (vercel)">Casual talk</option>
                        </select>
                        <input type="hidden" id="form-subject" name="_subject" value="Via oddwordvue">
                    </div>
                </div>
            
                <div class="text-left my-4">
                    <div class="form-group">
                        <label for="mail-msg">Message:*</label>
                        <textarea name="message" id="#mail-msg" class="form-textbox" cols="30" rows="6" placeholder="Please enter your message here" required></textarea>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <div class="inline-flex justify-center items-center gap-4 text-xl text-white bg-orange-gradient border-2 border-slate-900 hover:border-white hover:bg-white active:border-4 rounded-lg cursor-pointer w-auto m-8 py-2 px-4">
                    <Icon name="icon-park-outline:send-email" />
                    <input type="submit" value="Send" class="font-bold cursor-pointer">
                </div>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                sender: '',
                subject: '( Unspecified subject )',
                socials: [
                    {
                        icon: 'simple-icons:twitter',
                        url: 'https://twitter.com/oddward_io'
                    },
                    {
                        icon: 'simple-icons:instagram',
                        url: 'https://instagram.com/oddward_io'
                    },
                    {
                        icon: 'simple-icons:mastodon',
                        url: 'https://universodon.social/@oddward_io'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .mail-btn {
        @apply flex items-center gap-4 font-semibold border-2 border-slate-500 hover:bg-slate-600 hover:text-blue-gradient active:border-slate-300 rounded-lg py-2 px-4
    }
    label {
        @apply text-xl text-slate-400 font-semibold
    }
    .form-textbox {
        @apply rounded-md bg-slate-400 text-slate-700 py-2 px-4 hover:bg-gray-300 focus:bg-slate-100 placeholder:text-slate-700
    }
    .form-group {
        @apply flex flex-col gap-2
    }
</style>
