<template>
    <div class="rating_page">
        <head-top head-title="我的满意度调查" go-back='true'></head-top>
        <div class="mark">
            <h3>我的评分</h3>
            <div class="mark_detail">
                <table width="40%" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td rowspan="2" class="grade">{{markData.satisfieCount}}</td>
                        <td><rating-star :rating='markData.satisfieCount'></rating-star></td>
                    </tr>
                    <tr>
                        <td>{{markData.pNum}}人评价</td>
                    </tr>
                </table>
            </div>
            <div class="mark_star">
                <ul>
                    <li>
                        <dl>
                            <dd>5星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + markData.fiveStar/100*60+ '%'"></dd>
                            <dd>{{markData.fiveStar}}%</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dd>4星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + markData.fourStar/100*60+ '%'"></dd>
                            <dd>{{markData.fourStar}}%</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dd>3星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + markData.threeStar/100*60+ '%'"></dd>
                            <dd>{{markData.threeStar}}%</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dd>2星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + markData.twoStar/100*60+ '%'"></dd>
                            <dd>{{markData.twoStar}}%</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dd>1星：</dd>
                            <dd class="BarChatInside"></dd>
                            <dd class="BarChatOutside" :style="'width:' + markData.oneStar/100*60+ '%'"></dd>
                            <dd>{{markData.oneStar}}%</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
        <div class="suggest">
            <header><h3>反馈建议</h3><p>总共{{suggestData.length}}条</p></header>
            <dl v-for="item in suggestData">
                <dt>
                    <span>{{item.name}}:</span>
                    <rating-star :rating='item.starCount'></rating-star>
                    <em>{{item.time}}</em>
                </dt>
                <dd>{{item.view}}</dd>
            </dl>
        </div>
    </div>
</template>
<script>
    import headTop from '../../components/head'
    import ratingStar from '../../components/ratingStar'
    import {suggest,mark} from '../../service/getData'

    export default {
        data() {
            return {
                dnName:'001035',
                suggestData:[],
                markData:'',
            }
        },
        components:{
            headTop,
            ratingStar,
        },
        mounted(){
            this.initData();
        },
        methods: {
            async initData () {
                this.suggestData = await suggest(this.dnName);
                this.markData = await mark(this.dnName);
            }
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
        background:#f6f6f6;
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
    .suggest {
        margin-top:1rem;
        background:#fff;
    }
    .suggest header {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: auto;
        -webkit-flex: auto;
        flex: auto;
        line-height:2.2rem;
        height:2rem;
    }
    .suggest header h3 {
        font-size:1.2em;
        color:#47a7f0;
        text-indent: 1em;
        -webkit-box-flex: auto;
        -webkit-flex: auto;
        flex: auto;
    }
    .suggest header p {
        color:#47a7f0;
        -webkit-box-flex: none;
        -webkit-flex: none;
        flex: none;
        padding-right:1em;
    }
    .suggest dl dt {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        box-orient: horizontal;
        -webkit-flex-direction: row;
        flex-direction: row;
        height:2rem;
        border-top:1px solid #eaeaea;
        border-bottom:1px solid #eaeaea;
        padding:0 .5rem;
        font-size:.6rem;
    }
    .suggest dl dt span{
        -webkit-flex-shrink: 0;
        flex-shrink: 0;
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
    .suggest dl dt .rating_container{
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        box-orient: horizontal;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        box-align: center;
        -webkit-align-items: center;
        align-items: center;
        overflow: hidden;
        -webkit-box-flex: 1;
        box-flex: 1;
        -webkit-flex-grow: 1;
        flex-grow: 1;
        -webkit-flex-shrink: 1;
        flex-shrink: 1;
        top:0;
        margin-left:.2rem;
    }
    .suggest dl dt em {
        font-style: normal;
    }
    .suggest dl dd {
        padding:.2rem .5rem .8rem .5rem;
        font-size:.55rem;
        line-height:.8rem;
        color:#666;
    }
</style>