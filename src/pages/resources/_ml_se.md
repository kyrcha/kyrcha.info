---
path: "/resources/machine-learning-software-engineering"
title: "Machine Learning for Software Engineering"
subtitle: "My machine learning resources"
---

This page contains my notes on several aspects of machine learning on software engineering.

### Machine Learning on Source Code

In this section I am collecting summary paragraphs of the resources (mainly the papers) found in the [awesome ml on src](https://github.com/src-d/awesome-machine-learning-on-source-code) repo by source{d}. Summaries are made out of Abstract-Introduction-Conclusions as a way of examining which papers are interesting or not, faster than reading the whole paper.


#### Program Synthesis and Induction

- **[NL2Bash: A Corpus and Semantic Parser for Natural Language Interface to the Linux Operating System](https://arxiv.org/abs/1802.08979v2)** - Xi Victoria Lin, Chenglong Wang, Luke Zettlemoyer, Michael D. Ernst, 2018.
  - _Summary_: NL2Bash provides a dataset (9K English-command pairs for 100 unique Bash utilities) and a baseline method for mapping English sentences to Bash commands. So imagine if you would do file manipulation, search or other scripting stating your goals in English. The work evaluates the Seq2seq, CopyNet and Tellina models. CopyNet seems to do the best at the sub-tokens level, obtaining top-1 command structure accuracy of 49% and top-1 full command accuracy of 36%.
  - _Tags_: semantic parsing (mapping natural language to formal representations)

