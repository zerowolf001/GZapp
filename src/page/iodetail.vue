<template>
    <div>
        <head-top head-title="出入院详情" go-back='true'></head-top>
        <div class="iodetail" v-if="ioDetail">
            <section class="iod_title">入院信息</section>
            <section class="iod_detail">
                <ul>
                    <li><span>姓　　名：{{ioDetail.name}}</span></li>
                    <li v-if="ioDetail.gender == 0"><span>性　　别：</span>女</li>
                    <li v-else><span>性　　别：</span>男</li>
                    <li><span>年　　龄：</span>{{ioDetail.age}}</li>
                    <li><span>电　　话：</span>{{ioDetail.contactNo}}</li>
                    <li><span>床　　号：</span>{{ioDetail.bedNum}}</li>
                    <li><span>护理级别：</span>{{ioDetail.nursingLevel}}</li>
                    <li><span>入院时间：</span>{{ioDetail.ChkInAt}}</li>
                    <li><span>住　　址：</span>{{ioDetail.address}}</li>
                </ul>
            </section>
            <section class="iod_title">出院信息</section>
            <section class="iod_detail">
                <ul>
                    <li><span>住院天数：{{ioDetail.DOH}}</span></li>
                    <li><span>出院时间：{{ioDetail.EDT}}</span></li>
                    <li><span>出院小结：</span></li>
                    <li class="detail">{{ioDetail.summary}}</li>
                </ul>
            </section>
            <section class="iod_title">费用清单</section>
            <section class="iod_detail">
                <ul>
                    <li><span>医保类型：{{ioDetail.insurance}}</span></li>
                    <li><span>费　　用：￥{{ioDetail.fee}}</span></li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
    import headTop from '../components/head'
    import {ioDetail} from '../service/getData'

    export default {
        data(){
            return {
                id: null,
                ioDetail:null,
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
                this.ioDetail = await ioDetail(this.id)
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