<template>
    <div>
        <head-top head-title="病床筛选" go-back='true'></head-top>
        <div class="searchBed">
            <div class="search"><span>{{nameOrNo}}</span>的筛选结果</div>
            <ul  v-if="bedList.length!=''">
                <li v-for="item in bedList">
                    <div class="bed_num">
                        <span class="c_red">{{item.BedNum}}号床</span>
                        <span>病历号：{{item.ChartNo}}</span>
                    </div>
                    <div class="bed_details">
                        <section class="bed_img">
                            <img v-if="item.Gender == 0" src="../assets/icon/woman.png" >
                            <img v-else src="../assets/icon/man.png" >
                        </section>
                        <div class="bed_right">
                            <header>
                                <h4 class="bed_title ellipsis" :class="'lv_'+ item.NursingLevel">{{item.Name}}</h4>
                                <p v-if="item.Gender==0">女/{{item.age}}岁</p>
                                <p v-else>男/{{item.age}}岁</p>
                            </header>
                            <h5 class="rating_num">
                                <section class="rating_num_left">
                                    <span class="rating_feeNo">{{item.ContactNo}}</span>
                                    <span class="rating_inDate">主治医生：{{item.Doctor}}</span>
                                </section>
                            </h5>
                            <ul class="bed_detail_ul">
                                <li v-if="item.hrf == 1">跌</li>
                                <li v-if="item.sore == 1">疮</li>
                                <li v-if="item.bedRest == 1">卧</li>
                                <li v-if="item.allergy == 1">敏</li>
                                <li v-if="item.isolation == 1">隔</li>
                                <li v-if="item.catheterOff == 1">脱</li>
                                <li v-if="item.critically == 1">危</li>
                                <li v-if="item.critically == 2">重</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bed_btm">
                        <span>入院时间：{{item.ChkInAt}}</span>
                        <span class="a_r">
                            <a>查看医嘱</a>
                            <a>用药详情</a>
                        </span>
                    </div>
                </li>
            </ul>
            <div class="s_derive" v-else>
                <p>无结果！请检查输入的姓名/床号或病历号是否准确!</p>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from '../components/head'
    import footGuide from '../components/footGuide'
    import {bedList} from '../service/getData'

    export default {
        data(){
            return {
                bedList:[],
            }
        },
        created(){
            this.StationID = this.$route.query.StationID;
            this.nameOrNo = this.$route.query.nameOrNo;
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
                let res = await bedList(this.StationID,this.nameOrNo,);
                this.bedList = [...res];
            },
        }
    }
</script>
<style lang="scss" scoped>
    .searchBed {
        margin-top:1.95rem;
        margin-bottom:2.5rem;
    }
    .search {
        display: block;
        padding:.25rem 1rem;
        background-color: #e8e8e8;
        text-align: center;
    }
    .search span {
        color:red;
    }
    .bed_list {
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 1rem;
    }
    .searchBed .bed_num,.searchBed .bed_btm {
        width: 100%;
        display: block;
        min-height: 1.35rem;
        line-height: 1.2rem;
        background-color: #fff;
        border-bottom:.1rem solid #f3f3f3;
        padding:0 .5rem;
    }
    .searchBed .bed_num span,.searchBed .bed_btm span{
        width:50%;
        font-size:.55rem;
        display: block;
        float: left;
        text-align: right;
    }
    .searchBed .bed_num span.c_red {
        color:#f0665a;
        font-size:.6rem;
        text-align: left;
    }
    .searchBed .bed_details {
        display: flex;
        padding:.5rem;
        background-color:#fff;
    }
    .searchBed .bed_details .bed_img {
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 50%;
        background-color: #ccc;
        font-size:1rem;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .searchBed .bed_details .bed_img img {
        width: 90%;
        height:90%;
    }
    .searchBed .bed_details .bed_right {
        padding-left:.4rem;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-box-flex: 1;
        -ms-flex: auto;
        flex: auto;
    }
    .searchBed .bed_details .bed_right header {
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
    .searchBed .bed_details .bed_right header .bed_title {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0;
        width: 5rem;
        color: #333;
        padding-top: .01rem;
        font-size: .6rem;
        line-height: .7rem;
    }
    .searchBed .bed_details .bed_right header .lv_1:before,.searchBed .bed_details .user-info header .lv_1:before {
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
    .searchBed .bed_details .bed_right header .lv_2:before,.searchBed .bed_details .user-info header .lv_2:before {
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
    .searchBed .bed_details .bed_right header .lv_3:before,.searchBed .bed_details .user-info header .lv_3:before {
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
    .searchBed .bed_details .bed_right header .lv_4:before,.searchBed .bed_details .user-info header .lv_4:before {
        font-size: .5rem;
        line-height: .65rem;
        color: #333;
        font-weight: normal;
        border:1px solid #eee;
        padding: 0 .1rem;
        border-radius: .1rem;
        margin-right: .2rem;
        content: ' ';
        text-align: center;
        white-space: nowrap;
    }
    .searchBed .bed_details .bed_right header .lv_5:before,.searchBed .bed_details .user-info header .lv_5:before {
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
    .searchBed .bed_details .bed_right header .lv_6:before,.searchBed .bed_details .user-info header .lv_6:before {
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
    .searchBed .bed_details .bed_right header .lv_7:before,.searchBed .bed_details .user-info header .lv_7:before {
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
    .searchBed .bed_details .bed_right header .lv_8:before,.searchBed .bed_details .user-info header .lv_8:before {
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
    .searchBed .bed_details .bed_right header .lv_9:before,.searchBed .bed_details .user-info header .lv_9:before {
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
    .searchBed .bed_details .bed_detail_ul,.searchBed .bed_details h5.rating_num {
        display: flex;
        margin:.15rem 0;
    }
    .searchBed .bed_details .bed_detail_ul li {
        font-size: .45rem;
        color: #999;
        background-color: #f1f1f1;
        padding:0 .15rem;
        border-radius: .2rem;
        margin-left: .08rem;
    }
    .searchBed .bed_btm {
        border-top:.1rem solid #f3f3f3;
        border-bottom:none;
    }
    .searchBed .bed_btm span {
        text-align: left;
    }
    .searchBed .bed_btm span.a_r {
        margin-top:.15rem;
    }
    .searchBed .bed_btm span.a_r a {
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
    .s_derive {
        margin-top:.35rem;
    }
    .s_derive p {
        text-align: center;
        font-size:.65rem;
        color:#ff1721;
        padding:1.2rem;
    }
</style>