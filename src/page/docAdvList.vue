<template>
    <div class="doc_search">
        <head-top head-title="医嘱清单" go-back='true'></head-top>
        <section class="searchDerive">
            <dl>
                <dd><span v-if="nameOrNum !=''">姓名/病床号:{{nameOrNum}}</span>
                    <span v-if="chartNo !=''">病历号:{{chartNo}}</span>
                    <span v-if="startTime !=''">{{startTime}}至{{endTime}}</span>
                    <span v-else>全部</span>的筛选结果</dd>
            </dl>
            <div class="s_derive" v-if="docList.length!=''">
                <table border="0" cellspacing="0" cellpadding="0">
                    <thead>
                    <tr>
                        <td>病患信息</td>
                        <td>医嘱内容</td>
                        <td>开始时间</td>
                        <td>医嘱状态</td>
                    </tr>
                    </thead>
                    <tr v-for="item in docList">
                        <td colspan="4" class="s_derive_l">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="cr6">{{item.pName}}</td>
                                    <td class="cr6 fs5">{{item.name}}</td>
                                    <td rowspan="2" class="cr6 fs5">{{item.time | formDate}}</td>
                                    <td rowspan="2" class="fs5" :class="item.color">{{item.status}}</td>
                                </tr>
                                <tr>
                                    <td class="fs5">{{item.bedNum}}</td>
                                    <td class="fs4">总量：{{item.total}}{{item.priceunit}}每次量：{{item.dose}}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="s_derive" v-else>
                <p>无结果！请检查输入的姓名/床号或病历号、日期是否准确!</p>
            </div>
        </section>
    </div>
</template>
<script>
    import headTop from '../components/head'
    import footGuide from '../components/footGuide'
    import {docadvData} from '../service/getData'

    export default {
        data(){
            return {
                docList:[],
            }
        },
        created(){
            this.StationID = this.$route.query.StationID;
            this.nameOrNum = this.$route.query.nameOrNum;
            this.chartNo = this.$route.query.chartNo;
            this.startTime = this.$route.query.startTime;
            this.endTime = this.$route.query.endTime;
        },
        mounted(){
            this.initData();
        },
        components:{
            headTop,
        },
        filters:{
            formDate:v =>v.substring(5)
        },
        methods: {
            async initData() {
                let res = await docadvData(this.StationID,
                    this.nameOrNum,
                    this.chartNo,
                    this.startTime,
                    this.endTime);
                this.docList = [...res];
            },
        }
    }
</script>
<style lang="scss" scoped>
    .searchDerive {
        margin-top:1.95rem;
    }
    .searchDerive dl {
        background-color:#fff;
        font-size:.5rem;
        text-align: center;
        padding:.3rem 0;
    }
    .searchDerive dl dd {
        color:#ccc;
        font-size:.5rem;
    }
    .searchDerive dl dd span{
        color:#ccc;
        font-size:.5rem;
    }
    .s_derive {
        margin-top:.35rem;
    }
    .s_derive p {
        text-align: center;
        font-size:.65rem;
        color:#ff1721;
        padding:1.2rem;
    }
    .searchDerive table{
        width: 100%;
    }
    .searchDerive table thead td {
        background-color:#fff;
        color:#999;
        font-size:.55rem;
        width:25%;
        text-align: center;
        padding:.3rem 0;
        border-bottom:3px solid #f9f9f9;
    }
    .searchDerive table tr td.s_derive_l {
        background-color:#fff;
        color:#999;
        font-size:.6rem;
        width:25%;
        text-align: center;
        border-bottom: 1px solid #f5f5f5;
        height:2.5rem;
    }
    .s_derive_l table tr td:first-child,.searchDerive table thead td:first-child {
        width:22%;
    }
    .s_derive_l table tr td:nth-of-type(2),.searchDerive table thead td:nth-of-type(2) {
        width:34%;
    }
    .s_derive_l table tr td:nth-of-type(3) {
        width:28%;
    }
    .cr6 {
        color:#666;
    }
    .fs5 {
        font-size:.5rem;
    }
    .red {
        color:red;
    }
    .green {
        color:green;
    }
    .fs4 {
        font-size:.4rem;
    }
</style>
