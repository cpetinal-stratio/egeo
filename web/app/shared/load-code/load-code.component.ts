import { Component, Input, OnInit } from '@angular/core';
// import * as Prism from 'prismjs';

@Component({
  selector: 'st-load-code',
  template: require('./load-code.component.html'),
  styles: [require('./load-code.component.scss')]
})

export class LoadCodeComponent implements OnInit {
  @Input() file: string;

  code: string = '';
  private type: string = 'typescript';

  ngOnInit(): void {
    if (this.file && this.file !== '') {
      let parts = this.file.split('.');
      this.checkExtension(parts[parts.length - 1]);
    }
    this.code = this.getCode(this.file);
  }

  getCode(value: string): string {
    let result: string;
    if (this.type === 'markup') {
      result = require(`!!prismjs?lang=markup!../../+examples/${value}`);
    } else if (this.type === 'typescript') {
      result = require(`!!prismjs?lang=typescript!../../+examples/${value}`);
    } else {
      result = require(`!!prismjs?lang=javascript!../../+examples/${value}`);
    }
    console.log(result);
    return result;
  }

  getClass(): string {
    return `language-${this.type}`;
  }

  private checkExtension(extension: string): void {
    switch (extension) {
      case 'ts':
        this.type = 'typescript';
        break;
      case 'html':
        this.type = 'markup';
        break;
      default:
        this.type = 'typescript';
        break;
    }
  }
}
