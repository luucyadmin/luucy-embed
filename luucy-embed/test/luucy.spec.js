import { expect, describe, it } from 'vitest';
import { getByRole } from '@testing-library/dom';
import { Luucy } from '../src/main';

describe('Luucy', () => {
  it('can construct Luucy with application, workspace, projectId', () => {
    const luucy = new Luucy('sample-embed-plugin', 'LUUCY_Testing_LUUCY_Embed_Sample', 10273);
    expect(luucy.application).toBe('sample-embed-plugin');
    expect(luucy.workspace).toBe('LUUCY_Testing_LUUCY_Embed_Sample');
    expect(luucy.projectId).toBe(10273);
  });

  it('can construct Luucy with application, workspace, projectId, variantId', () => {
    const luucy = new Luucy('sample-embed-plugin', 'LUUCY_Testing_LUUCY_Embed_Sample', 10273, 33419);
    expect(luucy.application).toBe('sample-embed-plugin');
    expect(luucy.workspace).toBe('LUUCY_Testing_LUUCY_Embed_Sample');
    expect(luucy.projectId).toBe(10273);
    expect(luucy.variantId).toBe(33419);
  });

  it('can construct Luucy with application, workspace, projectId, variantId, source', () => {
    const luucy = new Luucy('sample-embed-plugin', 'LUUCY_Testing_LUUCY_Embed_Sample', 10273, 33419, 'https://app.test.luucy.ch');
    expect(luucy.application).toBe('sample-embed-plugin');
    expect(luucy.workspace).toBe('LUUCY_Testing_LUUCY_Embed_Sample');
    expect(luucy.projectId).toBe(10273);
    expect(luucy.variantId).toBe(33419);
    expect(luucy.source).toBe('https://app.test.luucy.ch');
  });

  it('can embed Luucy with application, workspace, projectId, variantId', () => {
    const luucy = new Luucy('sample-embed-plugin', 'LUUCY_Testing_LUUCY_Embed_Sample', 10273);

    const container = document.createElement('div');
    luucy.embed(container);

    expect(getByRole(container, 'document')).toHaveProperty('src', 'https://app.luucy.ch/LUUCY_Testing_LUUCY_Embed_Sample/projects/10273');
  });

  it('can embed Luucy with application, workspace, projectId, variantId', () => {
    const luucy = new Luucy('sample-embed-plugin', 'LUUCY_Testing_LUUCY_Embed_Sample', 10273, 33419);

    const container = document.createElement('div');
    luucy.embed(container);

    expect(getByRole(container, 'document')).toHaveProperty(
      'src',
      'https://app.luucy.ch/LUUCY_Testing_LUUCY_Embed_Sample/projects/10273/33419'
    );
  });

  it('can embed Luucy with application, workspace, projectId, variantId, source', () => {
    const luucy = new Luucy('sample-embed-plugin', 'LUUCY_Testing_LUUCY_Embed_Sample', 10273, 33419, 'https://app.test.luucy.ch');

    const container = document.createElement('div');
    luucy.embed(container);

    expect(getByRole(container, 'document')).toHaveProperty(
      'src',
      'https://app.test.luucy.ch/LUUCY_Testing_LUUCY_Embed_Sample/projects/10273/33419'
    );
  });
});
