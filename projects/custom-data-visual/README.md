# CustomDataVisual

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Installation

> $ npm install custom-data-visual

## Usage

> `import CustomDataVisual to your module`
>  <custom-data-visual [dataToVisualize]="dataToInject" [chartHeight]="height" [chartId]="id" [chartType]="type" [chartOption]="options" [toolbarConfig]="{display: true, showList: true, showExcel: true, showPdf: false, showModal: true, showRawExcel: true}" (dataForExport)=methodForExcelDownload($event)></custom-data-visual>

  Inject `CustomDataVisualService to your component`

>  visualService.listenVisualNotification().subscribe(visualData => {
>  console.log(visualData);
>  }

  Visual Notification is for chart click event

## Data Format

> this.dataToInject = {
xAxisTitle: 'Regions',
yAxisTitle: 'xyz',
title: 'Availability Avg 100 %',
showLegend: true,
chartDataSet: [
{
bgColor: '#4a4a8a',
legendTitle: 'Availability',
chartData: [
{
label: 'VR', value: '100'
}, {
label: 'CR', value: '100'
}, {
label: 'ER', value: '100'
}, {
label: 'GAR', value: '100'
}]
}
]
};


## Build

Run `ng build custom-data-visual` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build custom-data-visual`, go to the dist folder `cd dist/custom-data-visual` and run `npm publish`.

## Running unit tests

Run `ng test custom-data-visual` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
