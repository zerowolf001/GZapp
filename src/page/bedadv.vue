<template>
    <div class="bedlist">
        <head-top head-title="医嘱清单" go-back='true'></head-top>
        <ul v-if="bedAdvDetail">
            <li class="bed_list">
                <div class="bed_details">
                    <section class="bed_img">
                        <img v-if="bedAdvDetail.Gender == 0" src="../assets/icon/woman.png" >
                        <img v-else src="../assets/icon/man.png" >
                    </section>
                    <div class="bed_right">
                        <header>
                            <h4 class="bed_title ellipsis" :class="'lv_'+ bedAdvDetail.NursingLevel">{{bedAdvDetail.Name}}</h4>
                            <p class="age">女/{{bedAdvDetail.age}}岁</p>
                            <p>病历号：{{bedAdvDetail.ChartNo}}</p>
                        </header>
                        <h5 class="rating_num">
                            <section class="rating_num_left">
                                <span class="rating_feeNo">主治医生：{{bedAdvDetail.Doctor}}</span>
                                <span class="rating_inDate">入院时间：{{bedAdvDetail.ChkInAt}}</span>
                            </section>
                        </h5>
                        <div class="bed_detail_ul">
                            诊断描述：{{bedAdvDetail.Diagnosis}}
                        </div>
                    </div>
                </div>
                <div class="bed_num">
                    <span class="c_red">{{bedAdvDetail.BedNum}}号床</span>
                </div>
            </li>
        </ul>
        <div class="s_derive" v-if="bedAdvDetail">
            <table border="0" cellspacing="0" cellpadding="0">
                <thead>
                <tr>
                    <td>医嘱类型</td>
                    <td>医嘱内容</td>
                    <td>开始时间</td>
                    <td>医嘱状态</td>
                </tr>
                </thead>
                <tr v-for="item in bedAdvDetail.da">
                    <td colspan="4" class="s_derive_l">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td rowspan="2" class="cr6">{{item.type}}</td>
                                <td class="cr6">{{item.name}}</td>
                                <td rowspan="2" class="cr6">{{item.startTime}}</td>
                                <td rowspan="2" class="cr6">{{item.status}}</td>
                            </tr>
                            <tr>
                                <td class="fs4">总量：{{item.total}}{{item.priceunit}} 每次量：{{item.dose}}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import headTop from '../components/head'
    import footGuide from '../components/footGuide'
    import {bedAdvDetail} from '../service/getData'

    export default {
        data(){
            return {
                id: null,
                bedAdvDetail:null,
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
                this.bedAdvDetail = await bedAdvDetail(this.id)
            },
        },
    }
