# About Agentic Development

This file contains an overview of current leading-edge approaches to using LLM models and agents to assist with software or web development.

The systematic approaches described here can also be adapted for agentic development in other areas, e.g. creative industry, education and product development. Essentially any area where there is a definable set of requirements, a process for working towards those requirements through the generation of artifacts, and a level of complexity that requires a systematic, multi-step and iterative approach, can benefit from agentic development.

## Who is this for?
 
If so far you have dabbled in AI assisted work, chat sessions, maybe a bit of copilot agent in VSCode, maybe some generative AI for images or video, but you want to take your AI skills further, this is for you.

If you've barely used AI at all, but are curious to learn how it could work for serious projects and have some coding, systems development or analysis experience, this is for you. 

Using a single chat session or relying solely on describing to an AI agent what you want it to make (without getting into the implementation details) is often referred to as 'vibe coding'. For quick prototypes, or having fun, it can be great. For more important, long-lived or complex code though, this approach usually does not work well. 

How do 'serious' projects benefit from AI assistance? This is what you will learn about and practice with a project of your own.

If you only take one thing from this guidance, let it be this: don't rely on one long chat. Give the agent a clear setup, do the work in small slices, check the work regulary and keep a detailed written record of what the project is meant to do and what you've done so far.


## Agentic Development 

### Benefits of agentic development

- Accelerate development of complex projects (or complete simple ones much faster)
- Less repeating yourself, going around in circles or breaking things.
- Generate more consistent and maintainable code, less slop.
- More focused and reliable results from the agent, with less drift between prompts.
- A clear record of what you've done, what changed, and what still needs work.
- A practical way to continue across multiple sessions without losing direction.
- Better scope control, so features stay smaller, clearer, and easier to test.
- A more consistent way to add checks and tests that actually match the changes you're making and the defined requirements.
- Faster recovery when the agent gets confused, guesses badly, or goes off track.
- A setup that gets more useful over time as you improve the docs, prompts, and workflow.

### Limitations of agentic development

AI is a skill amplifier. The power of what you know is amplified, but so it is too for what you don't know. If you can, say, make basic static webpages on your own and have little programming experience, and you want to go from there to making a multi-platform native app with account management, complex feature logic, data sync and real-time collaboration features, that's a huge knowledge and skill gap to bridge. When AI starts hallucinating, forgets old instructions, has gaps in its training data or makes suble reasoning errors, it's going to be VERY hard for you to spot, let alone fix that - because of the gap size. However, if you leverage AI to help you learn about the concepts, architecture and engineering principles involved in building that kind of system well (and AI can do a great job of identifying and explaining those things for you), and apply that with some intermediate projects before returning to make that dream app, then you're much more likely to succeed. So, 'mind the gap' - and a good agentic development approach can help you manage slightly larger gaps more safely.

The hype about AI being able to replace good software engineers is just wrong. Some businesses may be trying it, but it's already backfiring. Engineering skills, knowledge about data structures and algorithms, architectural choices and trade-offs, and the ability to design and build complex systems are still crucially important for human developers to have. Careful use of AI can help you learn about those things, and can help you apply that knowledge in practice with greater speed, but it won't replace the need for that knowledge and skill. Most of the skills and practices that made excellent software developers excellent back in the day (pre-AI), are the same skills and practices that will help you make great software today.

