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
    this.data = {"nurData":
        {"xAxisTitle":null,"yAxisTitle":null,"title":"NUR Trends Data","showLegend":true,"chartDataSet":[
          {"bgColor":"#42a5f5","legendTitle":"NUR Data","chartData":[
            {"label":"April 2022","value":"221.0"},{"label":"May 2022","value":"1342.0"},{"label":"June 2022","value":"2704.0"}
            ]
          }, {"bgColor":"#f54242","legendTitle":"Targetted NUR","chartData":[
            {"label":"April 2022","value":"1400.0"},{"label":"May 2022","value":"1400.0"},{"label":"June 2022","value":"1400.0"}
            ]
          }
          ]
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
      console.log(visualData)
    });
  }
}
