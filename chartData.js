import {Line, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins
import Pusher from 'pusher-js'

export var pusher = new Pusher('5f549e8be14a34c859b2', {cluster: 'us2', encrypted: true})

export var LineChart = {
    extends: Line,
    mixins: [reactiveProp],
    props: ['chartData', 'options'],
    mounted () {
      // this.chartData is created in the mixin
      // pass options by creating local options object
      this.renderChart(this.chartData, this.options)
    }
}