There is also a lot of promotion for creating long runing independent tasks for AI agents - because it burns more tokens, and they bill by the token (and perhaps also because that ability would attract more businesses seeking to reduce labour costs). But even if what comes out the other end appears like the thing you asked for, the more of a blackbox a system becomes (as it does if you're minimally involved in the development process and architectural decisions), the harder it is to verify, secure and maintain. Those are not desirable properties for systems that people depend on and which impact health, safety or livelihoods. So try to stay in the development loop, develop and agree on a plan with the AI, before you begin implementation - for the whole system, but also for individual features. Then review the implementation carefully, and test it against the plan and requirements. Hours you spend doing that now are many more hours you save later on debugging, fixing and trying to maintain a system that is not fit for purpose.

### A simple starting workflow

1. Pick a project that is interesting, but still small enough to finish well in the time available.
2. Write a requirements and a short rules file 
3. Keep a checkpoint file for the current task and the work completed.
4. Work in small slices.
5. Run checks and tests as you go.
6. Commit regularly with git.

That is enough to make a big difference already, moving from using a single chat session.

With most of the steps above, AI can itself help you, especially for bouncing ideas around and drafting or maintaing documents. But in the case of the requirements and rules files, it's a good idea to write the first draft yourself, so you can get clear on what you want to build and how you want to work with the AI. Similarly for the checkpoint or devlog files, AI might maintain the file, but ensure you check regularly and correct any AI generated content that is inaccurate or not helpful. The more accurate and clear the instructions and records you have, the better the AI will be able to help you (and the more useful your records will be for you when you return to the project after a break).

### Common Terms

Before we get more into the above, here are some terms which are useful to understand in the context of agentic development:

- **Model**: Usually referring to a Large Language Model (LLM), which in very basic terms is a fancy auto-complete. It can take in prompts, text files or other media, and generate responses based on that and its training data. Frontier models are able to some extent to follow instructions, reason and evaluate their own output before producing a final response. But they are still a long way off the current hype about their abilities.

- **Agent**: A wrapper interface or harness (set of scaffolding code) around a model that allows the model to interact with its environment, execute commands, edit files, run code, etc. to act on behalf of a developer (you).

- **Prompt engineering**: The art of crafting prompts to get the best results from an LLM. This includes things like being specific and concise, providing context, and explaining requirements for output or output format, within a prompt or series of prompts to create productive dialogues with an agent.

- **Context window**: The amount of text (tokens) that an LLM can process at once. This includes the prompt, any additional context or input files, and the output. For example, if an LLM has a context window of 400k tokens, and your prompt and input files are 100k tokens (e.g. a few documentation files and a small code base), then the output can be at most 300k tokens.

- **Context engineering**: The art of managing the context window to get the best results from an LLM. This includes things like chunking input files (not dumping everything all in one file, but using different smaller, more specific files when needed), summarizing or extracting relevant information, using easier to process formats (e.g. md instead of pdf) and using techniques like retrieval augmented generation (RAG) to provide additional relevant context to the LLM, with discretion. 

Managing LLM context is important, because it affects the quality of LLM output. The fuller the context becomes, the more likely output quality is to drop. This is because the LLM has to process more information, and it can get overwhelmed, confused or forget more of the instructions or purpose of the work you've asked it to do. 

When you chat to an LLM, generally the whole chat history is included in the context, filling it up over time. In some tools there is also a process of compaction, where a model will compress its context when it nears a threshold. This frees up space, but also risks losing important information, and can lead to a drop in output quality even though more context is available. So managing chat session length is another aspect of context engineering.

- **Harness engineering**: Going beyond managing context in a single chat session, harness engineering is about managing the behaviour, style, rules, processes and 'memory' of an agent and model, as well as the chat context. Making a harness can refer to making an agent, but more often for a regular developer it refers to the process of creating and maintaining the instructions, rules, requirements, style guides, checklists, processes and 'memory' files that an agent can refer to when working on a project. This is important because it allows you to have a persistent and clear set of instructions and guidelines for the agent to follow, which can lead to more consistent and reliable results. It also allows you to have a clear record of what you've done, what changed, and what still needs work, which is crucial for continuing across multiple sessions without losing direction.

Harnesses can be project/repo specific, but they can also be built around reusable workflows, systems, roles or processes which could be used across multiple projects.

### The basic harness idea

An agent is a type of harness around a model, but agents themselves often benefit from tighter guidance and control through their own 'harnesses'. Important rules for the model and agent to always follow go in one top level md file (e.g. .github/copilot-instructions.md or AGENTS.md in project root). Keep the file short and focused. The top level instructions file has special significance because it sits outside the normal back-and-forth chat context. If you want the agent to always discuss, explore alternative approaches and find agreement with you first before diving into a programming task and then always test afterwards, you should definitely add a rule for that in your instructions file. This is a basic Plan - Implement - Test cycle, generally a good idea! If you want the agent to always ask for clarification if it is unsure about a task, instead of guessing, add that in the instructions file. If you want the agent to always write tests before implementing a feature, add that in the instructions file, etc.

If your project has a clear set of requirements or features, that should go in its own md file (e.g. instructions/requirements.md). The agent can refer to this when it needs to check a requirement or feature.

Do you require a specific code and design style for front-end development? Put that in its own md file (e.g. instructions/frontend.md). Then link to that from the main instructions md file, so the agent knows where to look. Same for back-end development. Same for communication style (so the agent doesn't default to being too verbose or chatty).

If there are specific processes you want the agent to follow, e.g. for debugging, or for implementing a new feature, which you would want to write a 'how to' guide for, this is a natural candidate for a SKILL.md file. The agent can refer to this when it needs to perform that kind of task, and you can update it over time as you learn better ways to do that task, or as the project evolves.

If you want to the agent to always do something before or after it process a prompt, this can be achieved with a hook, which is a script guaranteed to run at those times. For example, you might want the agent to always run a test suite after it implements a feature, or to always update a checkpoint file if particular source files have changed. This can be achieved with hooks.

With all of these, you can and should update them over time as you learn more about the project, the project evolves and you tune your approach according to agent results.

### Session-to-session continuity (memory)

Then there is memory management. From one chat session to the next, normally not a lot is remembered (although that's starting to change now). If you continue a session, you'll have that chat in the context, but a new session generally starts fresh*. Using the above techniques and files gives you some continuity of requirements, process and style. But if you're working on a part of the project that might run over several sessions, it's useful to keep a separate checkpoint.md file that contains a curated summary of that task, the approach(s) taken, decisions made, and next steps. The agent can create and update this for you at the end of each session and read it at the beginning of the next session. Without doing this, LLMs have a tendency to drift off course, even if you have a clear set of instructions and guidelines. 

In addition to specific task or feature checkpoint files, a whole project devlog md file is helpful to track progress, decisions and directions. The agent can also update this at the end of each session (have a rule to ensure a consistent format and style that works for you).

*Agent memory. Frontier models and agents are now offering project/repo based memory features. This can be a positive in reducing the amount of repetition required in chats, but this memory is usually opaque to the developer, so it's not possible to inspect for correctness or edit. It's also tied to a specific agent or model. For those reasons it's recommended still to use md file based 'memory' as outlined above. 

### When extra structure helps

Lastly, if your project is complex enough to need multiple components or have some complex 'business logic' then a 'spec driven' approach can be helpful. This is where you first develop a detailed spec for how the parts of your project behave and interact (you can think of it a bit like a set of pseudo code for the project) and of course you can get the agent to help you do this, through a collaborative process. After you have hashed out and refined the spec, then you'll have a much clearer and more detailed and persistent blueprint to generate code from. Again, this would go in its own md file(s) e.g. (instructions/spec.md).

Even with all the above, it's important to keep in mind that LLMs are not perfect, and they can and do make mistakes, get confused, or produce low quality output. Always review and test the code generated by the agent, and be prepared to debug and fix issues as they arise. For this reason it's a good idea to be using a language (or framework) that you're already somewhat familiar with for your project.

At a minimum, you should be checking:

- what files changed
- whether the change actually matches the requirement
- whether the named check or test passes
- whether the code still makes sense to you
- whether a new dependency or wider change has been introduced without good reason


### Choosing a project for agent development

In terms of choosing a project to put agentic development into practice, it can be anything you like but it should be complex enough to require multiple sessions, multiple source files, use of documentation and 3rd party libraries, etc. so that you can practice the techniques above and see the difference they make compared with attempting to vibe code it, or do it all by hand. It should also be something you're interested in, so that you stay motivated to work on it over the time you've planned, and something you could potentially use as a portfolio piece.

At the same time, it still needs to be small enough to finish, test properly, and understand clearly.

One project to avoid would probably be a simple website or a 'todo app' because these are so common that there are a lot of examples and templates out there, so you won't get as much value from practicing the techniques above on these kinds of projects and it's unlikely to impress an employer.

Always use version management (git) with your project, and make regular commits with good commit messages. This will help you track your progress, be able to revert the repo when AI falls over and deletes stuff, and also give you a nice commit history to show to employers if you use this project as a portfolio piece.

### Ready to start

So that's a very brief introduction to agentic development and harness engineering. These approaches are where the industry is heading and in places actually using today, so they are becoming increasingly important for software developers to understand and be proficient with.

**There is a template repo for you to use to practice this with your own project. See the agentic-dev folder**

Start with the README.md in that folder, which has more detailed guidance on how to use the repo and the different files in it.
