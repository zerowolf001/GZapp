<template>
    <div class="rating_page">
        <head-top head-title="我的满意度调查" go-back='true'></head-top>
        <div class="mark">
            <h3>我的评分</h3>
            <div class="mark_detail">
                <table width="40%" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td rowspan="2" class="grade">8.3分</td>
                        <td><rating-star :rating='8.3'></rating-star></td>
                    </tr>
                    <tr>
                        <td>200人评价</td>
                    </tr>
                </table>
            </div>
            <div class="mark_star">
                <ul>
                    <li>
                        <dl>
                            <dd>5星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + 30/100*60+ '%'"></dd>
                            <dd>30%</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dd>4星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + 30/100*60+ '%'"></dd>
                            <dd>30%</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dd>3星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + 60/100*60+ '%'"></dd>
                            <dd>60%</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dd>2星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + 18/100*60+ '%'"></dd>
                            <dd>18%</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dd>1星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + 10/100*60+ '%'"></dd>
                            <dd>10%</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from '../../components/head'
    import ratingStar from '../../components/ratingStar'

    export default {
        data() {
            return {
                faqData:null,
            }
        },
        components:{
            headTop,
            ratingStar,
        },
        mounted(){
        },
        methods: {

        },
    }
</script>
<style>
    .rating_page{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f2f2f2;
        z-index: 202;
        padding-top: 1.95rem;
    }
    .mark {
        background:#fff;
    }
    .mark h3 {
        height:1.95rem;
        line-height:1.95rem;
        border-bottom:1px solid #eee;
        text-align: center;
        color:#dd3e3e;
        font-size:1.2em;
    }
    .mark_detail table tr td {
        font-size:.4rem;
    }
    .mark_detail {
        padding:.5rem 0;
    }
    .mark_detail table tr td.grade {
        font-size:1.2rem;
        color:#dd3e3e;
    }
    .mark_star {
        width:10rem;
        margin:.5rem auto;
        height:7rem;
    }
    .mark_star ul li {
        position: relative;
        display: flex;
        height:1.2rem;
        line-height:1.2rem;
    }
    .mark_star ul li dl {
        width: 100%;
    }
    .mark_star ul li dl dd{
        display: inline-block;
    }
    .mark_star ul li dl dd:first-child {
        position: absolute;
        width: 20%;
        left: 0;
        font-size:.6rem;
    }
    .mark_star ul li dl dd:last-child {
        position: absolute;
        width: 20%;
        right: 0;
        font-size:.6rem;
        text-align: right;
    }
    .mark_star ul li dl dd.BarChatInside {
        position: absolute;
        background:#000;
        height:.8rem;
        margin:.2rem 0;
        width: 60%;
        left: 20%;
    }
    .mark_star ul li dl dd.BarChatOutside {
        position: absolute;
        height:.8rem;
        margin:.2rem 0;
        width: 60%;
        left: 20%;
        background:#47a7f0;
        animation: positive 2s;
    }
    @-webkit-keyframes positive {
        0% { width: 0%;}
    }
    @keyframes positive {
        0% { width:0%; }
    }
</style>