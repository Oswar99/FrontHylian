import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { PrismService } from '../../services/prism.service';


@Component({
  selector: 'app-prism-editor',
  templateUrl: './prism-editor.component.html',
  styleUrls: ['./prism-editor.component.scss']
})
export class PrismEditorComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {
  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;

  @Output() codeChange = new EventEmitter<string>();
  @Input() codeType: string = 'html';
  @Input() classmain: string = '';

  placeholder: string = 'Escriba su codigo HTML aqui...'

  sub!: Subscription;
  highlighted = false;

  @Input() textareaContent: string = '';
  lineNumbers: number[] = [];


  updateLineNumbers() {
    const lines = this.textareaContent.split('\n');
    this.lineNumbers = Array.from({ length: lines.length }, (_, i) => i + 1);
  }

  form = this.fb.group({
    content: ''
  });

  get contentControl() {
    return this.form.get('content');
  }

  constructor(
    private prismService: PrismService,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {};

  ngOnInit(): void {
    this.listenForm()
    this.synchronizeScroll();
  }

  ngAfterViewInit() {
    this.prismService.highlightAll();
    if (this.codeType === 'css') {
      this.placeholder = 'Escriba su codigo CSS aqui...'
    } else if (this.codeType === 'js') {
      this.placeholder = 'Escriba su codigo JAVASCRIPT aqui...'
    }
  }


  ngAfterViewChecked() {
    if (this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = false;
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private listenForm() {
    this.sub = this.form.valueChanges.subscribe((val: any) => {
      const modifiedContent = this.prismService.convertHtmlIntoString(val.content);

      this.renderer.setProperty(this.codeContent.nativeElement, 'innerHTML', modifiedContent);
      this.codeChange.emit(val.content);
      this.ngAfterViewInit()
      this.highlighted = true;
      this.updateLineNumbers();
    });
  }

  private synchronizeScroll() {
    const localSub = fromEvent(this.textArea.nativeElement, 'scroll').subscribe(() => {
      const toTop = this.textArea.nativeElement.scrollTop;
      const toLeft = this.textArea.nativeElement.scrollLeft;

      this.renderer.setProperty(this.pre.nativeElement, 'scrollTop', toTop);
      this.renderer.setProperty(this.pre.nativeElement, 'scrollLeft', toLeft + 0.2);
    });

    this.sub.add(localSub);
  }
}
