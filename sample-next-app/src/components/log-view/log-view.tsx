export type LogMessage = {
  type: string;
  component: string;
  timestamp: Date;
  message: string;
};

export const LogView = ({ logMessages }: { logMessages: LogMessage[] }) => {
  const logList = logMessages.map((lm) => (
    <p key={lm.timestamp.toISOString()}>
      <span className="font-sans text-gray-400">{`${lm.timestamp.toISOString()} [ ${lm.component} ] [ ${lm.type} ]`}</span> {lm.message}
    </p>
  ));
  return (
    <div className="logView w-full">
      <h2 className="text-xl font-bold">Message Log</h2>
      <div id="messageLog" className="font-mono text-xs">
        {logList}
      </div>
    </div>
  );
};
