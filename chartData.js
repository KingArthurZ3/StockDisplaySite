import {Line} from 'vue-chartjs'
import Pusher from'pusher'

 // app.js
class App {
  constructor() {
    this.pusher = null;
    this.chart = null;
    this.lowestPrice = 505;
    this.initializeChart();
    this.initializePusher();
    }
    initializePusher() {
      this.pusher = new Pusher('5f549e8be14a34c859b2', {
        cluster: 'us2',
        encrypted: true
      });
      this.subscribeToEventChannel();
    }
    subscribeToEventChannel() {
       var channel = this.pusher.subscribe('trade');
       channel.bind('stock', data => {
          this.updateChartData(data)
        });
    }
    updateChartData(data) {
         
    }

    initializeChart() {
      
    }
}
new App();


export default{
    extends: Line,
    data: {
      pusher: null,
      chart: null,
      lowestPrice: 505,
    },
    methods: {
      initializePusher: function () {
      this.pusher = new Pusher('5f549e8be14a34c859b2', {
        cluster: 'us2',
        encrypted: true
      });
      this.subscribeToEventChannel();
      },
      subscribeToEventChannel: function () {
        var channel = this.pusher.subscribe('trade');
        channel.bind('stock', data => {
           this.updateChartData(data)
           });
       },
       updateChartData: function(data) {
         
       },
       initializeChart: function() {
      
       }
    },
    created: function () {
      this.initializePusher(),
      this.initializeChart()
    },
    mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#FC2525',
          data: [40, 39, 10, 40, 39, 80, 40]
        },{
          label: 'Data Two',
          backgroundColor: '#05CBE1',
          data: [60, 55, 32, 10, 2, 12, 53]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}