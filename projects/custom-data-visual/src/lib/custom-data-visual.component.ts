import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToolbarDataVisualModalComponent} from "./toolbar-data-visual-modal/toolbar-data-visual-modal.component";
import {CustomDataVisualService} from "./custom-data-visual.service";
import {animate, style, transition, trigger} from "@angular/animations";

export interface IDataToVisualize {
  xAxisTitle: string;
  chartDataSet: IChartDataSet[]
}

export interface IChartDataSet {
  bgColor: string;
  legendTitle: string;
  fill: boolean;
  chartData: IChartData[]
}

export interface IChartData {
  label: string;
  value: string;
  tooltip?: string;
}

export interface ITableHeader {
  field: string;
  header: string;
}

export interface IToolbarConfig {
  display?: boolean;
  showList?: boolean;
  showExcel?: boolean;
  showPdf?: boolean;
  showModal?: boolean;
  showRawExcel?: boolean;
}

@Component({
  selector: 'custom-data-visual',
  templateUrl: './custom-data-visual.component.html',
  styleUrls: ['./custom-data-visual.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})

export class CustomDataVisualComponent implements OnInit {

  chart = true;
  showToolBar = false;
  list: any;
  chartData: any = {};
  rawDataExcel: any;
  tableHeader: ITableHeader[] = [];
  tableData: any[] = [];
  dataInjected: IDataToVisualize = {} as IDataToVisualize;
  toolBarConfig: IToolbarConfig = {
    display: true,
    showExcel: true,
    showGraph: true,
    showList: true,
    showPdf: false,
    showModal: true,
    showRawExcel: false
  } as IToolbarConfig;
  cHeight: string = '270';
  cId: string = 'cId';
  cType: string = 'bar';
  cOption = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        fontColor: 'black',
        labels: {
          fontColor: 'black',
          color: 'black'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          fontColor: 'black',
          color: 'black'
        },
        grid: {
          color: 'rgba(255,255,255,0.2)'
        }
      },
      y: {
        ticks: {
          fontColor: 'black',
          color: 'black'
        },
        grid: {
          color: 'rgba(255,255,255,0.2)'
        }
      }
    }
  };

  @Input()
  set dataToVisualize(value: any) {
    if (value) {
      this.dataInjected = value;
      this.setChartData();
      this.setTabularData();
    }
  }

  @Input()
  set chartHeight(value: any) {
    if (value) {
      this.cHeight = value;
    }
  }

  @Input()
  set chartId(value: any) {
    if (value) {
      this.cId = value;
    }
  }

  @Input()
  set chartType(value: any) {
    if (value) {
      this.cType = value;
    }
  }

  @Input()
  set chartOption(value: any) {
    if (value) {
      this.cOption = value;
    }
  }

  @Input()
  set toolbarConfig(value: IToolbarConfig) {
    if (value) {
      this.toolBarConfig = value;
    }
  }

  @Output() dataForExport = new EventEmitter();

  constructor(private dataVisualService: CustomDataVisualService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openChartDialog() {
    if (this.list) {
      this.dialog.open(ToolbarDataVisualModalComponent, {
        panelClass: 'Dialog-Custom-Class',
        data: {
          graph: true,
          dataInjected: {
            chartData: this.chartData,
            cHeight: this.cHeight,
            cOption: this.cOption,
            cType: this.cType
          }
        }
      });
    } else {
      this.dialog.open(ToolbarDataVisualModalComponent, {
        panelClass: 'Dialog-Custom-Class',
        data: {
          graph: false,
          dataInjected: {
            tableData: this.tableData,
            tableHeader: this.tableHeader
          }
        }
      });
    }
  }

  downloadExcel(rawData?: any) {
    if (rawData) {
      this.dataForExport.emit(this.rawDataExcel);
    } else {
      this.dataForExport.emit(this.tableData);
    }
  }

  selectData(event: any) {
    if (this.cType !== 'doughnut') {
      this.dataVisualService.transmitNotification(event);
    }
  }

  setChartData() {
    const label: string[] = [];
    const datasets: any[] = [];
    let values: string[] = [];
    if (this.dataInjected && this.dataInjected.chartDataSet && this.dataInjected.chartDataSet.length > 0) {
      this.dataInjected.chartDataSet[0].chartData.forEach(dataSet => {
        if (dataSet) {
          label.push(dataSet.label);
        }
      });
    }
    this.dataInjected.chartDataSet.forEach(dataSet => {
      if (dataSet) {
        dataSet.chartData?.forEach(cData => {
          values.push(cData.value);
        });
        datasets.push(
          {
            label: dataSet.legendTitle,
            backgroundColor: dataSet.bgColor,
            fill: dataSet.fill?.toString() ? dataSet.fill : false,
            data: values
          });
        values = [];
      }
    });
    this.chartData.datasets = datasets;
    this.chartData.labels = label;
    this.chartData = {...this.chartData};
  }

  setTabularData() {
    this.tableHeader = [];
    this.tableData = [];
    let dump = '{';
    let indexed = 0;
    const label: string[] = [];
    if (this.dataInjected && this.dataInjected.chartDataSet && this.dataInjected.chartDataSet.length > 0) {
      this.dataInjected.chartDataSet[0].chartData.forEach((dataSet: { label: string; }) => {
        if (dataSet) {
          label.push(dataSet.label);
        }
      });
    }
    this.dataInjected.chartDataSet[0].chartData.forEach(dataSet => {
      if (dataSet) {
        this.dataInjected.chartDataSet.forEach((dataSets, index) => {
          dump = dump.concat(`"key${index + 1}": "${this.dataInjected?.chartDataSet[index]?.chartData[indexed]?.value}",`);
        });
        dump = dump.slice(0, -1) + '}';
        const dump1 = `"key0": "${label[indexed]}",`
        dump = [dump.slice(0, 1), dump1, dump.slice(1)].join('');
        this.tableData.push(JSON.parse(dump));
        dump = '{';
        indexed = indexed + 1;
      }
    });
    this.tableHeader.push({
      field: 'key0', header: this.dataInjected?.xAxisTitle
    });
    for (let i = 0; i < this.dataInjected?.chartDataSet?.length; i++) {
      this.tableHeader.push({
        field: 'key' + (i + 1), header: this.dataInjected?.chartDataSet[i]?.legendTitle
      });
    }
  }

}
