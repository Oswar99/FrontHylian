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
};

export default CoderContent