---
id: setup
title: Setup Manually
---

## Setup Manually

If you prefer to setup qore manually to an existing project, please follow this guide all the way through.

- Create a new qore project from your [qore dashboard](https://dashboard.qorebase.io/).
- Create a new directory for your project.

    ``` js title="Create New Project"
    mkdir my-new-project
    cd ./my-new-project
    ```
-  Initialize `package.json` file on your root project directory by triggering `npm init -y`, 

    ``` js title="Instal Qore Client"
    npm install --save @feedloop/qore-client
    ```
    ``` js title="Instal Qore CLI"
    npm install --save-dev @feedloop/qore-cli
    ```
    ``` js title="If using React"
    npm install --save @feedloop/qore-react
    ```
- Set your newly-created project as the current project.
     ``` js title="Set Your Project"
    npx qore set-project
    ```
- On your root project directory, run the codegen command to generate required config files. [See codegen](https://sdk-docs.qorebase.io/?jsx#codegen)
- Initialize qore client by creating the following file.

    ``` js title="Create a new file called qoreContext.js that contains the following lines"
    
    import { QoreClient } from "@feedloop/qore-client";
    import createQoreContext from "@feedloop/qore-react";
    import config from "./qore.config.json";
    import schema from "./qore.schema.json";
    
    const client = new QoreClient(config);
    client.init(schema);
    
    const qoreContext = createQoreContext(client);
    export default qoreContext;
    ```
        
   