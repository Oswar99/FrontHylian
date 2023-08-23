import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

class CoderContent {
  private body: string;
  private styles: string;
  private scripts;

  constructor(private sanitizer: DomSanitizer) {
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
    const content: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`<style>${this.styles}</style><script>${this.scripts}</script>${this.body}`)
    return content;
  }

  public getHtml(title: string) {
    const html: string = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>${this.styles}</style>
        <script>${this.scripts}</script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        ${this.body}
    </body>
    </html>
    `
    return html;
  }
};


export function compressImg(imgn: any, quality: number): Promise<any> {
  return new Promise<any>((resolve) => {
    const $canvas = document.createElement("canvas");
    const img = new Image();
    img.onload = () => {
      $canvas.width = img.width;
      $canvas.height = img.height;
      $canvas.getContext("2d")!.drawImage(img, 0, 0);
      $canvas.toBlob((blob) => {
        if (blob !== null) {
          resolve(blob);
        }
      },
        "image/jpeg",
        quality / 100
      );
    };
    img.src = URL.createObjectURL(imgn);
  });
};


export default CoderContent