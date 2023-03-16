<template>
    <div class="grid grid-cols-2">
        <div>
            <h2 class="text-3xl">Message me</h2>
            <div class="flex gap-4 text-2xl mb-8">
                <a href="https://twitter.com/oddward_io"><Icon name="simple-icons:twitter" /></a>
                <a href="https://instagram.com/mugtaba.g"><Icon name="simple-icons:instagram" /></a>
                <a href="https://universodon.social/@oddward"><Icon name="simple-icons:mastodon" /></a>
            </div>

            <h2 class="text-3xl">Write an email</h2>
            <div class="flex gap-4 text-2xl mb-8">
                <a href="https://twitter.com/oddward_io"><Icon name="simple-icons:twitter" />Personal inquiry</a>
                <a href="https://instagram.com/mugtaba.g"><Icon name="simple-icons:instagram" />Professional inquiry</a>
            </div>

            <h2 class="text-3xl">Submit form <Icon name="icon-park-outline:arrow-right" class="text-slate-500" /></h2>
        </div>

        <form id="contact-form" name="input" action="" method="post">
            <div class="">
                <div class="text-left flex flex-col justify-start">
                    <div class="form-group mt-8">
                        <label for="sender">Name:</label><br>
                        <input type="text" class="form-textbox hover:bg-gray-100 w-full" id="sender" placeholder="Enter your name" aria-describedby="emailHelp" name="name">
                    </div>
                    <div class="form-group mt-8">
                        <label for="email-ad">Email:*</label><br>
                        <input type="email" class="form-textbox hover:bg-gray-100 w-full" id="email-ad" placeholder="Enter email address" aria-describedby="emailHelp" name="_replyto" required>
                    </div>
                    <div class="form-group mt-8">
                        <label for="subject">Subject: <small id="subtext"></small></label><br>
                        <select id="subject" class="form-textbox hover:bg-gray-100 w-full" name="subject">
                            <option selected class="text-gray-400">-- Select subject --</option>
                            <option value="Professional enquiry (ghub)">Professional enquiry</option>
                            <option value="Casual talk (ghub)">Casual talk</option>
                        </select>
                        <input type="hidden" id="form-subject" name="_subject" value="Via github page">
                    </div>
                </div>
            
                <div class="text-left mt-8">
                    <div class="form-group">
                        <label for="mail-msg">Message:*</label><br>
                        <textarea name="message" id="#mail-msg" class="form-textbox hover:bg-gray-100 w-full" cols="30" rows="10" placeholder="Please enter your message here" required></textarea>
                    </div>
                </div>
            </div>

            <div>
                <div class="bg-white hover:bg-black rounded-md">
                    <input type="submit" value="Send" class="text-orange-grad font-bold">
                </div>
            </div>
        </form>
    </div>
</template>