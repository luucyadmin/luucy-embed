'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { Luucy } from 'luucy-embed';

type LogMessage = {
  timestamp: Date;
  message: string;
};

export default function Home() {
  const searchParams = useSearchParams();
  const [formData] = useState({
    source: searchParams.get('source') ?? '',
    workspaceUrl: searchParams.get('workspaceUrl') ?? 'LUUCY_Testing_LUUCY_Embed_Sample',
    projectId: searchParams.get('projectId') ?? '10273',
    variantId: searchParams.get('variantId') ?? '33419',
    pluginName: searchParams.get('pluginName') ?? 'sample-plugin'
  });
  const [centerData, setCenterData] = useState({
    lat: '',
    lng: '',
    height: ''
  });
  const [logMessages, setLogMessages] = useState<LogMessage[]>([]);
  const [luucy, setLuucy] = useState<Luucy>();

  const logList = logMessages.map((lm) => <p key={lm.timestamp.toISOString()}>{`${lm.timestamp.toISOString()}: ${lm.message}`}</p>);
  const addLogMessage = (message: string) => {
    setLogMessages((oldLogMessages) => [...oldLogMessages, { timestamp: new Date(), message }]);
  };

  useEffect(() => {
    setLuucy(
      new Luucy(
        formData.pluginName,
        formData.workspaceUrl,
        parseInt(formData.projectId),
        parseInt(formData.variantId),
        formData.source === '' ? 'https://app.luucy.ch' : formData.source
      )
    );
  }, [formData]);

  useEffect(() => {
    const embedContainer = document.getElementById('iframeContainer');
    if (embedContainer && luucy && formData.workspaceUrl && formData.projectId && formData.variantId) {
      console.log('found luucy and embedding...');
      luucy
        .embed(embedContainer)
        .then((embed) => {
          addLogMessage(`Plugin connected ${embed}`);
        })
        .catch((error) => addLogMessage(`${error}`));

      luucy.onmessage = (message: { position: { lat: number; lng: number; height: number } }) => {
        addLogMessage(`[-> Message]: ${JSON.stringify(message)}`);
        if (message.position)
          setCenterData({
            lat: `${message.position.lat}`,
            lng: `${message.position.lng}`,
            height: `${message.position.height}`
          });
      };
    }
  }, [luucy, formData.projectId, formData.variantId, formData.workspaceUrl]);

  const updateLocation = () => {
    if (luucy) {
      const message = {
        latitude: parseFloat(centerData.lat),
        longitude: parseFloat(centerData.lng),
        height: parseFloat(centerData.height)
      };
      addLogMessage(`[<- Message]: ${JSON.stringify(message)}`);
      luucy.sendMessage(message);
    }
  };

  return (
    <main>
      <div>
        <h1>Demo LUUCY-embedded app</h1>
        <p>
          This is an example application embedding LUUCY and establishing a data connection such that the host application (like this one)
          can send and receive messages via a LUUCY plugin.
        </p>
      </div>
      <div>
        <div>
          <form>
            <label htmlFor="source">Base URL (optional): </label>
            <input type="text" name="source" defaultValue={formData.source} placeholder="https://app.luucy.ch" />
            <label htmlFor="workspaceUrl">Workspace Slug: </label>
            <input type="text" name="workspaceUrl" defaultValue={formData.workspaceUrl} required placeholder="LUUCY_Testing_Embed_Demo" />
            <label htmlFor="projectId">Project ID: </label>
            <input type="number" min={1} step={1} defaultValue={formData.projectId} name="projectId" required placeholder="1234" />
            <label htmlFor="variantId">Variant ID: </label>
            <input type="number" min={1} step={1} defaultValue={formData.variantId} name="variantId" required placeholder="1234" />
            <label htmlFor="pluginName">Plugin Name: </label>
            <input type="string" defaultValue={formData.pluginName} name="pluginName" required placeholder="sample-plugin" />
            <button type="submit">Open</button>
          </form>
          <div>
            <label htmlFor="ctrLat">Center Latitude: </label>
            <input type="text" name="ctrLat" defaultValue={centerData.lat} />
            <label htmlFor="ctrLng">Center Longitude: </label>
            <input type="text" name="ctrLng" defaultValue={centerData.lng} />
            <label htmlFor="ctrHeight">Center Height: </label>
            <input type="text" name="ctrHeight" defaultValue={centerData.height} />
            <button onClick={() => updateLocation()}>Update LUUCY Center location</button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div id="iframeContainer"></div>
        <div className="logView">
          <h2>Message Log</h2>
          <div id="messageLog" className="messageLog">
            {logList}
          </div>
        </div>
      </div>
    </main>
  );
}
