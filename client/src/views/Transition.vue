<template>
<div class="container-transition">
    <p>GOOD JOB!!</p>
    <span class="countdown">{{countDown}}</span>
    <div >
    <!-- <button @click="reloadPage()">GO TO CHARTS</button> -->
    <video src="/assets/video/water.mp4" autoplay loop muted width= 60%></video>
    <!-- <img src="/assets/img/done.gif" alt="good job"> -->
    <p class="text-transition">Drink enough water to rehydrate to maintain the balance of body fluids.</p>
    </div>
</div>
</template>


<script>
export default {
    data() {
    return {
        countDown: 2
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
        if(this.countDown < 0) {
            this.countDown = 0;
            this.$router.push('/chart', () => {
            location.reload(true);
            });
        }
    },
    methods: {
        reloadPage() {
            this.$router.push('/chart', () => {
            location.reload(true);
            });
            
        }
    }
}
</script>


<style >
 .text-transition {
      margin-bottom: 4rem;
      padding: 0rem 1rem;
  }


  .countdown {
      opacity: 0;
  }

  .container-transition {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
  }
</style>