<template>
  <div id="app">
      <Navigation v-if="this.$router.history.current.path == '/' || this.$router.history.current.path == '/pirouette' || this.$router.history.current.path == '/stretch'"/>
      <transition
        :name="slideTransition"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
    <router-view class="router-container" />
    </transition>
    <Tabs class="tabs-container"/>
  </div>
</template>

<script>
const DEFAULT_TRANSITION = 'fade';

import {mapState} from 'vuex'
import Tabs from "@/views/Tabs.vue";
import Navigation from "@/views/Navigation.vue"

export default {
  name: 'app',
  components: {
    Tabs, 
    Navigation
  },
  data() {
    return {
      prevHeight: 0,
      slideTransition: DEFAULT_TRANSITION,
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let slideTransition = to.meta.slideTransition || from.meta.slideTransition;
      if (slideTransition === 'slide') {
        const toDepth = to.path.split('/').length;
        const toStretch = to.path
        if (this.$router.history.current.path === '/stretch') {
          slideTransition = toStretch ? 'slide-right' : 'slide-left';
        } 
        else {
        slideTransition = toStretch === '/pirouette' || toStretch === '/stretch' ? 'slide-left' : 'slide-right';
        }
      }

      this.slideTransition = slideTransition || DEFAULT_TRANSITION;

      next();
    });
  },
   methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
  mounted() {
    this.$store.dispatch('loadWorkouts');
    this.$store.dispatch('loadStats')
    this.$store.dispatch('loadHeartRate')
  },
  computed: {
    ...mapState([
      'workouts',
      'socketConnected'
    ]),
    connectedClass() {
      // if (socketConnected) {
      //   let socketConnectedd = this.socketConnected
      //   console.log("lalalalla")

      //   return socketConnectedd
      // }
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.router-container {
  overflow-x:visible;
  overflow-y: scroll;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}


body { margin: 0; }
</style>
