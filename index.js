export class Luucy {
    constructor(application, workspace, projectId, variantId, source = 'https://app.luucy.ch') {
        this.application = application;
        this.workspace = workspace;
        this.projectId = projectId;
        this.variantId = variantId;

        this.source = source;
    }

    embed(parent) {
        this.frame = document.createElement('iframe');
        this.frame.src = `${this.source}/${this.workspace}/projects/${this.projectId}${this.variantId ? `/${this.variantId}` : ''}`;

        parent.appendChild(this.frame);

        return new Promise(done => {
            window.addEventListener('message', event => {
                try {
                    if (typeof event.data == 'string') {
                        const data = JSON.parse(event.data);
                        
                        if (Array.isArray(data)) {
                            if (data[0] == this.application) {
                                if (data[1] == this.connectionId && data[2] == 'message') {
                                    this.onmessage(data[3]);
                                } else if (data[2] == 'connect') {
                                    this.connectionId = data[1];

                                    this.frame.contentWindow.postMessage(JSON.stringify([this.application, this.connectionId, 'connect']), '*');

                                    done();
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.warn(error);
                }
            });
        });
    }

    onmessage(message) {}

    sendMessage(data) {
        this.frame.contentWindow.postMessage(JSON.stringify([this.application, this.connectionId, 'message', data]), '*');
    }
}