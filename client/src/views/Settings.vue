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
        heartRates: [38, 29, 45]
    }
  },
  methods: {
statusText() {
    console.log('lalala')
    this.$refs.bpm.textContent = 'Searching...';
    //this.data;
    //heartRateSensor.connect()
    //.then(() => heartRateSensor.startNotificationsHeartRateMeasurement().then(handleHeartRateMeasurement))
    //.catch(error => {
    //statusText.textContent = 'oeps, geen toestel gevonden';
  //});
}

  }
}
</script>  