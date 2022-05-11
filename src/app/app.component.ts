import {Component} from '@angular/core';
import {CustomDataVisualService} from "custom-data-visual";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libraries';
  injection: any;
  injection1: any;
  data: any;
  options: any;

  constructor(private visualService: CustomDataVisualService) {
    /*this.data = {
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
      },
        {
        bgColor: '#ee4baf',
        legendTitle: 'Availability 1',
        chartData: [{
          label: 'VR', value: '99'
        }, {
          label: 'CR', value: '90'
        }, {
          label: 'ER', value: '99'
        }, {
          label: 'GAR', value: '90'
        }]
      },
        {
          bgColor: '#2d0d22',
          legendTitle: 'Availability 2',
          chartData: [{
            label: 'VR', value: '100'
          }, {
            label: 'CR', value: '100'
          }, {
            label: 'ER', value: '100'
          }, {
            label: 'GAR', value: '100'
          }]
        },
        {
          bgColor: '#c41616',
          legendTitle: 'Availability 3',
          chartData: [{
            label: 'VR', value: '85'
          }, {
            label: 'CR', value: '80'
          }, {
            label: 'ER', value: '90'
          }, {
            label: 'GAR', value: '70'
          }]
        }
        ]
    };*/
    this.data = {
      "nurTrend": [{"labele": "May 2019", "target": 99.24, "achievment": 99.09}, {
        "labele": "June 2019",
        "target": 99.24,
        "achievment": 99.06
      }, {"labele": "July 2019", "target": 99.24, "achievment": 99.24}, {
        "labele": "August 2019",
        "target": 99.24,
        "achievment": 99.37
      }, {"labele": "September 2019", "target": 99.24, "achievment": 99.53}, {
        "labele": "October 2019",
        "target": 99.24,
        "achievment": 99.18
      }, {"labele": "November 2019", "target": 99.24, "achievment": 99.59}, {
        "labele": "December 2019",
        "target": 99.24,
        "achievment": 99.62
      }, {"labele": "January 2020", "target": 99.24, "achievment": 99.50}, {
        "labele": "February 2020",
        "target": 99.24,
        "achievment": 99.24
      }, {"labele": "March 2020", "target": 99.24, "achievment": 99.11}, {
        "labele": "April 2020",
        "target": 99.24,
        "achievment": 98.83
      }, {"labele": "May 2020", "target": 99.24, "achievment": 99.62}, {
        "labele": "June 2020",
        "target": 99.24,
        "achievment": 99.55
      }, {"labele": "July 2020", "target": 99.24, "achievment": 99.43}, {
        "labele": "August 2020",
        "target": 99.90,
        "achievment": 99.55
      }, {"labele": "September 2020", "target": 99.90, "achievment": 99.59}, {
        "labele": "October 2020",
        "target": 99.90,
        "achievment": 99.70
      }, {"labele": "November 2020", "target": 99.90, "achievment": 99.79}, {
        "labele": "December 2020",
        "target": 99.90,
        "achievment": 99.79
      }, {"labele": "January 2021", "target": 99.90, "achievment": 99.90}, {
        "labele": "February 2021",
        "target": 99.90,
        "achievment": 99.90
      }, {"labele": "March 2021", "target": 99.90, "achievment": 99.90}, {
        "labele": "April 2021",
        "target": 99.90,
        "achievment": 99.89
      }, {"labele": "May 2021", "target": 99.90, "achievment": 99.93}, {
        "labele": "June 2021",
        "target": 99.90,
        "achievment": 99.90
      }, {"labele": "July 2021", "target": 99.90, "achievment": 99.90}, {
        "labele": "August 2021",
        "target": 99.90,
        "achievment": 99.93
      }, {"labele": "September 2021", "target": 99.90, "achievment": 99.95}, {
        "labele": "October 2021",
        "target": 99.90,
        "achievment": 99.93
      }, {"labele": "November 2021", "target": 99.90, "achievment": 99.93}],
      "nurData": {
        "xAxisTitle": null,
        "yAxisTitle": null,
        "title": "Total NUR: 73.00  Reconciled NUR: 68.00",
        "showLegend": true,
        "chartDataSet": [{
          "bgColor": "#42a5f5",
          "legendTitle": "NUR Data",
          "chartData": [{"label": "Bangui", "value": "12.00"}, {"label": "West", "value": "26.00"}, {
            "label": "East",
            "value": "35.00"
          }]
        }]
      }
    };
    this.injection = {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#42A5F5',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: '#FFA726',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      chartType: 'bar',
      chartHeight: '270',
      count: 0,
      chartOption: {
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
      },
      chartId: 'c1',
      tabularHeaders: [{"field": "regions", "header": "Regions"}, {"field": "availability", "header": "Availability"}],
      tabularData: [{"regions": "VR", "availability": "100"}, {
        "regions": "CR",
        "availability": "100"
      }, {"regions": "ER", "availability": "100"}, {"regions": "GAR", "availability": "100"}]
    };

    this.options = {
      scales: {
        xAxes: [{
          barThickness: 30,
          gridLines: {
            display: false,
          }
        }],
        yAxes: [{
          gridLines: {
            color: '#dfe1e56b',
          },
          ticks: {
            // min: tick,
          }
        }]
      },
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        labels: [
          {
            render: 'value'
          }
        ]
      }
    };

    this.injection1 = {
      chartData: {
        labels: ['August', 'September', 'October', 'November', 'December', 'January', 'February'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#42A5F5',
            data: [80, 90, 70, 75, 85, 70, 80]
          },
          {
            label: 'My Second dataset',
            backgroundColor: '#FFA726',
            data: [70, 80, 60, 65, 80, 65, 70]
          }
        ]
      },
      chartType: 'bar',
      chartHeight: '270',
      count: 1,
      chartOption: {
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
      },
      chartId: 'c1',
      tabularHeaders: [{"field": "regions", "header": "Regions"}, {"field": "availability", "header": "Availability"}],
      tabularData: [{"regions": "VR", "availability": "100"}, {"regions": "CR", "availability": "100"},
        {"regions": "ER", "availability": "100"}, {"regions": "GAR", "availability": "100"}
        , {"regions": "GAR", "availability": "100"}, {"regions": "GAR", "availability": "100"}
        , {"regions": "GAR", "availability": "100"}, {"regions": "GAR", "availability": "100"}
        , {"regions": "GAR", "availability": "100"}, {"regions": "GAR", "availability": "100"}]
    };

    visualService.listenVisualNotification().subscribe(visualData => {
      const array = [];
      for (let i = 0; i < this.data.chartDataSet.length; i++) {
        if (i === 0) {
          array.push({
            field: 'key' + i, header: this.data.xAxisTitle
          });
          array.push({
            field: 'key' + (i + 1), header: this.data.chartDataSet[i].legendTitle
          });
        } else {
          array.push({
            field: 'key' + (i + 1), header: this.data.chartDataSet[i].legendTitle
          });
        }
      }
      console.log(array);
    });
  }
}
