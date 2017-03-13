import { Component, ViewChild, ElementRef } from '@angular/core';
import { ParserService } from "./parser/parser.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gistia test task';
  result: string;
  error: string;

  @ViewChild('source') source: ElementRef;

  constructor(private parser: ParserService) {}

  parse(method: 'flatten' | 'unfold') {
    try {
      this.error = null;
      this.result = JSON.stringify(this.parser[method](JSON.parse(this.source.nativeElement.value)), null, '\t');
    } catch (e) {
      this.error = e.message
    }
  }
}
