<template>
  <div class="MessageToast">
    <p class="tip_text">{{alertText}}</p>
  </div>
</template>
<script>
  export default {
    data(){
      return{
      }
    },
    props: ['alertText']
  }
</script>
