# Agentic Development - how to get started

This resource was originally created for T-Level software developer students to learn about agentic development as a final year, post exam project, before they go to university or into work. However, it is also suitable for any software developer who wants to learn about and practice agentic development on a real project. The approaches detailed here are being used successfully on real projects. Additional guidance has been added for teachers wanting to use harnesses for generating learning resources.

See contents of `audience/` for more specific advice for software developers and T-Level students.

**For a general overview of agentic development and its benefits, see [`agentic-dev.md`](./agentic-dev.md). If you're unsure about what different terms mean, or if it's worth the effort, definitely check that out first.**

Use this repo to practise agentic development on a real project without relying on long, fragile chat history.

There's a fair bit in here to read and get your head around. It's all designed to help real development though and will make for massively better results than YOLO vibe coding. 

The repo is setup for use with VSCode and github Copilot (and access to any model available through that). However the structure and approaches should be easily adaptable (a few file or dir name changes) to other environments and tools (e.g. Claude Code, Codex, Antigravity), and the general principles will still apply.

Even if all you start with is using the main agent instructions file [.github/copilot-instructions.md](./.github/copilot-instructions.md, or AGENTS.md) and the definition-of-done file, you'll see a huge difference. 

The content in the md files in .github/ and docs/ are just an example starting point. You can add to it, change it, or remove parts that don't work for you. The main thing is to have a clear and persistent set of instructions and rules for the agent to follow (so it produces more consistent and reliable results), and a clear way to record what you're doing and what the state of the project is. The rest is just scaffolding to help you do that.

The optional web-testing.md is for when you have a web app with real browser flows and want to add Playwright tests for those flows.

The custom agents in [.github/agents](./.github/agents/) are an optional extra layer. They do not replace the repo harness. They just make it quicker to switch between clear roles such as planning, implementing and reviewing.

## Repo Harness Vs Custom Agents

The repo harness is still the main thing here. That means the docs, instructions, prompts and skills that define how the project should be worked on.

Custom agents are a thinner layer on top. They are useful when you want the assistant to stay in a specific role or mode without you having to restate it each time.

- The harness stores the project truth: requirements, current state, done criteria, prompts and workflows.
- Custom agents store role behaviour: planner, implementer, reviewer, and the handoff between them.
- If an agent and the repo docs ever disagree, fix the docs first and then update the agent.
- If you are just starting out, you can ignore the agents completely and still get great results from the harness.

## Benefits Of Custom Agents

- Faster switching between planning, implementing and reviewing.
- Less need to repeat the same setup instructions in every chat.
- More consistent behaviour for each type of task.
- A cleaner way to limit or narrow the tools used for a task.
- Better support for handoffs such as plan first, implement second, review last.

## When To Use A Prompt, Skill, Or Agent

These three things are related, but they are not the same.

- Use a prompt when you want a quick one-off task from the menu, such as tightening requirements or planning the next slice.
- Use a skill when you want a repeatable workflow, such as implementing a feature, debugging a failure, or adding a browser test.
- Use an agent when you want the assistant to stay in a clear role or mode across the whole chat, such as planner, implementer, reviewer, or web tester.

In short:

- Prompt = quick task
- Skill = reusable workflow
- Agent = reusable role

## How To Use The Harness

Use the repo layers in this order:

- Start with the main instructions file in [.github/copilot-instructions.md](./.github/copilot-instructions.md). This is the always-on rules layer.
- Keep your project truth in [docs/requirements.md](./docs/requirements.md), [docs/checkpoint.md](./docs/checkpoint.md), and [docs/devlog.md](./docs/devlog.md). Update those when the plan, recent state, checks, or next likely slice changes.
- Use a prompt from [.github/prompts](./.github/prompts/) when you want a quick one-off task such as tightening requirements or planning the next slice.
- Use a skill from [.github/skills](./.github/skills/) when you want the agent to follow a repeatable workflow such as implementing a feature, debugging a failure, or ending a session cleanly.
- Use a custom agent from [.github/agents](./.github/agents/) only when you want the whole chat to stay in one role such as planner, implementer, reviewer, or web tester.
- Treat [.github/instructions](./.github/instructions/) as supporting guidance for specific kinds of work, not as the main project record.
- Use content of [docs/](docs/) for more project specific documentation and instructions.

