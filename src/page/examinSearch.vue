<template>
    <div>
        <head-top head-title="检查筛选" go-back='true'></head-top>
        <div class="searchEx">
            <div class="search"><span>{{bedNum}}</span>的筛选结果</div>
            <ul class="list_wrapper">
                <router-link v-for="item in EXDataArr" :to="{path:'exdetail',query:{id:item.xh}}" :key="item.xh" tag="li">
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
        data(){
            return {
                EXDataArr:[],
            }
        },
        created(){
            this.StationID = this.$route.query.StationID;
            this.bedNum = this.$route.query.bedNum;
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
            //初始化时获取基本数据
            async initData() {
                let res = await examineData(this.StationID,this.bedNum,);
                this.EXDataArr = [...res];
            },
        }
    }
</script>
<style lang="scss" scoped>
    .searchEx {
        margin-top:1.95rem;
        margin-bottom:2.5rem;
    }
    .search {
        display: block;
        padding:.25rem 1rem;
        background-color: #e8e8e8;
        text-align: center;
        span {
            color:red;
        }
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
