<template>
    <span :class="spanClass">
        {{dayObject.label}}
        <img v-if="dayObject.active" class="week-img" src="/assets/img/done.svg" alt="done" />
        <img v-if="!dayObject.active" class="week-img" src="/assets/img/notDone.svg" alt="done" />
    </span>
</template>
<script>
export default {
    props: {
        dayObject: Object
    },
    data () {
        return {
        todayNumber: new Date().getDay(),
        }
    },
    computed: {
        spanClass() {
            let spanClass = "weekday-container";
            if (this.dayObject.index === this.todayNumber -1) {
                spanClass += " weekday-currentday"
            }
            return spanClass;
        }
    }
}
</script>

<style>

.weekday-container {
  display: flex;
  flex-direction: column-reverse;
  width: 2rem;
  padding: 0.4rem;
  opacity: 0.6;
}

.weekday-currentday {
  display: flex;
  flex-direction: column-reverse;
  width: 2rem;
  padding: 0.4rem;
  font-weight: bolder;
  opacity: 1;
}
</style>