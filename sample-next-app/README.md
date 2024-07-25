# Sample Next.js App

This is an example [`next.js`](https://nextjs.org/docs) application embedding [LUUCY](https://www.luucy.ch) and establishing a data connection such that the host application (like this one) can send and receive messages via a [LUUCY Embed Plugin](https://sdk.luucy.ch/master/embed/index.html).

## How to use the web app

### Pre-Conditions

- You need to have a workspace and project on the desired environment already setup
- You need to have either deployed or have access to the `sample-embed-plugin` (code and readme [see here](../sample-plugin/)) on the desired environments marketplace
- You need to have installed the marketplace app to the workspace

### Steps to run

1. Open [luucy.gitlab.io/sdk/luucy-embed/](https://luucy.gitlab.io/sdk/luucy-embed/)
1. *Optional*: Set a Base URL, by default this points to LUUCY prod (app.luucy.ch)
1. **Required**: Set a Workspace Slug
  Example LUUCY URL: https://app.luucy.ch/**LUUCY_Testing_LUUCY_Embed_Sample**/projects/10273/33419
1. **Required**: Set a ProjectId
  Example LUUCY URL: https://app.luucy.ch/LUUCY_Testing_LUUCY_Embed_Sample/projects/**10273**/33419
1. *Optional*: Set a VariantId
  Example LUUCY URL: https://app.luucy.ch/LUUCY_Testing_LUUCY_Embed_Sample/projects/10273/**33419**
1. *Optional*: Set a plugin name, defaults to `sample-embed-plugin` (as set in [`sample-luucy-plugin`](../sample-luucy-plugin/))
1. Click "open"

### How to log out

Most plugins activate the LUUCY fullscreen mode and hence you can't easily log out. If this happens and you want to use the embedded LUUCY without a login, open your browser development tools and delete the `apiKey2` cookie manually and click "open" again or refresh the page.

## Dev notes

### How to run locally

To run this app locally, install all depdencies and then use `npm run dev` to start a local webserver. Then head to [http://localhost:3000](http://localhost:3000) to open the app.

```bash
# install dependencies
npm install

# run local dev server
npm run dev
```

### How to deploy

You can compile and bundle the contained [`src/`](src/) via `npm run build`. This is done automatically on every push/merge to `master` via the GitLab CI.

```bash
# create an out/ folder containing bundled html, javascript and css -> deploy to webserver of choice
npm run build
```
