# Year 2 T-Level post OS learning 

Now you’ve completed your OS exams, you have ~ 2 months before the official end of the year. Here are some ways you can continue to learn and prepare for the next step (when you’re not clocking up your placement hours - and updating GrowFar). Pick one or more of the following. 

1. Agentic Development
2. Learn a new (programming) language
3. Do 50+ leetcode challenges

If you want something portfolio-friendly and current, pick agentic development.

If you want to broaden your technical range, learn a new language.

If you want more pure problem-solving and interview-style practice, pick the leetcode route.

Or if you can't choose, do several!

More details below.


## Agentic Development 

So far, you may have dabbled in AI assisted work, chat sessions, maybe a bit of copilot agent in VSCode, maybe some generative AI for images or video. 

This kind of AI use when it's related to programming is referred to as 'vibe coding'. For quick prototypes, or having fun, it can be great. For more important, long-lived or complex work there is a much better way of using AI!

Some of the benefits of Angetic development include:

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

For more details and an a starter repo to practice with, see [agentic-dev](./agentic-dev/agentic-dev.md).


### A simple starting workflow

1. Pick a project that is interesting, but still small enough to finish well.
2. Write a requirements and a short rules file.
3. Keep a checkpoint file for the current task and the work completed.
4. Work in small slices.
5. Run checks and tests as you go.
6. Commit regularly with git.

That is enough to make a big difference already, moving from using a single chat session.

First some terms:
- **Model**: Usually referring to a Large Language Model, in very basic terms, a fancy auto-complete. It can take in prompts, text files or other media, and generate responses based on that and its training data.
- **Agent**: A wrapper interface or harness (set of scaffolding code) around an LLM that allows the LLM to interact with its environment, execute commands, edit files, run code, etc. to act on behalf of a developer (you).

- **Prompt engineering**: The art of crafting prompts to get the best results from an LLM. This includes things like being specific and concise, providing context, and explaining requirements for output or output format, within a prompt or series of prompts to create productive dialogues with an agent.

- **Context window**: The amount of text (tokens) that an LLM can process at once. This includes the prompt, any additional context or input files, and the output. For example, if an LLM has a context window of 400k tokens, and your prompt and input files are 100k tokens (e.g. a few documentation files and a small code base), then the output can be at most 300k tokens.
- **Context engineering**: The art of managing the context window to get the best results from an LLM. This includes things like chunking input files (not dumping everything all in one file, but using different smaller, more specific files when needed), summarizing or extracting relevant information, using easier to process formats (e.g. md instead of pdf) and using techniques like retrieval augmented generation (RAG) to provide additional relevant context to the LLM, with discretion. 

Managing LLM context is important, because it affects the quality of LLM output. The fuller the context becomes, the more likely output quality is to drop. This is because the LLM has to process more information, and it can get overwhelmed, confused or forget more of the instructions or purpose of the work you've asked it to do. 

When you chat to an LLM, generally the whole chat history is included in the context, filling it up over time. In some tools there is also a process of compaction, where an agent will compress its context when it nears a threshold. This frees up space, but also risks losing important information, and can lead to a drop in output quality even though more context is available. So managing chat session length is another aspect of context engineering.

- **Harness engineering**: Going beyond managing context in a single chat session, harness engineering is about managing the behaviour, style, rules, processes and 'memory' of an agent, as well as the chat context.

### The basic harness idea

An agent is a type of harness around a model, but agents themselves often benefit from tighter guidance and control through their own 'harnesses'. Important rules for the model and agent to always follow go in one top level md file (e.g. .github/copilot-instructions.md or AGENTS.md in project root). Keep the file short and focused. The top level instructions file has special significance because it sits outside the normal back-and-forth chat context. If you want the agent to always discuss, explore alternative approaches and find agreement with you first before diving into a programming task, you should definitely add a rule for that in your instructions file. If you want the agent to always ask for clarification if it is unsure about a task, add that in the instructions file. If you want the agent to always write tests before implementing a feature, add that in the instructions file, etc.

If your project has a clear set of requirements or features, that should go in its own md file (e.g. instructions/requirements.md). The agent can refer to this when it needs to check a requirement or feature.

