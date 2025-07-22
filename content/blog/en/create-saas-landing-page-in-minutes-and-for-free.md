---
title: "Create a SaaS landing page in minutes, deploy it for free"
excerpt: "My AI-powered workflow to create and deploy application landing pages in a few minutes and for free."
date: "2025-07-22"
published: true
---

After creating multiple apps quickly using AI, I needed website landing pages as well as a few other pages such as privacy policy and terms and conditions to publish it to the app stores. Using the right tools, I'm now able to do it **in a few minutes and 100% free**.

## The tech stack and development workflow

ChatGPT → Lovable → GitHub → AI-powered IDE (Cursor, Claude Code, Windsurf, etc) → Vercel

### ChatGPT
I often use ChatGPT to brainstorm about designs and architectures, as well as prompt fine tuning. As we'll use Lovable at next steps, and there are limited free credits, we can't afford to iterate a lot in Lovable - **except if you want to pay for it, which is completely fine**. As my personal usage of Lovable is restricted to those websites, it's not worth it in my case. So I need a great prompt that will deliver the expected design. I use ChatGPT to create and fine tune that prompt. A great starting point is to identity landing pages you like, and ask ChatGPT to describe it. Then, ask to create a prompt for an AI based on that description. It will be quite detailed.

### Lovable
**Lovable** is a Swedish start-up that just raised money based on $200M valorisation. It all started with a gpt-engineer project on GitHub (https://github.com/AntonOsika/gpt-engineer) that quickly went viral. The developer then decided to turn it into a company - Lovable. It's using AI to create web applications - including database integration (it's using Supabase, which is an amazing tool that host PostgreSQL databases and have an SDK). Lovable is known as one of the best prompt-to-software tool with Bolt.new. I usually find those tools limited as it's purely no-code, but for simple websites it's great. Just paste the prompt and see the result. Refine. Iterate 2-3 times. Focus on the structure and design - don't worry about texts or small padding issues. Once you like it, export the code to GitHub.

### AI-powered IDE
Clone the repository locally and open it with an AI-powered IDE like Cursor. Then, you can focus on the details and make the changes you need as you should have more tokens available. Make it perfect, eventually create new pages, change favicon (it's Lovable's one by default), and so on. Commit and push your changes.

### Vercel
You're all good to get it deployed! Vercel is a great option to host websites for small projects and very easily. Connect to Vercel (you can even use GitHub authentication!), import your GitHub project (it will detect the language) and click on Deploy. Don't forget to add environment variables if you have any - you can directly import the .env file. If deployment fails, copy the error into your AI IDE to fix it and push your changes : it will automatically redeploy it. Then you're all set! You can configure a custom domain in Vercel too.

## Conclusion
Using this workflow, you'll be able to create a SaaS landing page and eventually a few other pages in 5 to 10 minutes and deploy it completely for free! I've use it for those two apps :
- https://www.pickleapp.io
- https://www.bulletsapp.io