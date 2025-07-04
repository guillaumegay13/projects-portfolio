---
title: "Figma Design to Mobile App: a New Development Workflow"
excerpt: "Discover how I implemented a complete Figma design for a mobile app in just 1 hour using AI-powered tools and a specific workflow."
date: "2025-07-04"
published: true
---

I recently tried a new revolutionary workflow that helped me implement a whole Figma design for a mobile app **in a few hours**.

## The tools I used

### Claude Code
The heart of this workflow is **Claude Code**, an AI-powered coding assistant. It's a terminal command tool that also has a VS Code extension, allowing to review, approve or reject code changes like git diff. Claude Code extension transform VS Code in AI-powered IDE like Cursor or Windsurf.
Claude Code understands context, can analyze entire codebases, and generates complete implementations based on your requirements. The power of this tool is mostly its models created by Anthropic - especially Claude 4 Opus that is for me the best for coding right now. The reasoning flow is also impressive, as Claude Code will split complex tasks into to-do lists and process each point. It can also run terminal commands such as grep, ls, or even run python, npm, etc, to analyze the outputs and recursively do another task. Finally, Claude Code can also connect to MCP (Model Context Protocol, created by Anthropic itself!) servers.

### Figma MCP
**Figma MCP** is the bridge between design and development. MCP is a protocol that allows AI models to interact with external tools and services. With Figma MCP, Claude Code can directly access your Figma designs, understand component structures, extract design tokens, and translate visual elements into code. This eliminates the manual process of inspecting designs, copying values, and translating them into implementation. Figma MCP includes tools like get_image() to provide designs to Claude multimodal models, or get_code() to retrieve components code from the Figma Dev Mode. The LLM will then transform designs and code to targetted code language.

### Perplexity for Instant Solutions
When bugs appeared or I needed quick technical clarification, **Perplexity** became my go-to resource. It's just a faster way to go on Google and analyse the first 10 results from StackOverflow or GitHub forums. Perplexity do search requests and compact the most relevant result instantly. It's also reasonning, so it provides excellent results.

## Vibe Coding Tips

### 1. Know your tech stack **before** starting
- **Define your stack clearly**: React Native? Flutter? SwiftUI? If you don't know, brainstorm with ChatGPT about the best solutions for your use case and constraints.
- **Use a boilerplate**: Having a pre-configured starting point with your preferred libraries, folder structure, and patterns gives the AI crucial context. If you start from scratch, it'll become out of control very quickly. You won't master your codebase and it can create dramatic issues later.
- **Provide clear instructions**: The more specific your requirements, the better the output. No need to create huge prompts tho - just make sure to provide all the necessary information. The LLM doesn't know what you want by default.

### 2. Master the code review workflow
Claude Code allows you to approve, reject or always approve a command. For example, you can allow it to always approve 'ls' commands but not 'rm' commands. I advice to review as much as possible code changes thanks to the VS Code extension that makes it easy - similar to a git diff. You can request modifications to Claude Code if you don't like the output.

This workflow keeps you in control while moving at lightning speed.

### 3. Iterate at the speed of thought
- Make a request → Review the diff → Test immediately
- Use hot reloading to see changes instantly
- Modify instructions if the result not as expected

### 4. Context is king
- Run /init command at first to give to Claude some context - it'll analyze your codebase
- You can directly point files or folders to the LLM using the '@' command. If you already know which file to modify, provide it to the LLM, it will avoid to consume tokens to find it itself.
- The more **relevant** context you provide, the less assumptions the LLM will make (which is what you want, except if you don't know what you want)

### 5. Bottleneck management
It can happen that the LLM can't manage to deliver properly a request, even after multiple attempts and instruction amendements. In this case, take a step back. Have a think. Go read an article or a StackOverflow conversation about that specific component. It's time to be proactive for a bit. Yes, we **sometimes** still need to use our brain still!