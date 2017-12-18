import { Component } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  settings = {
    data: Handsontable.helper.createSpreadsheetData(200, 50),
    colWidths: 100,
    contextMenu: true,
    mergeCells: true,
    allowInsertColumn: true,
    allowInsertRow: true,
    colHeaders: true,
    rowHeaders: true,
    manualColumnResize: true,
    manualRowResize: true
  };
}
