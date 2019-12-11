<template>
    <div>
        <p>Settings</p>
        <!-- <div id="container">
            <div @click="statusText()" ref="bpm">PRESS TO SET BLUETOOTH WITH &#x2764;</div>
            <canvas id="waves"></canvas>
        </div> -->
        <!-- ref="bpm"  -->
        <div id="container">
          <div @click="statusText()">
        <app-switch classes="is-warning" v-model="value" unchecked>Bluetooth heart rate sensor</app-switch>
          </div>
        </div>
    </div>
</template> 

<script>
import Switch from '../components/Switch'

import io from "socket.io-client";
export default {
  name: "jumps",
  components: {
    'app-switch': Switch
  },
  data () {
    return {
        heartRates: [],
        value: false,
        text: ''
    }
  },
  watch: {
            value(val) {
                this.text = val ? 'Yes' : 'No'
            }
  },
  created() {
    //this.socket = io("http://localhost:3000");
    this.socket = io("https://mirrorcontrol.herokuapp.com/");
    //console.log(this.socket);
  },
  methods: {
    statusText() {
      // this.$refs.bpm.textContent = 'Searching...';
      //console.log(this.value);
      heartRateSensor.connect()
      .then(() => heartRateSensor.startNotificationsHeartRateMeasurement()
      .then(this.value = true)
      .then(this.handleHeartRateMeasurement)
      // .then(console.log(this.value))
      )
      .catch(error => {
        //this.$refs.bpm.textContent = 'oeps';
        //console.log('error');
        this.value = false;
        //console.log(this.value);
      });
    },
    handleHeartRateMeasurement(heartRateMeasurement) {
      //console.log('in functie handle');
      heartRateMeasurement.addEventListener('characteristicvaluechanged', event => {
        let heartRateMeasurement = heartRateSensor.parseHeartRate(event.target.value);
        //this.$refs.bpm.innerHTML = heartRateMeasurement.heartRate + ' &#x2764;';
        this.heartRates.push(heartRateMeasurement.heartRate);
        this.$store.dispatch('sendBluetoothSocket');
      });
      //this.$store.dispatch('sendBluetoothSocket');
    }
  }
}
</script>  