<template>
  <div class="launch-container">
    <p class="timer" @click="start()">{{countDown}}</p>
    <img clas="img-connection" src="../assets/img/connection.svg" alt="connection" >
    <p class="text">Leg je gsm aan de kant en ga voor de spiegel staan.</p>
  </div>
</template>

<script>
export default {
data() {
    return {
        countDown: 5
    }
},
created() {
    this.isRunning = true
    if(this.countDown > 0) {
        setInterval(() => {
            this.countDown --
        }, 1000)
    }    
},
updated() {
    console.log(this.countDown);
    if(this.countDown < 0) {
        console.log("stooop")
        this.countDown = 0;
        this.$router.push('/detail/' + this.$route.params.id + '/training');
    }
}
}
</script>

<style>
  .button-start {
  color:white;
  background-color: #3E74B8;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  border-radius: 2rem;
  box-shadow: 0rem 0.3rem 0.5rem rgba(62, 116, 184, 0.3);
  }

  .timer {
      font-size: 6rem;
      font-weight: bold;
      margin-bottom: 0rem;
      margin-top: 2rem;
  }


  .launch-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
  }

  .text {
      margin-bottom: 4rem;
  }
</style>