<template>
    <div id="im_xq">
        <head-top head-title="待办需求" go-back='true'></head-top>
        <div class="im_xq" v-if="XQDataArr">
            <section class="tab_title">
                <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">医护需求</span>
                <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">一般需求</span>
                <span :class="{choosed: categoryType === 3}" @click="categoryType = 3">其他需求</span>
            </section>
            <section v-if="categoryType === 1">
                <div class="dbxq">
                    <ul>
                        <li v-for="item in XQDataArr" v-if="item.Type == 2">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td rowspan="2" align="center" valign="middle" class="tx_img"><img src="../../assets/icon/woman.png" alt=""></td>
                                    <td width="22%">{{item.BedNum}}床</td>
                                    <td>{{item.pName}}</td>
                                    <td class="datm">{{item.dateTime | framDate}} {{item.insertTime}}</td>
                                </tr>
                                <tr>
                                    <td colspan="2" width="48%" class="des">{{item.Description}}</td>
                                    <td class="clxq"><router-link :to="{path:'myxqdetail',query:{id:item.xh}}">处理需求</router-link></td>
                                </tr>
                            </table>
                        </li>
                    </ul>
                </div>
            </section>
            <section v-if="categoryType === 2">
                <div class="dbxq">
                    <ul>
                        <li v-for="item in XQDataArr"  v-if="item.Type == 1">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td rowspan="2" align="center" valign="middle" class="tx_img"><img src="../../assets/icon/woman.png" alt=""></td>
                                    <td width="18%">{{item.BedNum}}床</td>
                                    <td>{{item.pName}}</td>
                                    <td class="datm">{{item.dateTime | framDate}} {{item.insertTime}}</td>
                                </tr>
                                <tr>
                                    <td colspan="2" width="45%" class="des">{{item.Description}}</td>
                                    <td class="clxq"><router-link :to="{path:'myxqdetail',query:{id:item.xh}}">处理需求</router-link></td>
                                </tr>
                            </table>
                        </li>
                    </ul>
                </div>
            </section>
            <section v-if="categoryType === 3">
                <div class="dbxq">
                    <ul>
                        <li v-for="item in XQDataArr" v-if="item.Type == 3">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td rowspan="2" align="center" valign="middle" class="tx_img"><img src="../../assets/icon/woman.png" alt=""></td>
                                    <td width="18%">{{item.BedNum}}床</td>
                                    <td>{{item.pName}}</td>
                                    <td class="datm">{{item.dateTime | framDate}} {{item.insertTime}}</td>
                                </tr>
                                <tr>
                                    <td colspan="2" width="45%" class="des">{{item.Description}}</td>
                                    <td class="clxq"><router-link :to="{path:'myxqdetail',query:{id:item.xh}}">处理需求</router-link></td>
                                </tr>
                            </table>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import headTop from '../../components/head'
    import {stayRequest} from '../../service/getData'

    export default {
        data() {
            return {
                categoryType: 1,
                StationID: '0397',
                dnName:'001035',
                toggled: false,
                XQDataArr: [],
            }
        },
        mounted(){
            this.initData();
        },
        components:{
            headTop,
        },
        filters:{
            framDate:v =>v.substring(5,10)
        },
        methods:{
            async initData() {
                this.XQDataArr = await stayRequest(this.dnName);
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue:#47a8f0;
    teble td {
        border-collapse:collapse;
        padding:0;
        margin:0;
    }
    .tab_title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #fff;
        height: 2rem;
        margin: .5rem 0;
        span {
            height: 2rem;
            width: 33.333%;
            text-align: center;
            line-height: 2rem;
            font-size: .6rem;
            color:#ccc;
            &.choosed {
                border-bottom:1px solid $blue;
                color: $blue;
            }
        }
    }
    .im_xq {
        margin-top:1.95rem;
        li {
            display: flex;
            background:#fff;
            margin-bottom:.5rem;
            td{
                font-size:.65rem;
                padding-top:.2rem;
                vertical-align:bottom;
                &.tx_img{
                    img {
                        width:2.5rem;
                        height:2.5rem;
                        background:#ddd;
                    }
                }
                &.datm {
                    font-size: .6rem;
                    color:#999;
                    text-align: right;
                    padding-right: .5rem;
                }
                &.des {
                    line-height: 1rem;
                    font-size:.7rem;
                    color:red;
                    vertical-align:top;
                }
                &.clxq{
                    text-align: right;
                    padding-right: .5rem;
                    vertical-align:top;
                    a {
                        display: inline-block;
                        background-color: $blue;
                        text-align: center;
                        border-radius:.3rem;
                        color:#fff;
                        line-height: 1.2rem;
                        width: 3.1rem;
                        font-size:.65rem;
                    }
                }

            }
        }

    }
</style>
