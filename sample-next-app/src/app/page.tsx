import { SampleEmbed } from '~/components/sample-embed';

export default function Home() {
  return (
    <main className="p-2 flex flex-col gap-12">
      <div>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-4 mt-2">LUUCY-embedded</h1>
          <p>
            This is an example{' '}
            <a href="https://nextjs.org/docs" target="_blank">
              next.js
            </a>{' '}
            application embedding{' '}
            <a href="https://www.luucy.ch" target="_blank">
              LUUCY
            </a>{' '}
            and establishing a data connection such that the host application (like this one) can send and receive messages via a{' '}
            <a href="https://sdk.luucy.ch/master/embed/index.html" target="_blank">
              LUUCY Embed Plugin
            </a>
            .
          </p>
          <p className="font-bold mt-4">Links and Resources</p>
          <ul role="list" className="list-item list-inside marker:text-sky-400">
            <li>
              <a href="https://github.com/luucyadmin/luucy-embed/tree/master/sample-next-app" target="_blank">
                Source Code repo for this sample Web App
              </a>
            </li>
            <li>
              <a href="https://github.com/luucyadmin/luucy-embed/tree/master/sample-luucy-plugin" target="_blank">
                Source Code for the sample LUUCY Plugin
              </a>
            </li>
            {/* TODO: add public bundle link
            <li>
            <a href="" target="_blank">
              Latest Sample LUUCY Plugin Bundle
            </a>{' '}
            (right click to download, then upload via Developer Dashboard for your organisation, afterwards install into a workspace)
          </li> */}
            <li>
              <a href="https://sdk.luucy.ch/master/embed/index.html" target="_blank">
                LUUCY SDK Embed Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Demo</h2>
        <p className="mb-8">Note: Make sure that a custom LUUCY plugin with embedded scope is deployed to the workspace.</p>
        <SampleEmbed />
      </div>
    </main>
  );
}
