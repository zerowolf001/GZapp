<template>
    <div>
        <head-top head-title="出入院信息" go-back='true'></head-top>
        <div class="io">
            <section class="tab_title">
                <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">今日入院</span>
                <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">今日出院</span>
                <span :class="{choosed: categoryType === 3}" @click="categoryType = 3">明日出院</span>
            </section>
            <transition name="router-fade">
                <section v-if="categoryType === 1">
                    <dl>
                        <dd class="io_num">
                            <div class="profileImage">
                                <img src="../assets/icon/woman.png"/>
                                <p class="bed_num">5号床</p>

                            </div>
                            <div class="user-info">
                                <header>
                                    <h4 class="bed_title ellipsis lv_1">刘美娜</h4>
                                    <p class="sex">女/25岁</p>
                                </header>
                                <h5 class="bed_distance">
                                    <p class="fee"><span>15879706968</span> <span class="segmentation">/</span>主治医生:李金芬</p>
                                </h5>
                                <ul class="detail_ul">
                                    <li>跌</li>
                                    <li>过敏</li>
                                    <li>压疮</li>
                                    <li>病危</li>
                                </ul>
                                <h5 class="fee_distance">
                                    <p class="fee">住院天数：5天</p>
                                </h5>
                            </div>
                        </dd>
                        <dd class="io_num">
                            <div class="profileImage">
                                <img src="../assets/icon/woman.png"/>
                                <p class="bed_num">5号床</p>

                            </div>
                            <div class="user-info">
                                <header>
                                    <h4 class="bed_title ellipsis lv_1">代丽蓉</h4>
                                    <p class="sex">女/25岁</p>
                                </header>
                                <h5 class="bed_distance">
                                    <p class="fee"><span>15879706968</span> <span class="segmentation">/</span>主治医生:李金芬</p>
                                </h5>
                                <ul class="detail_ul">
                                    <li>跌</li>
                                    <li>过敏</li>
                                    <li>压疮</li>
                                    <li>病危</li>
                                </ul>
                                <h5 class="fee_distance">
                                    <p class="fee">住院天数：5天</p>
                                </h5>
                            </div>
                        </dd>
                        <dd class="io_num">
                            <div class="profileImage">
                                <img src="../assets/icon/woman.png"/>
                                <p class="bed_num">5号床</p>

                            </div>
                            <div class="user-info">
                                <header>
                                    <h4 class="bed_title ellipsis lv_1">张莉</h4>
                                    <p class="sex">女/25岁</p>
                                </header>
                                <h5 class="bed_distance">
                                    <p class="fee"><span>15879706968</span> <span class="segmentation">/</span>主治医生:李金芬</p>
                                </h5>
                                <ul class="detail_ul">
                                    <li>跌</li>
                                    <li>过敏</li>
                                    <li>压疮</li>
                                    <li>病危</li>
                                </ul>
                                <h5 class="fee_distance">
                                    <p class="fee">住院天数：5天</p>
                                </h5>
                            </div>
                        </dd>
                        <dd class="io_num">
                            <div class="profileImage">
                                <img src="../assets/icon/woman.png"/>
                                <p class="bed_num">5号床</p>

                            </div>
                            <div class="user-info">
                                <header>
                                    <h4 class="bed_title ellipsis lv_1">彭芳</h4>
                                    <p class="sex">女/25岁</p>
                                </header>
                                <h5 class="bed_distance">
                                    <p class="fee"><span>15879706968</span> <span class="segmentation">/</span>主治医生:李金芬</p>
                                </h5>
                                <ul class="detail_ul">
                                    <li>跌</li>
                                    <li>过敏</li>
                                    <li>压疮</li>
                                    <li>病危</li>
                                </ul>
                                <h5 class="fee_distance">
                                    <p class="fee">住院天数：5天</p>
                                </h5>
                            </div>
                        </dd>
                    </dl>
                </section>
                <section v-if="categoryType === 2">
                    <dl>
                        <dd class="io_num">
                            <div class="profileImage">
                                <img src="../assets/icon/woman.png"/>
                                <p class="bed_num">5号床</p>

                            </div>
                            <div class="user-info">
                                <header>
                                    <h4 class="bed_title ellipsis lv_1">代丽蓉</h4>
                                    <p class="sex">女/25岁</p>
                                </header>
                                <h5 class="bed_distance">
                                    <p class="fee"><span>15879706968</span> <span class="segmentation">/</span>主治医生:李金芬</p>
                                </h5>
                                <ul class="detail_ul">
                                    <li>跌</li>
                                    <li>过敏</li>
                                    <li>压疮</li>
                                    <li>病危</li>
                                </ul>
                                <h5 class="fee_distance">
                                    <p class="fee">住院天数：5天</p>
                                </h5>
                            </div>
                        </dd>
                        <dd class="io_num">
                            <div class="profileImage">
                                <img src="../assets/icon/woman.png"/>
                                <p class="bed_num">5号床</p>

                            </div>
                            <div class="user-info">
                                <header>
                                    <h4 class="bed_title ellipsis lv_1">李金芬</h4>
                                    <p class="sex">女/25岁</p>
                                </header>
                                <h5 class="bed_distance">
                                    <p class="fee"><span>15879706968</span> <span class="segmentation">/</span>主治医生:李金芬</p>
                                </h5>
                                <ul class="detail_ul">
                                    <li>跌</li>
                                    <li>过敏</li>
                                    <li>压疮</li>
                                    <li>病危</li>
                                </ul>
                                <h5 class="fee_distance">
                                    <p class="fee">住院天数：5天</p>
                                </h5>
                            </div>
                        </dd>
                        <dd class="io_num">
                            <div class="profileImage">
                                <img src="../assets/icon/woman.png"/>
                                <p class="bed_num">5号床</p>

                            </div>
                            <div class="user-info">
                                <header>
                                    <h4 class="bed_title ellipsis lv_1">彭芳</h4>
                                    <p class="sex">女/25岁</p>
                                </header>
                                <h5 class="bed_distance">
                                    <p class="fee"><span>15879706968</span> <span class="segmentation">/</span>主治医生:李金芬</p>
                                </h5>
                                <ul class="detail_ul">
                                    <li>跌</li>
                                    <li>过敏</li>
                                    <li>压疮</li>
                                    <li>病危</li>
                                </ul>
                                <h5 class="fee_distance">
                                    <p class="fee">住院天数：5天</p>
                                </h5>
                            </div>
                        </dd>
                    </dl>
                </section>
                <section v-if="categoryType === 3">
                    <dl>
                        <dd class="io_num">
                            <div class="profileImage">
                                <img src="../assets/icon/woman.png"/>
                                <p class="bed_num">5号床</p>

                            </div>
                            <div class="user-info">
                                <header>
                                    <h4 class="bed_title ellipsis lv_1">代丽蓉</h4>
                                    <p class="sex">女/25岁</p>
                                </header>
                                <h5 class="bed_distance">
                                    <p class="fee"><span>15879706968</span> <span class="segmentation">/</span>主治医生:李金芬</p>
                                </h5>
                                <ul class="detail_ul">
                                    <li>跌</li>
                                    <li>过敏</li>
                                    <li>压疮</li>
                                    <li>病危</li>
                                </ul>
                                <h5 class="fee_distance">
                                    <p class="fee">住院天数：5天</p>
                                </h5>
                            </div>
                        </dd>
                    </dl>
                </section>
            </transition>
        </div>
    </div>
