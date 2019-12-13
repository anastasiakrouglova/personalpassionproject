<template>
    <div>
        <h1 class="title">Settings</h1>
        <p ref="bpm"></p>
        <div id="container">
          <div class="click-container" @click="statusText()" @click.native="statusText()">
            <!-- <app-switch class="checkbox-settings" v-model="value" unchecked> -->
            <app-switch class="checkbox-settings" v-model="checked">
              <!-- <input type="checkbox" v-model="checked"> -->
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
            <div class="mirror-settings">
              <div class="mirror-container">
              <img  src="/assets/img/mirror.svg" alt="mirror" width=30>
                <div class="mirror-div-setting">
                  <span class="type-settings">Smart Mirror</span> <br>
                  <span class="subtitle-settings">Fit to skate</span>
                </div>
                <img class="image-settings" src="/assets/img/mirrorConnected.svg" alt="mirrorConnected" width=30>
            </div>
            </div>
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
        //heartRates: [],
        value: false,
        text: '',
        checked: false
    }
  },
  watch: {
        value(val) {
            this.text = val ? 'Yes' : 'No'
        }
  },
  created() {
    this.socket = io("https://mirrorcontrol.herokuapp.com/");
  },
  methods: {
    statusText() {
      // this.$refs.bpm.textContent = 'Searching...';
      console.log(this.value);
      //this.checked = false;
      //console.log(this.checked);
      heartRateSensor.connect()
      .then(() => heartRateSensor.startNotificationsHeartRateMeasurement()
      .then(this.checked = true)
      .then(handleHeartRateMeasurement)
      .then(console.log(this.value))
      )
      .catch(error => {
        //this.$refs.bpm.textContent = 'oeps';
        console.log('error');
        this.checked = false;
        console.log(this.checked);
        //console.log(this.value);
      });
    },
    handleHeartRateMeasurement(heartRateMeasurement) {
      //console.log('in functie handle');
      //this.$store.dispatch(handleHeartRateMeasurement);
      //console.log(this.$store.state.heartRates);
      heartRateMeasurement.addEventListener('characteristicvaluechanged', event => {
        let heartRateMeasurement = heartRateSensor.parseHeartRate(event.target.value);
        this.$refs.bpm.innerHTML = heartRateMeasurement.heartRate + ' &#x2764;';
        this.$store.state.heartRates.push(heartRateMeasurement.heartRate);
        this.$store.dispatch('sendBluetoothSocket');
        console.log(this.$store.state.heartRates);
      });
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

.mirror-container {
  display: flex;
  justify-content:left;
}

.mirror-div-setting {
  padding-left: 1rem;
  padding-right: 5rem;
  text-align: left;
}

.mirror-settings {
  margin-left: 1rem;
}

</style>