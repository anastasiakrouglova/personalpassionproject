<template>
    <div>
        <h1 class="title">Settings</h1>
        <!-- <div id="container">
            <div @click="statusText()" ref="bpm">PRESS TO SET BLUETOOTH WITH &#x2764;</div>
            <canvas id="waves"></canvas>
        </div> -->
        <!-- ref="bpm"  -->
        <p ref="bpm"></p>
        <div id="container">
          <div class="click-container" @click="statusText()" @click.native="statusText()">
            <app-switch class="checkbox-settings" v-model="value" unchecked>
              <div class="info-settings">
              <img class="image-settings" src="/assets/img/bluetooth.svg" alt="bluetooth" width=15>
                <div>
                  <span class="type-settings">Heart Rate Sensor</span> <br>
                  <span class="subtitle-settings">Polar A70</span>
                </div>
              </div>
            </app-switch>
          </div>
          <div class="click-container">
            <app-switch  class="checkbox-settings"  v-model="value" unchecked>

              <div class="info-settings">
              <img class="image-settings" src="/assets/img/mirror.svg" alt="mirror" width=30>
                <div>
                  <span class="type-settings">Smart Mirror</span> <br>
                  <span class="subtitle-settings">Fit to skate</span>
                </div>
            </div>
            </app-switch>
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
        // heartRates: [],
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
        this.$refs.bpm.innerHTML = heartRateMeasurement.heartRate + ' &#x2764;';
        this.$store.state.heartRates.push(heartRateMeasurement.heartRate);
        this.$store.dispatch('sendBluetoothSocket');
        //console.log(this.$store.state.heartRates);
      });
      //this.$store.dispatch('sendBluetoothSocket');
      
    }
  }
}
</script>  


<style>
.click-container {
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  border-radius: 0.9rem;
  box-shadow: inset 0.1rem -0.2rem 0.5rem rgba(241, 243, 246, 0.9);
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0.8rem 0rem;
}

.image-settings {
  padding-right: 1rem;
}

.checkbox-settings {
  margin-left: 15rem;
}

.info-settings {
    display: flex;
    margin-left: -16rem;
}


.subtitle-settings {
  color: #91ABD6;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.type-settings {
  font-weight: bold;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;
  padding-left: 2rem;
  padding-top: 0.2rem;
}

</style>