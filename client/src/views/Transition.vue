<template>
<div>
    <p>GOOD JOB!!</p>
    <div >
    <button @click="reloadPage()">GO TO CHARTS</button>
    <!-- <router-link  to="/chart"><div>GA NAAR CHARTS</div></router-link> -->
    </div>
</div>
</template>


<script>
export default {
    methods: {
        reloadPage() {
            this.$router.push('/chart', () => {
            location.reload(true);
            });
            
        }
    }
}
</script>