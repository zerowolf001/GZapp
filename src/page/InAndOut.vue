<template>
    <div>
        <head-top head-title="出入院信息" go-back='true'></head-top>
        <div class="io">
            <section class="tab_title">
                <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">全部</span>
                <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">今日入院</span>
                <span :class="{choosed: categoryType === 3}" @click="categoryType = 3">今日出院</span>
                <span :class="{choosed: categoryType === 4}" @click="categoryType = 4">明日出院</span>
            </section>
            <transition name="router-fade">
                <section v-if="categoryType === 1">
                    <ul>
                        <li class="bed_list">
                            <table width="100%" border="0" cellspacing="5" cellpadding="0">
                                <tr>
                                    <td rowspan="3" align="center" valign="middle" width="20%">
                                        <div class="bed_img">
                                            <img src="../assets/icon/woman.png" >
                                        </div>
                                    </td>
                                    <td width="60%">
                                        <header>
                                            <h4 class="bed_title ellipsis lv_1">李四</h4>
                                            <p>女/16岁</p>
                                        </header>
                                    </td>
                                    <td rowspan="4" class="cr f6">全部</td>
                                </tr>
                                <tr>
                                    <td>13878899988 /主治医生：老王</td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul class="bed_detail_ul">
                                            <li>跌</li>
                                            <li>疮</li>
                                            <li>卧</li>
                                            <li>敏</li>
                                            <li>隔</li>
                                            <li>脱</li>
                                            <li>危</li>
                                            <li>重</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" class="cr f5">C001号床</td>
                                    <td>住院天数：</td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="bt">入院时间：2017年10月10日17:22:24</td>
                                    <td class="bt"><a>查看详情</a></td>
                                </tr>
                            </table>
                        </li>
                    </ul>
                </section>
                <section v-if="categoryType === 2">

                </section>
                <section v-if="categoryType === 3">

                </section>
                <section v-if="categoryType === 4">

                </section>
            </transition>
        </div>
    </div>
</template>
<script>
    import headTop from '../components/head'
    import footGuide from '../components/footGuide'

    export default {
        data(){
            return {
                categoryType: 1,
                toggled: false,
            }
        },
        components:{
            headTop
        },
        computed: {

        },
        methods: {

        },
    }
</script>
<style>
    .io {
        margin-top:2.2rem;
    }
    .tab_title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #fff;
        height: 1.5rem;
        margin: .5rem 0;
    }
    .tab_title span {
        height: 1.5rem;
        width: 33.333%;
        text-align: center;
        line-height: 1.5rem;
        font-size: .5rem;
        color:#ccc;
    }
    .tab_title span.choosed {
        border-bottom:1px solid #47a8f0;
        color: #47a8f0;
    }
    .bed_list {
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 1rem;
        background-color:#fff;
    }
    .bed_img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: #ccc;
        font-size:1rem;
    }
    .bed_img img {
        width: 90%;
        height:90%;
    }
    header {
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
    header .bed_title {
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
    }
    header .lv_1:before {
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
    header .lv_2:before {
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
    header .lv_3:before {
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
    header .lv_4:before {
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
    header .lv_5:before {
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
    header .lv_6:before {
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
    header .lv_7:before {
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
    header .lv_8:before {
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
    .bed_detail_ul {
        display: flex;
    }
    .bed_detail_ul li {
        font-size: .45rem;
        color: #999;
        background-color: #f1f1f1;
        padding:0 .15rem;
        border-radius: .2rem;
        margin-left: .08rem;
    }
    table tr td {
        padding:.02rem 0;
    }
    td.cr {
        color:#f0665a;
    }
    td.f6 {
        font-size:.6rem;
    }
    td.f5 {
        font-size: .55rem;
    }
    td.bt {
        border-top:1px solid #f6f6f6;
        padding:.2rem;
    }
    table tr td a {
        background-color: #47a7f0;
        color:#fff;
        font-size:.4rem;
        line-height: .7rem;
        padding:.1rem .2rem;
        margin-left:.35rem;
        border-radius:.25rem;
    }
</style>