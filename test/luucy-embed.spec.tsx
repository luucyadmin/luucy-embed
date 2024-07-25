import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { LuucyEmbed } from '../lib/react';

test('Renders iFrame', () => {
  render(
    <LuucyEmbed
      data={{
        source: 'https://app.luucy.ch',
        workspaceUrl: 'LUUCY_Testing_LUUCY_Embed_Sample',
        projectId: 10273,
        variantId: 33419,
        pluginName: 'sample-embed-plugin'
      }}
    />
  );
  expect(screen.getByRole('document')).toBeDefined();
});
