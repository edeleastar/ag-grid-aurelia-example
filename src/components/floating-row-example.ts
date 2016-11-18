import {autoinject, customElement} from 'aurelia-framework'

import RefData from '../data/refData';
import SkillFilter from '../filters/skillFilter';
import ProficiencyFilter from '../filters/proficiencyFilter';

import {GridOptions, GridApi, ColumnApi} from 'ag-grid';
// only import this if you are using the ag-Grid-Enterprise
import 'ag-grid-enterprise/main';

@autoinject()
@customElement('floating-row-example')
export class FloatingRowExample {

  private gridOptions: GridOptions;

  constructor() {
    // we pass an empty gridOptions in, so we can grab the api out
    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = this.createRowData();
    this.gridOptions.floatingTopRowData = [
      {row: "Top Row", number: "Top Number"}
    ];
    this.gridOptions.floatingBottomRowData = [
      {row: "Bottom Row", number: "Bottom Number"}
    ];
  }

  private createRowData() {
    let rowData: any[] = [];

    for (var i = 0; i < 15; i++) {
      rowData.push({
        row: "Row " + i,
        number: Math.round(Math.random() * 100)
      });
    }

    return rowData;
  }
}

