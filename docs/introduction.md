---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

Welcome to Qore Client SDK documentation page, this document will guide you to start hacking with Qore. As of now, Qore Client SDK is only accessible in JavaScript Environment, we will add more soon.

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 12.13.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed
- [Yarn](https://yarnpkg.com/en/) version >= 1.5 (which can be checked by running `yarn --version`). Yarn is a performant package manager for JavaScript and replaces the `npm` client. It is not strictly necessary but highly encouraged.
- [Qore Account](https://dashboard.qorebase.io/)  signup here & don't forget to verify your account.

## Features

**Document caching**

Each read operation is cached by default, any similar read request will share the same data. With qore client you might not need an additional state management.

**TypeScript Support**

Qore cli can generate the schema of your project in TypeScript, meaning that you'll know what to insert and what to read from your qore client.

---

