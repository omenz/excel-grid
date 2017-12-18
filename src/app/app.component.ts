import {Component} from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    manualRowResize: true,
    manualColumnMove: true,
    manualRowMove: true,
    cells: function (row, col, prop) {
      const cellProperties: any = {};
      if (row === 0) {
        cellProperties.renderer = AppComponent.firstRowRenderer;
      } else {
        cellProperties.renderer = AppComponent.conditionalRenderer;
      }
      return cellProperties;
    }
  };

  private static firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    td.style.fontWeight = 'bold';
    td.style.color = 'green';
    td.style.background = '#CEC';
  }

  private static conditionalRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    if (value.indexOf('10') !== -1 || value.indexOf('G') !== -1) {
      td.style.color = 'red';
    }
  }
}