</template>
<script>
    import headTop from '../components/head'

    export default {
        data(){
            return {
                categoryType: 1,
                toggled: false,
            }
        },
        components:{
            headTop,
        },
        computed: {

        },
        methods: {

        },
    }
</script>
<style>
    .io {
        margin-top:2rem;
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
        height: 2rem;
        box-shadow: 0 1px 3px 0 rgba(0,37,55,.05);
        margin-bottom: .5rem;
    }
    .tab_title span {
        height: 2rem;
        width: 33.333%;
        text-align: center;
        line-height: 2rem;
        font-size: .6rem;
        color:#ccc;
    }
    .tab_title span.choosed {
        border-bottom:1px solid #47a8f0;
        color: #47a8f0;
    }
    .tab_title span:last-child {
        border-right:none;
    }
    .io_num {
        display: block;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        box-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding:.5rem .5rem .3rem;
        background:#fff;
    }
    .io_num .profileImage {
        box-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 3rem;
    }
    .io_num .profileImage img {
        background:#eee;
        display: inline-block;
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 50%;
        vertical-align: middle;
    }
    .io_num .profileImage p.bed_num {
        vertical-align: middle;
        color:#333;
        line-height: 1.5rem;
        text-align: center;
        width: 2.7rem;

    }
    .io_num .user-info {
        padding-left: .4rem;
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-box-flex: 1;
        -ms-flex: auto;
        flex: auto;
        position: relative;
    }
    .io_num .user-info header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .io_num .user-info .bed_title {
        width: 3.5rem;
        color: #333;
        padding-top: .01rem;
        font-size: .65rem;
        line-height: 1rem;
        font-weight: 700;
    }
    .io_num .user-info p.sex {
        margin: 0;
        float: left;
        width: 2.5rem;
        color: #333;
        padding-top: .01rem;
        font-size: .4rem;
        line-height: 1rem;
    }
    .io_num .user-info header ul {
        display: flex;
    }
    .io_num .user-info h5 {
        padding:.2rem 0;
    }
    .io_num .user-info h5 p {
        color:#999;
    }
    .io_num .detail_ul {
        display: flex;
        padding:0;
        margin:0;
    }
    .io_num .detail_ul li {
        font-size: .5rem;
        color: #999;
        background-color:#f1f1f1;
        padding: 0 .2rem;
        border-radius: .25rem;
        margin-right: .15rem;
        border:none;
        margin-left: 0;
    }
</style>