# Sample LUUCY Embed Plugin

This is an example [`LUUCY SDK Plugin`](https://sdk.luucy.ch) used in conjunction with the [`sample-next-app`](../sample-next-app/) receiveing and emitting messages.

## Dev notes

### How to run locally

While you can test run the app locally, it will not work as you can't run LUUCY in embedded mode directly. However, if you want to ensure the app compiles, you can use the usual run commands:

```bash
# install dependencies
npm install

# run local dev server
npm run dev
```

### How to deploy

You can compile the plugin. This will emit a bundle saved in [`bundles/`](./bundles/) that can be uploaded to LUUCY via the Developer Dashboard.

```bash
# create an bundle/ folder containing the bundled application
npm run build
```