Required output style for front-end development? Put that in its own md file (e.g. instructions/frontend.md). Link to that from the main instructions md file. Same for back-end development. Same for communication style (so the agent doesn't default to being too verbose or chatty).

If there are specific processes you want the agent to follow, e.g. for debugging, or for implementing a new feature, which you would want to write a 'how to' guide for, this is a natural candidate for a SKILL.md file. The agent can refer to this when it needs to perform that kind of task, and you can update it over time as you learn better ways to do that task, or as the project evolves.

With all of these, you can and should update them over time as you learn more about the project, the project evolves and you tune your approach according to agent results.

### Session-to-session continuity

Then there is memory management. From one chat session to the next, normally not a lot is remembered (although that's starting to change now). If you continue a session, you'll have that chat in the context, but a new session generally starts fresh*. Using the above techniques and files gives you some continuity of requirements, process and style. But if you're working on a part of the project that might run over several sessions, it's useful to keep a separate checkpoint.md file that contains a curated summary of that task, the approach(s) taken, decisions made, and next steps. The agent can create and update this for you at the end of each session and read it at the beginning of the next session. Without doing this, LLMs have a tendency to drift off course, even if you have a clear set of instructions and guidelines. 

In addition to specific task or feature checkpoint files, a whole project devlog md file is helpful to track progress, decisions and directions. The agent can also update this at the end of each session (have a rule to ensure a consistent format and style that works for you).

*Agent memory. Frontier models and agents are now offering project based memory features. This can be a positive in reducing the amount of repetition required in chats, but this memory is usually opaque to the developer, so it's not possible to inspect for correctness or edit. It's also tied to a specific agent or model. For those reasons it's recommended still to use md file based 'memory' as outlined above. 

### When extra structure helps

Lastly, if your project is complex enough to need multiple components or have some complex 'business logic' then a 'spec driven' approach can be helpful. This is where you first develop a detailed spec for how the parts of your project behave and interact (you can think of it a bit like a set of pseudo code for the project) and of course you can get the agent to help you do this, through a collaborative process. After you have hashed out and refined the spec, then you'll have a much clearer and more detailed and persistent blueprint to generate code from. Again, this would go in its own md file(s) e.g. (instructions/spec.md).

Even with all the above, it's important to keep in mind that LLMs are not perfect, and they can and do make mistakes, get confused, or produce low quality output. So it's important to always review and test the code generated by the agent, and to be prepared to debug and fix issues as they arise. For this reason it's a good idea to be using a language (or framework) that you're already somewhat familiar with for your project, so that you can more easily review and debug the code generated by the agent.

At a minimum, you should be checking:

- what files changed
- whether the change actually matches the requirement
- whether the named check or test passes
- whether the code still makes sense to you
- whether a new dependency or wider change has been introduced without good reason

So that's a very brief introduction to agentic development and harness engineering. These approaches are where the industry is heading and actually using today, so they are becoming increasingly important for software developers to understand and be proficient with.

**There is a template repo for you to use to practice this with your own project. See the agentic-dev folder**

### Choosing a project for agent development

In terms of choosing a project to put agentic development into practice, it can be anything you like but it should be complex enough to require multiple sessions, multiple source files, use of documentation and 3rd party libraries, etc. so that you can practice the techniques above and see the difference they make compared with attempting to vibe code it. It should also be something you're interested in, so that you stay motivated to work on it over the next couple of months and could potentially use it as a portfolio piece.

At the same time, it still needs to be small enough to finish, test properly, and explain clearly.

One project to avoid would probably be a simple website or a 'todo app' because these are so common that there are a lot of examples and templates out there, so you won't get as much value from practicing the techniques above on these kinds of projects and it's unlikely to impress an employer.

Always use version management (git) with your project, and make regular commits with good commit messages. This will help you track your progress, and also give you a nice commit history to show to employers if you use this project as a portfolio piece.

## Learn a new (programming) language

Learning a new programming language can be a great way to expand your skill set and make you more versatile as a developer. It can also be a fun and rewarding challenge which not only gives you a new tool to work with, but also can give you a new or deeper perspective on programming concepts and problem-solving approaches.

When choosing a new language to learn, consider what kind of projects you want to work on in the future, and what languages are commonly used in those areas. For example, if you're interested in systems, games or embedded programming, Rust or C++ might be good options. If you're interested in native app development, Swift or Kotlin (or again Rust) might be good options. And there are loads more options than that, so do some research and choose something that excites you and build up to a little project. Again avoid simple websites or todo apps, and try to choose something that challenges you and that there isn't already loads of complete templates or solutions already out there for. Could be a little game, web app, command line tool, etc.

A sensible loop here would be:

1. Learn the basic syntax and tooling.
2. Do a few tiny exercises.
3. Build one small project.
4. Keep notes on what feels different from languages you already know.
5. Then start using AI support more once you can judge the answers properly.

Avoid using AI assistance for the new language, at least for the first few weeks - except for basic syntax questions or accessing or explaining the documentation. This will force you to learn and understand the syntax, semantics and idioms of the language, and to solve problems and debug issues on your own. You can use resources like official documentation, tutorials, forums and communities to help you learn and troubleshoot as you go. After a few weeks of getting comfortable with the language, then you can start to experiment with using AI assistance to see how it can help you be more productive and efficient with that language.

## Do 50+ leetcode challenges

Leetcode is a popular platform for practicing coding problems and preparing for technical interviews. Doing 50+ leetcode challenges will help you improve your problem-solving skills, learn new algorithms and data structures, and get more comfortable with coding under time constraints. You'll start to notice common patterns and techniques that can be applied to a wide range of problems, which will make you more efficient and effective in solving programming challenges in the future.

Start with the easiest problems first, ensure you get those right before picking tougher ones. And do a variety of problems, not just one type. 

Also, don't just aim to finish lots of questions. Make sure you can explain your solution, say roughly what its time and space cost is, and revisit problems you got wrong.

Leetcode has a lot of value for learning and practice and also still value for interview prep - even though there are ways of cheating it. Just having practice with this kind of problem solving and coding under time constraints will help with most kinds of technical interviews, even if the specific problems you get asked in an interview are not the same as the ones you practiced on leetcode, even if having a high score on leetcode doesn't necessarily correlate with being a better software developer these days.

https://leetcode.com/

 