# Using a harness to generate teaching resources

Decent results can be achieved with a simplified harness, using a top level AGENTS.md, learner.md (for outlining the type of learners the resources are aimed at) and a checkpoint.md file(s) for persisting session to session state and direction in a viewable and editable form.

A coursespec.md should be used and referenced from AGENTS.md, containing the course specification (take care when converting from PDF that the structure is correct and that any important images/diagrams are converted to model readable format and referenced in the md file).

If there is an exam focus to the resources then SAM or past papers and matching markschemes should be converted to md format and referenced from AGENTS.md

Even with a well honed harness, and using frontier models, expect to still need to do a lot of checking and correcting of output. Accuracy, tone, consistency, clarity, all those things will likely be off in places.

However, if you put a chunk of work into correcting output and updating the harness for the first few modules/topics or sub-topics, then use those improved examples as additional references in the AGENTS.md file. After referencing those good examples you can also show some clearly labled counter-examples of what you don't want. If you do those things then improvements should be seen and less manual fixes will be required.

If your resources should consist of many files with a consistent style or layout, break the style rules out into a separate md file. If there are any components of the resources that are common, have those components actually defined in one place where possible and linked to from where they are used. E.g. if there is css involved, have those css files created in one place and linked from the resources where they're needed, rather than inlining the css.

For an example of this in practice, see https://github.com/jhudshcg/Strudel-l1 

Here is an example structure that could be used to help generate a resource set for an entire spec with a mix of exam and project based assessment, in reviewed stages:

- AGENTS.md  // detail rules for working, dos and don'ts, and any step by step processes to be followed. Use this file to reference other docs and require the use of checkpoint files.
- docs/ // put resource set specific guidance and reference material in here
  -  coursespec.md   // carefully checked md format version of the course specification 
  -  assessment_ref/  // put reference assessment material for the agent to study, in order to match style, topics and level of questions, when it generates new questions, mark schemes and projects as part of learning resources
    -  paper1_a.md
    -  paper2_a.md
    -  paper1_b.md
    -  paper2_b.md
    -  paper1_c.md
    -  paper2_c.md
    -  paper1_a_ms.md
    -  paper2_a_ms.md
    -  paper1_b_ms.md
    -  paper2_b_ms.md
    -  paper1_c_ms.md
    -  paper2_c_ms.md
    -  project1_rubric.md
    -  project2_rubric.md
    -  ...
  -  checkpoint_<date1>.md  // persist state and direction between sessions relating work on resources
  -  checkpoint_<date2>.md  // use different dated checkpoint files to manage work on different dates. alternatively can divide checkpoints by resource features.
  -  ...
  - learner_profile.md  // describe the level and type of student which the resources are being make for
  - requirements.md   // detail the objective for the resource set, and the requirements for the resources to be generated, including any specific requirements for style, tone, format, structure, content, length etc. that should be followed across the resource set. This file can be referenced from AGENTS.md and checkpoint files to help guide generation and maintain consistency across the resource set.
  - resource_set_template.md  // more detailed template (if needed) for the type and structure of resources to be made, including naming conventions, types and number of files for each subtopic, sections to include in each type of file, how many exam style question to generate for each activities file, styles to (re)use, etc.
- resources/   // contents of folder to be generated or added to by the agent
  - (topic)/
    - (subtopic)/
      - (resource_title1).md
      - (resource_title2).md
      - ...
      - answers.md
      - ...
      - common_mistakes.md
      - condensed.md
      - flashcards.html
    - ...
  - ...
  - style.css  // if needed, have a single css file that can be linked to from the any generated html resources, rather than inlining css in each resource file. This also allows for easier updating of style across the resource set, by just updating one css file.

       
