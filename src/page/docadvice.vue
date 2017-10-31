<template>
    <div class="doc_search">
        <head-top head-title="医嘱搜索" go-back='true'></head-top>
        <section id="search">
            <form class="searchForm">
            <dl class="doc_container">
                <dd class="bedBest_list">
                    <dl>
                        <dd><span>姓名/床号</span><em><input type="text" v-model="nameOrNum" placeholder="请输入患者姓名/床号"></em></dd>
                        <dd><span>病例号</span><em><input type="text" v-model="chartNo" placeholder="请输入病历号"></em></dd>
                        <dd><span>医嘱类型</span><em><select v-model="selected">
                          <option value="" disabled>不限</option>
                          <option v-for="item in advList">{{item.type}}</option>
                        </select></em></dd>
                    </dl>
                </dd>
                <dd class="bedBest_list" style="margin-bottom:.2rem;">
                    <dl>
                        <dd>医嘱时间</dd>
                    </dl>
                </dd>
                <dd class="bedBest_date">
                    <dl>
                        <dd><span><input type="date" v-model="startTime"></span>至 <span><input type="date" v-model="endTime" id="trday"></span></dd>
                    </dl>
                </dd>
                <dd class="btn" @click="searchButton">筛选</dd>
            </dl>
            </form>
        </section>
        <foot-guide></foot-guide>
    </div>
</template>

<script>
    import headTop from '../components/head'
    import footGuide from '../components/footGuide'
    import {advcieType} from '../service/getData'

    export default {
        data() {
          function GetDateStr(AddDayCount) {
            let dd = new Date();
            dd.setDate(dd.getDate()+AddDayCount);
            const y = dd.getFullYear();
            let m = dd.getMonth()+1;
            let d = dd.getDate();
            if (d < 10) {
              d = '0' + d;
            }
            if (m < 10) {
              m = '0' + m;
            }
            return y+"-"+m+"-"+d;
          }
          return{
                StationID:'0397',
                nameOrNum:'',
                chartNo:'',
                startTime:GetDateStr(0),
                endTime:GetDateStr(3),
                selected: '',
                advList:'',
            }
        },
        components:{
            headTop,footGuide,
        },
        mounted(){
            this.initData();
        },
        methods:{
            async initData() {
              this.advList = await advcieType();
            },
            async searchButton(){
//                this.docAdvList = await docadvData(this.StationID,this.nameOrNum,this.startTime,this.endTime);
                this.$router.push({path:'/advList', query:{
                    StationID:this.StationID,
                    nameOrNum:this.nameOrNum,
                    chartNo:this.chartNo,
                    startTime:this.startTime,
                    endTime:this.endTime,
                }});
            }
        }
    }
</script>
<style lang="scss" scoped>
    #search {
        margin-top:2.1rem;
    }
    dl.doc_container .bedBest_list {
        margin-bottom:1rem;
        background-color: #fff;
    }
    dl.doc_container .bedBest_date {
        background-color: #fff;
    }
    dl.doc_container .bedBest_list dl {
        border-top:1px solid #eee;
        background-color: #fff;
    }
    dl.doc_container .bedBest_date dl {
        position:relative;
        font-size:.68rem;
        padding:.4rem 1rem .4rem .5rem;
        text-align: center;
    }
    dl.doc_container .bedBest_date dd {
        color:#333;
        display:flex;
    }
    dl.doc_container .bedBest_list dd {
        position:relative;
        border-bottom:1px solid #eee;
        font-size:.6rem;
        padding:.4rem 1rem .4rem .5rem;
    }
    dl.doc_container .bedBest_list dd span {
        display: inline-block;
        width: 4.5rem;
    }
    dl.doc_container .bedBest_list dd em {
        display: inline-block;
        font-size: .6rem;
        color: #333;
        font-style: normal;
        font-weight: 400;
        margin-left:1.2rem;
    }
    dl.doc_container .bedBest_list dd i {
        position: absolute;
        right: 1rem;
        top: 50%;
        display: inline-block;
        content: "";
        width: .5rem;
        height: .5rem;
        border: solid #eee;
        border-width: 3px 3px 0 0;
        -webkit-transform: translate(0, -50%) rotate(45deg);
        transform: translate(0, -50%) rotate(45deg);
    }
    .bedBest_list input {
        border:none;
        width: 100%;
        height: 1.2rem;
        font-size: .65rem;
    }
    input[type='date']{
        border:none;
        color:#47a8f0;
        padding-left:1rem;
        font-size: .65rem;
    }
    dd.btn{
        margin:.8rem auto 0 -5rem;
        width:10rem;
        height: 1.8rem;
        background-color:#47a8f0;
        color:#fff;
        font-size: .7rem;
        line-height:1.2rem;
        left:50%;
        text-align: center;
        letter-spacing:.25rem;
        display: block;
    }
    input:-ms-input-placeholder{
        color: #cdcdcd;
    }
    input::-webkit-input-placeholder{
        color: #cdcdcd;
    }
    select{
        height:1.2rem;
        width:4rem;
        font-size:.65rem;
    }
</style>
