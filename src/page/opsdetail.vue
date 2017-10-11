<template>
    <div>
        <head-top head-title="手术详情" go-back='true'></head-top>
        <div class="iodetail" v-if="opsDetail">
            <section class="iod_title">手术信息</section>
            <section class="iod_detail">
                <ul>
                    <li><span>姓　　名：{{opsDetail.name}}</span></li>
                    <li v-if="opsDetail.gender == 0"><span>性　　别：</span>女</li>
                    <li v-else><span>性　　别：</span>男</li>
                    <li><span>年　　龄：</span>{{opsDetail.age}}</li>
                    <li><span>病 历 号：</span>{{opsDetail.chartNo}}</li>
                    <li><span>床　　号：</span>{{opsDetail.bedNum}}</li>
                    <li><span>科　　室：</span>{{opsDetail.division}}</li>
                    <li><span>房　　间：</span>{{opsDetail.room}}</li>
                    <li><span>主治医生：</span>{{opsDetail.drName}}</li>
                    <li><span>麻 醉 法：</span>{{opsDetail.anesthesia}}</li>
                    <li><span>手术状态：</span>{{opsDetail.status}}</li>
                    <li><span>手术名称：</span>{{opsDetail.operationName}}</li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
    import headTop from '../components/head'
    import {opsDetail} from '../service/getData'

    export default {
        data(){
            return {
                id: null,
                opsDetail:null,
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
        methods: {
            async initData() {
                this.opsDetail = await opsDetail(this.id)
            },
        },
    }
</script>
<style>
    .iodetail {
        margin-top:2.2rem;
    }
    .iod_title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background-color: #fff;
        height: 1.5rem;
        line-height: 1.5rem;
        padding:0 1rem;
        font-size: .6rem;
    }
    .iod_detail {
        padding:.5rem;
        background:#fff;
        margin-top:.5rem;
        margin-bottom:1rem;
    }
    .iod_detail ul li {
        width: 100%;
        font-size: .55rem;
        padding-left:.8rem;
        height:1.2rem;
        line-height:1.2rem;
    }
    .iod_detail ul li.detail {
        min-height: 2.5rem;
        color:#999;
        line-height:1rem;
    }
    .iod_detail .fyqd {
        min-height:4rem;
    }
</style>