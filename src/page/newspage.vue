<template>
  <div v-if="NoticeDetail">
      <head-top :head-title="'医院'+ NoticeDetail.type" go-back='true'></head-top>
      <section class="newsDetail">
        <h3>{{NoticeDetail.title}}</h3>
        <span>{{NoticeDetail.time}}</span>
        <div v-html="NoticeDetail.detail"></div>
      </section>
  </div>
  <div v-else>网络连接错误！</div>
</template>
<script>
    import {newspage} from '../service/getData'
    import headTop from '../components/head'
    import footGuide from '../components/footGuide'

    export default {
        data(){
            return {
                id: null,
                NoticeDetail: null,
            }
        },
        created(){
            this.id = this.$route.query.id;
        },
        mounted(){
            this.initData();
        },
        components:{
            headTop,
        },
        computed: {
        },
        methods: {
            async initData() {
                this.NoticeDetail = await newspage(this.id)
            },
        },
  }
</script>
<style lang="scss" scoped>
  .newsDetail {
    margin-top:2rem;
    background-color:#fff;
    min-height: 26.35rem;
  }
  .newsDetail h3 {
    padding:.2rem 0 0;
    font-size:.7rem;
    color:#333;
    font-weight: 500;
    line-height:1rem;
  }
  .newsDetail h3,.newsDetail span {
    text-align: center;
  }
  .newsDetail span {
    display: block;color:#ccc;
  }
  .newsDetail div {
    padding:0 .5rem;
    font-size:.6rem;
  }
  .newsDetail div p {
    color:#999;
    line-height:1rem;
  }
</style>
