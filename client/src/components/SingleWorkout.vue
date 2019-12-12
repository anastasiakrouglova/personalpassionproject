<template >
    <div>
        <div class="maxi-container" v-if="this.$route.path === '/'">
            <div class="container" v-for='workout in onlyJumps' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                <div>
                    <div class="darkOverflow"></div>
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.duration}} - {{workout.level}}</p>
                    <img class="bg-image" :src="'/assets/img/cover/' + workout.img + '.png'" alt="jump2" width=60%>
                </div>
                </router-link>
            </div>
        </div>
        <div class="maxi-container" v-if="this.$route.path === '/pirouette'">
            <div class="container" v-for='workout in onlyPirouettes' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                <div>
                    <div class="darkOverflow"></div>
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.duration}} - {{workout.level}}</p>
                    <img class="bg-image" :src="'/assets/img/cover/' + workout.img + '.png'" alt="jump2" width=60%>
                </div>
                </router-link>
            </div>
        </div>
        <div class="maxi-container" v-if="this.$route.path === '/stretch'">
            <div class="container" v-for='workout in onlyStretch' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                <div>
                    <div class="darkOverflow"></div>
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.duration}} - {{workout.level}}</p>
                    <img class="bg-image" :src="'/assets/img/cover/' + workout.img + '.png'" alt="jump2" width=60%>
                </div>
                </router-link>
            </div>
        </div>
    </div>
    
</template>


<script>
export default {
  props: {
    type: String,
    title: String,
  }, 
  computed: {
    all() {
        return this.$store.state.workouts;
    },
    onlyJumps() {
        return this.$store.state.workouts.filter(jump => {
            return jump.type === 'jump'
        })
    },
    onlyPirouettes() {
        return this.$store.state.workouts.filter(workout => {
            return workout.type === 'pirouette'
        })
    },
    onlyStretch() {
        return this.$store.state.workouts.filter(stretch => {
            return stretch.type === 'stretch'
        })
    },
  }
};
</script>

<style>
.maxi-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
}

.container{
    background-image: linear-gradient(145deg, #3C3C3C, #050505);
    box-shadow: 0 4px 8px 0 rgba(93,182,213,0.2);
    width: 95%;
    height: 15rem;
    border-radius: 5px;
    margin: 0.5rem;
    letter-spacing: 0.02rem;
    line-height: 1.2rem;
    position: relative;
    overflow: hidden;
}

.router-item {
    text-decoration: none;
}

.exercise {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    z-index: 5;
    padding-top: 4rem;
    line-height: 2rem;
}

.time {
    color: white;
    font-size: 0.7rem;
    text-align: left;
    padding-left: 1rem;
    opacity: 0.7;
    padding-top: 0.4rem;
    position: relative;
    text-align: center;
    z-index: 5;
}


.bg-image {
    position: absolute;
    top: 55%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%;
    transform: translate(-50%,-50%);
    width: 27rem;
}


.darkOverflow {
    color: black;
    background-color: black;
    width: 100%;
    z-index: 1;
    height: 20rem;
    position: absolute;
    opacity: 0.38;
    margin-top: -4rem;
}


</style>
