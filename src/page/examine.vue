<template>
  <div id="examine">
    <head-top head-title="检查安排" go-back='true'></head-top>
    <div class="examine">
      <div class="search">
        <div class="search_form">
          <input type="text" v-model="bedNum" placeholder="筛选姓名/床号" class="search-input">
        </div>
        <button @click="searchButton">确 定</button>
      </div>
      <ul class="list_wrapper">
        <router-link v-for="item in EXData" :to="{path:'exdetail',query:{id:item.xh}}" :key="item.xh" tag="li">
          <dl>
            <dd>
              <span class="bedNum">{{item.bedNum}}床</span>
              <span class="exName">{{item.name}}</span>
              <span class="exTime">检查时间：{{item.date}}</span>
            </dd>
            <dd>检查项目：{{item.checkName}}</dd>
            <dd>检查地点：{{item.Position}}</dd>
            <dd><span>检查时间：{{item.time}}</span><span class="fr">状态：<em>{{item.status}}</em></span></dd>
          </dl>
        </router-link>
      </ul>
    </div>
  </div>

</template>
<script>
  import headTop from '../components/head'
  import {examineData} from '../service/getData'

  export default {
    data() {
        return {
            StationID:'0397',
            bedNum:'',
            EXData:null,
        }
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
    },
    methods:{
        async initData() {
          let data = await examineData(this.StationID,this.bedNum);
          this.EXData = [...data]
        },
        async searchButton(){
            this.$router.push({path:'/examinSearch', query:{
                StationID:this.StationID,
                bedNum:this.bedNum,}
            });
        },
    }
  }
</script>
<style lang="scss" scoped>
  em, i {
    font-style: normal;
  }
  #examine {
    background: #f5f5f5;
  }
  .examine {
    margin-top:1.9rem;
  }
  .search {
    display: block;
    padding:.25rem 1rem;
    background-color: #e8e8e8;
    height: 1.5rem;
    button {
      border:none;
      background:transparent;
      color:#47a7f0;
      margin-left:.5rem;
      font-size:.6rem;
      line-height: 1rem;
    }
  }
  .search-input {
    width: 85%;
    margin: 0;
    min-height: 1rem;
    padding: .1rem .4rem;
    font-size: .55rem;
    text-align: center;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #fff;
    border: none;
    border-radius: .35rem;
    float: left;
  }
  .list_wrapper {
    margin-top:.5rem;
    li {
      background: #fff;
      margin-bottom: .8rem;
      padding-bottom:.2rem;
    }
  }
  .list_wrapper li dl {
    padding:0 .5rem;
  }
  .list_wrapper li dl dd:first-child {
    height:1.6rem;
  }
  .list_wrapper li dl dd,.list_wrapper li dl dd:last-child span {
    font-size:.55rem;
    line-height:1.2rem;
  }
  .list_wrapper li dl dd span {
    font-size:.6rem;
    line-height:1.2rem;
  }
  .list_wrapper li dl dd span.bedNum{
    background:#66cc99;
    padding:0 .3rem;
    line-height:1rem;
    height:1rem;
    color:#fff;
    display: inline-block;
  }
  .list_wrapper li dl dd span.exName {
    margin-left:.4rem;
  }
  .list_wrapper li dl dd span.exTime {
    font-size:.55rem;
    float: right;
  }
  .fr {
    float: right;
    em {
      color:red;
    }
  }
</style>
