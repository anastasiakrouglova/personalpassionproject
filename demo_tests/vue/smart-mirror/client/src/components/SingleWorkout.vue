<template >
    <div>
        <div class="maxi-container" v-if="this.$route.path === '/'">
            <li class="container" v-for='workout in onlyJumps' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                    <img src="../assets/img/jump1.svg" alt="jump1" width=60%>
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.time}}</p>
                    
                </router-link>
            </li>
        </div>
        <div class="maxi-container" v-if="this.$route.path === '/pirouette'">
            <li class="container" v-for='workout in onlyPirouettes' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.time}}</p>
                </router-link>
            </li>
        </div>
        <div class="maxi-container" v-if="this.$route.path === '/stretch'">
            <li class="container" v-for='workout in onlyStretch' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.time}}</p>
                </router-link>
            </li>
        </div>
    </div>
    
</template>


<script>
export default {
  props: {
    type: String,
    title: String
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
    }
  }
};
</script>


<style>
.maxi-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container{
    list-style-type: none;
    background-color: #FF5F5D;
    box-shadow: 0 4px 8px 0 rgba(255,95,93,0.2);
    width: 10rem;
    height: 10rem;
    border-radius: 5px;
    margin: 0.5rem;
    min-width: 10rem;
}

.router-item {
    text-decoration: none;
}

.exercise {
    color: white;
    font-size: 1rem;
    margin-bottom: -1rem;
    font-weight: bold;
}

.time {
    color: white;
    font-size: 0.8rem
}
</style>
