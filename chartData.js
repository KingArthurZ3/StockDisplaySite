import {Line, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins
import Pusher from'pusher'


export default{
    extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
      // this.chartData is created in the mixin
      // pass options by creating local options object
      this.renderChart(this.chartData, this.options)
    }
}