</script>
<style>
    .bedlist {
        margin-top: 1.95rem;
        margin-bottom:2.5rem;
    }
    .bed_list {
        border-bottom: 1px solid #f1f1f1;
    }
    .bed_list .bed_num {
        width: 100%;
        display: block;
        min-height: 1.35rem;
        line-height: 1.2rem;
        background-color: #fff;
        padding:0 .5rem;
    }
    .bed_list .bed_num span,.bed_list .bed_btm span{
        width:50%;
        font-size:.55rem;
        display: block;
        float: left;
        text-align: right;
    }
    .bed_list .bed_num span.c_red {
        color:#f0665a;
        font-size:.6rem;
        text-align: left;
    }
    .bed_list .bed_details {
        display: flex;
        padding:.5rem;
        background-color:#fff;
    }
    .bed_list .bed_details .bed_img {
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 50%;
        background-color: #ccc;
        font-size:1rem;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .bed_list .bed_details .bed_img img {
        width: 90%;
        height:90%;
    }
    .bed_list .bed_details .bed_right {
        padding-left:.4rem;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-box-flex: 1;
        -ms-flex: auto;
        flex: auto;
    }
    .bed_list .bed_details .bed_right header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .bed_list .bed_details .bed_right header .bed_title {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0;
        width: 4rem;
        color: #333;
        padding-top: .01rem;
        font-size: .6rem;
        line-height: .7rem;
        font-weight: 600;
    }
    .bed_list .bed_details .bed_right header .lv_1:before,.bed_list .bed_details .user-info header .lv_1:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #fff;
        font-weight: normal;
        background-color: #ff3fdb;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: '\4E00\7EA7';
        text-align: center;
        white-space: nowrap;
    }
    .bed_list .bed_details .bed_right header .lv_2:before,.bed_list .bed_details .user-info header .lv_2:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #fff;
        font-weight: normal;
        background-color: #2d77ff;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: '\4E8C\7EA7';
        text-align: center;
        white-space: nowrap;
    }
    .bed_list .bed_details .bed_right header .lv_3:before,.bed_list .bed_details .user-info header .lv_3:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #333;
        font-weight: normal;
        border:1px solid #eee;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: '\4E09\7EA7';
        text-align: center;
        white-space: nowrap;
    }
    .bed_list .bed_details .bed_right header .lv_4:before,.bed_list .bed_details .user-info header .lv_4:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #fff;
        font-weight: normal;
        background-color:#000;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: '\7279\7EA7';
        text-align: center;
        white-space: nowrap;
    }
    .bed_list .bed_details .bed_right header .lv_5:before,.bed_list .bed_details .user-info header .lv_5:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #fff;
        font-weight: normal;
        background-color:#666;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: '\7279\75BE';
        text-align: center;
        white-space: nowrap;
    }
    .bed_list .bed_details .bed_right header .lv_6:before,.bed_list .bed_details .user-info header .lv_6:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #fff;
        background-color: #FFBA31;
        font-weight: normal;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: '\91CD\75C7';
        text-align: center;
        white-space: nowrap;
    }
    .bed_list .bed_details .bed_right header .lv_7:before,.bed_list .bed_details .user-info header .lv_7:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #fff;
        font-weight: normal;
        background-color:orangered;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: '\75C5\513F';
        text-align: center;
        white-space: nowrap;
    }
    .bed_list .bed_details .bed_right header .lv_8:before,.bed_list .bed_details .user-info header .lv_8:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #fff;
        font-weight: normal;
        background-color: orangered;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: '\65B0\751F';
        text-align: center;
        white-space: nowrap;
    }
    .bed_list .bed_details .bed_right header .lv_9:before,.bed_list .bed_details .user-info header .lv_9:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #fff;
        font-weight: normal;
        background-color: orangered;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: '\65B0\7279';
        text-align: center;
        white-space: nowrap;
    }
    .bed_list .bed_btm span {
        text-align: left;
    }
    .bed_list .bed_btm span.a_r a {
        float: right;
        display: inline-block;
        background-color: #47a7f0;
        color:#fff;
        font-size:.5rem;
        line-height: .7rem;
        padding:.1rem .3rem;
        margin-left:.35rem;
        border-radius:.25rem;
    }
    .bed_list .rating_num .rating_num_left {
        margin:.15rem 0;
        font-size:.4rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .bed_list .rating_num .rating_num_left span {
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
    table{
        width: 100%;
    }
    table thead td {
        background-color:#fff;
        color:#999;
        font-size:.55rem;
        width:25%;
        text-align: center;
        padding:.3rem 0;
        border-bottom:3px solid #f9f9f9;
    }
    table tr td.s_derive_l {
        background-color:#fff;
        color:#999;
        font-size:.6rem;
        width:25%;
        text-align: center;
        border-bottom: 1px solid #eee;
    }
    table tr td.s_derive_l {
        font-size:.5rem;
    }
    table tr td:first-child,table thead td:first-child {
        width:20%;
    }
    table tr td:nth-of-type(2),table thead td:nth-of-type(2) {
        width:42%;
    }
    table tr td:nth-of-type(3) {
        width:22%;
    }
    .cr6 {
        color:#666;
    }
    .fs4 {
        font-size:.4rem;
    }
</style>