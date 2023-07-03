class CoderContent {
    private body;
    private styles;
    private scripts;

    constructor() {
        this.body = "";
        this.styles = "";
        this.scripts = "";
    };

    public setBody(body: string) {
        this.body = body;
    };
    public setStyle(style: string) {
        this.styles = style;
    };
    public setScript(Script: string) {
        this.scripts = Script;
    };

    public getContent() {
        const content: string = `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            ${this.styles}
          </style>
          <script>
            ${this.scripts}
          </script>
        </head>
        <body>
          ${this.body}
        </body>
        </html>`
        return content;
    }
};

export default CoderContent