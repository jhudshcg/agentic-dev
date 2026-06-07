# Using a harness to generate teaching resources

Decent rusults can be achieved with a simplified harness, using a top level AGENTS.md, learner.md (for outlining the type of learners the resources are aimed at) and a checkpoint.md file(s) for persisting session to session state is a viewing and editable form.

A coursespec.md should be used containing the course specification (take care when converting from PDF that the structure is correct and that any important images/diagrams are converted to model readable format and referenced in the md file).

If there is an exam focus to the resources then SAM or past papers and matching markschemes should be converted to md format and referenced from AGENTS.md

Even with a well honed harness, and using frontier models, expect to still need to do a lot of checking and correcting of output. Accuracy, tone, consistency, clarity, all those things will likely be off in places.

However, if you put a chunk of work into correcting output and updating the harness for the first few modules/topics or sub-topics, then use those improved examples as additional references in the AGENTS.md file. After referencing those good examples you can also show some clearly labled counter-examples of what you don't want. If you do those things then improvements should be seen and less manual fixes will be required.

For an example of this in practice, see https://github.com/jhudshcg/Strudel-l1 
