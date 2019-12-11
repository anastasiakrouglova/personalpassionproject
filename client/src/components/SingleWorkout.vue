<template >
    <div>
        <div class="maxi-container" v-if="this.$route.path === '/'">
            <li class="container" v-for='workout in onlyJumps' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                <div>
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.duration}} - {{workout.level}}</p>
                    <img class="bg-image" :src="'/assets/img/cover/' + workout.img + '.png'" alt="jump2" width=60%>
                </div>
                </router-link>
            </li>
        </div>
        <div class="maxi-container" v-if="this.$route.path === '/pirouette'">
            <li class="container" v-for='workout in onlyPirouettes' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                <div>
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.duration}} - {{workout.level}}</p>
                    <img class="bg-image" :src="'/assets/img/cover/' + workout.img + '.png'" alt="jump2" width=60%>
                </div>
                </router-link>
            </li>
        </div>
        <div class="maxi-container" v-if="this.$route.path === '/stretch'">
            <li class="container" v-for='workout in onlyStretch' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                <div>
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.duration}} - {{workout.level}}</p>
                    <img class="bg-image" :src="'/assets/img/cover/' + workout.img + '.png'" alt="jump2" width=60%>
                </div>
                </router-link>
            </li>
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
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    padding-left: 1rem;
}

.container{
    list-style-type: none;
    background-color: black;
    box-shadow: 0 4px 8px 0 rgba(93,182,213,0.2);
    width: 10rem;
    height: 15rem;
    border-radius: 5px;
    margin: 0.5rem;
    min-width: 10rem;
    letter-spacing: 0.02rem;
    overflow: hidden;
    line-height: 1.2rem;
}

.router-item {
    text-decoration: none;
}

.exercise {
    color: white;
    font-size: 1rem;
    margin-bottom: -1rem;
    font-weight: bold;
    display: relative;
    text-align: left;
    padding-left: 1rem;
    text-transform: uppercase;
}

.time {
    color: white;
    font-size: 0.7rem;
    display: absolute;
    text-align: left;
    padding-left: 1rem;
    opacity: 0.7;
    padding-top: 0.4rem;
}


.bg-image {
    left: -2;
    width: 190px;
    margin-top: -1rem;
    margin-left: -4rem;
    z-index: -1;
    display: relative;
}


</style>
