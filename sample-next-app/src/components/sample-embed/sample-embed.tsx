'use client';

import { useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { LuucyEmbed, type LuucyEmbedData } from '../luucy-embed';
import { LogView, type LogMessage } from '../log-view/log-view';

export const SampleEmbed = () => {
  const searchParams = useSearchParams();

  const data: LuucyEmbedData = {
    source: searchParams.get('source') ?? 'https://app.luucy.ch',
    workspaceUrl: searchParams.get('workspaceUrl') ?? 'LUUCY_Testing_LUUCY_Embed_Sample',
    projectId: searchParams.get('projectId') ? parseFloat(searchParams.get('projectId') ?? '') : 10273,
    variantId: searchParams.get('variantId') ? parseFloat(searchParams.get('variantId') ?? '') : 33419,
    pluginName: searchParams.get('pluginName') ?? 'sample-embed-plugin'
  };

  const [logMessages, setLogMessages] = useState<LogMessage[]>([]);

  const addMessage = useCallback((message: object) => {
    setLogMessages((oldLogMessages) => [
      ...oldLogMessages,
      {
        timestamp: new Date(),
        type: '<- MESSAGE',
        component: 'LuucyEmbed',
        message: `${JSON.stringify(message)}`
      }
    ]);
  }, []);

  const addError = useCallback((error: string) => {
    setLogMessages((oldLogMessages) => [
      ...oldLogMessages,
      {
        timestamp: new Date(),
        type: 'ERROR',
        component: 'LuucyEmbed',
        message: error
      }
    ]);
  }, []);

  return (
    <div>
      <form className="mb-4 flex gap-2">
        <div className="relative">
          <input
            className="peer h-10 w-full border-b border-b-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-900"
            type="url"
            name="source"
            id="source"
            defaultValue={data.source}
            placeholder="https://app.luucy.ch"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            htmlFor="source"
          >
            Base URL (optional)
          </label>
        </div>
        <span className="pt-2">/</span>
        <div className="relative">
          <input
            className="peer h-10 w-full border-b border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-900"
            type="text"
            name="workspaceUrl"
            id="workspaceUrl"
            defaultValue={data.workspaceUrl}
            placeholder="LUUCY_Testing_Embed_Demo"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            htmlFor="workspaceUrl"
          >
            Workspace Slug
          </label>
        </div>
        <span className="pt-2">/projects/</span>
        <div className="relative">
          <input
            className="peer h-10 w-full border-b border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-900"
            type="number"
            min={1}
            step={1}
            defaultValue={data.projectId}
            name="projectId"
            id="projectId"
            placeholder="10273"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            htmlFor="projectId"
          >
            Project ID
          </label>
        </div>
        <span className="pt-2">/</span>
        <div className="relative">
          <input
            className="peer h-10 w-full border-b border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-900"
            type="number"
            min={1}
            step={1}
            defaultValue={data.variantId}
            name="variantId"
            id="variantId"
            placeholder="33419"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            htmlFor="variantId"
          >
            Variant ID
          </label>
        </div>
        <span className="p-2">&nbsp;</span>
        <div className="relative">
          <input
            className="peer h-10 w-full border-b border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-900"
            type="string"
            defaultValue={data.pluginName}
            name="pluginName"
            id="pluginName"
            placeholder="sample-plugin"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            htmlFor="pluginName"
          >
            Plugin Name
          </label>
        </div>
        <button type="submit">Open</button>
      </form>
      <div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <LuucyEmbed data={data} onMessage={addMessage} onError={addError} debug={true} />
          <LogView logMessages={logMessages} />
        </div>
      </div>
    </div>
  );
};
