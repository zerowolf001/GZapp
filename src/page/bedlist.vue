<template>
    <div>
        <head-top head-title="病床" go-back='true'></head-top>
        <div class="bedlist">
            <bed-list></bed-list>
        </div>
        <foot-guide></foot-guide>
    </div>
</template>
<script>
    import headTop from '../components/head'
    import footGuide from '../components/footGuide'
    import bedList from '../components/bedlist'

    export default {
        data() {
            return {
            }
        },
        mounted(){
        },
        components:{
            headTop,
            footGuide,
            bedList,
        },
    }
</script>
<style>
    .bedlist {
        margin-top:1.95rem;
    }
</style>