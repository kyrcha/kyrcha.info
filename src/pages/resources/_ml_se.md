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
  - _Tags_: semantic parsing (mapping natural language to machine-interpretable formal representations), nl2code (natural language to code)
- **[Coarse-to-Fine Decoding for Neural Semantic Parsing](https://arxiv.org/pdf/1805.04793.pdf)** - Li Dong, Mirella Lapata, ACL 2018.
  - _Summary_: The paper proposes a neural network architecture (_coarse-to-fine_) which decomposes the semantic parsing process into two stages. In the first stage the decoder produces a rough sketch of the meaning representation (e.g. executable queries or logical forms), while in the second step the decoder fills in missing detailes conditioning both on the natural language input and the sketch itself. As an example, given the table schema of the database and the natural language: _"What record company did conductor Mikhail Snitko record for after 1996?"_ you go into the sketch: `WHERE > AND =` and then into the structured meaning: `SELECT Record Company WHERE (Year ofRecording > 1996) AND (Conductor = Mikhail Snitko)`. The tasks _coarse-to-fine_ weas tested were: natural language to logical form, natural language to source code, natural language to SQL. Experimental results display competitive performance compared to previous systems, despite the simple sequence decoders.
  - _Tags_: semantic parsing, nl2code
  - _Notes_: I have also done a [blog post](../../2018/11/29/coarse-to-fine) about this paper.
- **[Semantic Parsing with Syntax- and Table-Aware SQL Generation](https://arxiv.org/pdf/1804.08338.pdf)** - Yibo Sun, Duyu Tang, Nan Duan, Jianshu Ji, Guihong Cao, Xiaocheng Feng, Bing Qin, Ting Liu, Ming Zhou, ACL 2018.
  - _Summary_: The paper proposes STAMP (Syntax- and Table- Aware seMantic Parser), a generative model to map natural language questions into SQL queries bypassoing the main issue of existing approaches of missmatch between question words and table contents. This is achieved by taking into account the structure of the table and the syntax of the SQL language. the approach improved the performance on the WikiSQL dataset from 69% to 74.4%. The method is based on pointer networks with three output channels (the column, the value and the SQL channel) that predict those specific outputs and STAMP learns to switch to which channel at each time step of the decoding process.
  - _Tags_: semantic parsing, WikiSQL, nl2code, nl2sql

#### Source Code Analysis and Language modeling

#### Neural Network Architectures and Algorithms

#### Embeddings in Software Engineering

#### Program Translation

#### Code Suggestion and Completion

#### Program Repair and Bug Detection

#### APIs and Code Mining

#### Code Optimization

#### Topic Modeling

#### Sentiment Analysis

#### Code Summarization

#### Clone Detection

#### Differentiable Interpreters

#### Binary Data Modeling

#### Soft Clustering Using T-mixture Models

#### Misc