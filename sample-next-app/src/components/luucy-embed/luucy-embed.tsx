'use client';
import { useState, useEffect } from 'react';

import { Luucy } from 'luucy-embed';

export type LuucyEmbedData = {
  source: string;
  workspaceUrl: string;
  projectId: number;
  variantId: number;
  pluginName: string;
};

export const LuucyEmbed = ({
  data,
  onMessage,
  onError,
  embedContainerId = 'luucy-container',
  debug = false
}: {
  data: LuucyEmbedData;
  onMessage?: (message: object) => void;
  onError?: (error: string) => void;
  embedContainerId?: string;
  debug?: boolean;
}) => {
  const [embedData] = useState(data);
  const [luucy, setLuucy] = useState<Luucy>();

  useEffect(() => {
    setLuucy(new Luucy(embedData.pluginName, embedData.workspaceUrl, embedData.projectId, embedData.variantId, embedData.source));
  }, [embedData]);

  useEffect(() => {
    const embedContainer = document.getElementById(embedContainerId);
    if (embedContainer && luucy) {
      if (debug) console.log('[ LuucyEmbed ] found container and embedding');

      luucy.embed(embedContainer).catch((error) => {
        onError ? onError(`${error}`) : console.error(`[ LuucyEmbed ] [ERROR]: ${error}`);
      });

      luucy.onmessage = (message: object) => {
        onMessage ? onMessage(message) : console.log(`[ LuucyEmbed ] [-> Message]: ${JSON.stringify(message)}`);
      };
    }
  }, [luucy, embedContainerId, onMessage, onError, debug]);

  return <div id={embedContainerId}></div>;
};
