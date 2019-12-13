<template>
<div>
    <p>GOOD JOB!!</p>
    <div @click="reloadPage()">REFRESH</div>
    <router-link to="/chart"><div>GA NAAR CHARTS</div></router-link>
    
</div>
</template>


<script>
export default {
    methods: {
        reloadPage() {
            location.reload(true);
        }
    }
}
</script>