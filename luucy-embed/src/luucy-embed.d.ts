export class Luucy {
  constructor(application: string, workspace: string, projectId: number, variantId?: number, source?: string);
  application: string;
  workspace: number;
  projectId: number;
  variantId: number;
  source: string;

  embed(parent: HTMLElement): Promise<any>;
  frame: HTMLIFrameElement;
  connectionId: string;
  onmessage(message: object): void;
  sendMessage(data: object): void;
}
