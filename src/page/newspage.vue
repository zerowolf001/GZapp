<template>
  <div>
      <head-top head-title="信息公告" go-back='true'></head-top>
      <section class="newsDetail" v-if="NoticeDetail">
        <h3>{{NoticeDetail.title}}</h3>
        <span>{{NoticeDetail.time}}</span>
        <div v-html="NoticeDetail.detail">
        </div>
      </section>
  </div>
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
<style>
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