If you are new to this, keep it simple:

1. Fill in [docs/requirements.md](./docs/requirements.md).
2. Use [docs/checkpoint.md](./docs/checkpoint.md) to capture the current task, what now works, the last check run, and the next prompt or likely slice.
3. Use a prompt to tighten requirements or plan one small slice.
4. Implement that slice with the default agent or the `implementer` agent.
5. Run one check, then update [docs/devlog.md](./docs/devlog.md) and [docs/checkpoint.md](./docs/checkpoint.md).

## Example Custom Agent Flow

For using the custom agents (select the agent from the agent dropdown in chat), one sensible way to work on a feature is:

1. Use the `planner` agent to choose the next small slice and name one validation check.
2. Switch to the `implementer` agent to build just that slice and run the check.
3. Switch to the `reviewer` agent to look for bugs, regressions, missing tests, or scope drift.
4. If the feature is a real web flow, switch to the `web-tester` agent to add one small Playwright smoke test.

You do not have to use all of these every time. The point is to make the roles clear when the task needs them.

## First Session (after you've cloned the repo)

1. Read [docs/project-chooser.md](./docs/project-chooser.md) and pick one project idea.
2. Replace the placeholders in [docs/requirements.md](./docs/requirements.md).
3. Open [docs/definition-of-done.md](./docs/definition-of-done.md) so quality stays visible.
4. Choose either [examples/python-starter](./examples/python-starter/) or [examples/node-starter](./examples/node-starter/) if you want a tiny runnable demo. You'll need to add some requirements for the demo to the requirements.md file - see the example README.md files in those folders for ideas.
5. Start with one feature that can be built and checked in one sitting.

## Repo Map

- [.github/copilot-instructions.md](./.github/copilot-instructions.md): always-on rules for the agent.
- [.github/instructions](./.github/instructions/): focused guidance the agent can load when relevant.
- [.github/agents](./.github/agents/): optional role-based custom agents for planning, implementing, reviewing, and web testing.
- [.github/prompts](./.github/prompts/): reusable prompt menu for common tasks.
- [.github/skills](./.github/skills/): repeatable workflows for feature work, debugging, and session wrap-up.
- [docs](./docs/): project requirements, spec notes, checkpoint, dev log, and quality bar.
- [docs/web-testing.md](./docs/web-testing.md): optional Playwright add-on for real web app user journeys.
- [examples](./examples/): tiny Python and Node starters with tests for software dev applications, and resource-gen with guidance for using harnesses for teachers wanting to generate learning resources.

## Working Loop (when you've decided on a project and have the basics set up)

1. Review the current [docs/checkpoint.md](./docs/checkpoint.md).
2. Use a prompt from [.github/prompts](./.github/prompts/), switch to a custom agent in [.github/agents](./.github/agents/), or ask the agent for the smallest useful slice.
3. Implement one change.
4. Run one relevant check.
5. Record what changed in [docs/devlog.md](./docs/devlog.md).
6. Update [docs/checkpoint.md](./docs/checkpoint.md) before ending the session.

## Rule Of Thumb

If the chat is getting long, the task is too vague, or the agent starts repeating itself, stop and tighten the docs before you write more code.

If during a session you find yourself asking the agent to do something that is not in the docs, stop and add it to the docs before asking again. Similarly, if the agent gets confused or there is ambiguity in the instructions or requirements, stop and clarify them in the docs. This way the docs get more complete and useful over time, and you avoid having to rely on chat history or repeating yourself.

## Optional Add-On

If your project is a web app with real browser flows, read [docs/web-testing.md](./docs/web-testing.md) before adding Playwright. Then start with one or two high-value tests.

If you want a role-specific mode for that work, switch to the optional [web-tester agent](./.github/agents/web-tester.agent.md).
