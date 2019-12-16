<template>
    <div class="spiegel-container">
      <div :class="connectedClass"></div>
      <img class="spiegelConnected-img" src="/assets/img/mirror.svg" alt="mirror" width=35>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
          ...mapState([
      'workouts',
      'socketConnected'
    ]),
    connectedClass() {
      let socketClass = "socket-true"
      if (this.socketConnected === false) {
        socketClass += " socket-false"

        return socketClass
      }

      return socketClass
    }
  }

}
</script>



<style>
.socket-true {
  background-color: #42B500;
  height: 1.3rem;
  color: white;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-top: -3.8rem;
  margin-bottom: -1rem;
  margin-right: -2.3rem;
  box-shadow: -0.2rem 0.2rem 0.3rem 0rem rgba(0,0,0,0.2);
}

.socket-false {
  background-color: #F05E5F;
  height: 1.3rem;
  color: white;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-top: -3.8rem;
  margin-bottom: -1rem;
  margin-right: -2.3rem;
  box-shadow: -0.2rem 0.2rem 0.3rem 0rem rgba(0,0,0,0.2);
}

.spiegel-container {
  display: flex;
  justify-content: flex-end;
}
.spiegelConnected-img {
  padding-right: 2rem;
  margin-top: -5rem;
  z-index: -1;
  
}
</style>