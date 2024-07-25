# Luucy Embed

Embed luucy into your webpage!
Connect to [your own plugin](https://github.com/luucyadmin/luucy-cli) and exchange messages between your plugin and your webpage.

## React Component

A react component rendering and managing the LUUCY embed can be found in [`./sample-next-app/app/components/luucy-embed/luucy-embed.tsx`](./sample-next-app/src/components/luucy-embed/luucy-embed.tsx).

Example usage in Code:

```tsx
import { useCallback } from 'react';
import { LuucyEmbed, type LuucyEmbedData } from 'luucy-embed';

export const SampleEmbed = () => {
  const logMessage = useCallback((message: object) => {
    console.log(JSON.stringify(message));
  }, []);
  const logError = useCallback((message: string) => console.error, []);

  return(
    <LuucyEmbed
      data = {
        source: 'https://app.luucy.ch',
        workspaceUrl: 'LUUCY_Testing_LUUCY_Embed_Sample',
        projectId: 10273,
        variantId: 33419,
        pluginName: 'sample-embed-plugin'
      }
      onMessage={logMessage}
      onError={logError}
    />
  )
```

## Example Applications

### Sample React App

A sample react app is available in [`sample-next-app/`](./sample-next-app/).

A deployed version to test with is available at [luucy.gitlab.io/sdk/luucy-embed/](https://luucy.gitlab.io/sdk/luucy-embed/).

### Sample LUUCY Plugin

A sample LUUCY Plugin is available in [`sample-luucy-plugin/`](./sample-luucy-plugin/).

A deployed version is available in the following Workspace:

- baseUrl: `https://app.luucy.ch`
- workspaceUrl: `LUUCY_Testing_LUUCY_Embed_Sample`
- projectId: `10273`
- variantId: `33419`
- pluginName: `sample-embed-plugin`

You can directly [open](https://luucy.gitlab.io/sdk/luucy-embed/?source=https%3A%2F%2Fapp.luucy.ch&workspaceUrl=LUUCY_Testing_LUUCY_Embed_Sample&projectId=10273&variantId=33419&pluginName=sample-embed-plugin) to test both the sample react app and sample plugin together.

### Vanilla Javascript

A full HTML + JS example is available in [`sample-html-app/`](./sample-html-app/).

Deployed to [luucy.gitlab.io/sdk/luucy-embed/sample-html-app/](https://luucy.gitlab.io/sdk/luucy-embed/sample-html-app/).
