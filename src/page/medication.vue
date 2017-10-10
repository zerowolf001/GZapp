<template>
    <div class="bedlist">
        <head-top head-title="医嘱清单" go-back='true'></head-top>
        <div class="medication" v-if="medication">
            <span>{{medication.BedNum}}号床 {{medication.Name}}</span>
            <span class="xq">用药详情</span>
        </div>
        <div class="s_derive" v-if="medication">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr v-for="item in medication.md">
                    <td colspan="4" class="s_derive_l">
                        <table width="100%" border="0" cellspacing="5" cellpadding="0">
                            <tr>
                                <td width="60%">{{item.DgName}}</td>
                                <td>{{item.UdStatus}}</td>
                            </tr>
                            <tr>
                                <td class="cr6 fs4">药嘱剂量：{{item.UdDose}}{{item.UdUnit}}</td>
                                <td class="cr6 fs4">{{item.BeginDay}} {{item.BeginTime}}</td>
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
    import {medication} from '../service/getData'

    export default {
        data(){
            return {
                id: null,
                medication:null,
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
                this.medication = await medication(this.id)
            },
        },
    }
</script>
<style>
    .bedlist {
        margin-top:1.95rem ;
        margin-bottom:2.5rem;
    }
    .medication {
        display: flex;
        background:#fff;
        padding:.2rem .3rem;
    }
    .medication span:first-child {
        padding:.2rem .3rem;
        background-color:#28b567;
        color:#fff;
        margin-right:.5rem;
        font-size:.5rem;
    }
    .medication span.xq {
        padding:.2rem .3rem;
        font-size:.55rem;
        line-height: .7rem;
    }
    .bed_list .bed_num span,.bed_list .bed_btm span{
        width:50%;
        font-size:.55rem;
        display: block;
        float: left;
        text-align: right;
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
    table tr td.s_derive_l {
        background-color:#fff;
        color:#333;
        text-align: center;
        border-bottom: 1px solid #eee;
    }
    table tr td {
        font-size:.55rem;
    }
    .cr6 {
        color:#666;
    }
    .fs4 {
        font-size:.4rem;
    }
</style>