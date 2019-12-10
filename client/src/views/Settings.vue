<template>
    <div>
        <p>Settings</p>
        <div id="container">
            <div @click="statusText()" ref="bpm">PRESS TO SET BLUETOOTH WITH &#x2764;</div>
            <canvas id="waves"></canvas>
        </div>
        <!-- <heartRateSensor/> -->
        <!-- <script src="../bluetooth/heartRateSensor.js"></script> -->
        <!-- <script src="../bluetooh/app.js"></script> -->
    </div>
</template> 

<script>
//import heartRateSensor from "./bluetooth/app.js"

export default {
  name: "jumps",
  components: {
    //heartRateSensor
    
  },
  data () {
    return {
        //heartRates: [38, 29, 45],
        heartRates: []
    }
  },
  methods: {
statusText() {
  // this.$refs.bpm.textContent = 'Searching...';
  
  heartRateSensor.connect()
  .then(() => heartRateSensor.startNotificationsHeartRateMeasurement().then(this.handleHeartRateMeasurement))
  .catch(error => {
    this.$refs.bpm.textContent = 'oeps';
  });
},
handleHeartRateMeasurement(heartRateMeasurement) {
  //console.log('in functie handle');
  heartRateMeasurement.addEventListener('characteristicvaluechanged', event => {
    var heartRateMeasurement = heartRateSensor.parseHeartRate(event.target.value);
    this.$refs.bpm.innerHTML = heartRateMeasurement.heartRate + ' &#x2764;';
    this.heartRates.push(heartRateMeasurement.heartRate);
  });
}

  }
}
</script>  