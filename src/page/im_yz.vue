<template>
    <div id="im_yz">
        <head-top head-title="待办医嘱" go-back='true'></head-top>
        <div class="dbyz">
            <ul>
                <li>
                    <div class="hr_time">2017-10-23 16:35:39</div>
                    <div class="hr_detail">
                        <div class="hr_title">
                            <p>C1-006今日医嘱</p>
                            <span>x</span>
                        </div>
                        <div class="yz_hr_detail">
                            注意伤口渗血，复合氨基酸2瓶，口服避孕药。量体温，量血压。注意伤口渗血，复合氨基酸2瓶，口服避孕药。量体温，量血压。
                        </div>
                        <div class="yz_click"><router-link to="yzdetail">查看详情></router-link></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import headTop from '../components/head'

    export default {
        data() {
            return{}
        },
        components:{
            headTop,
        },
    }
</script>
<style>
    .dbyz {
        margin-top:3rem;
    }
    .dbyz li {
        margin-bottom:.5rem;
    }
    .dbyz li .hr_time {
        text-align: center;
        color:#aeaeae;
        font-size:.55rem;
        height:1.2rem;
    }
    .dbyz li .hr_detail {
        background-color:#fff;
    }
    .dbyz li .hr_detail .hr_title {
        display: flex;
        padding:.5rem;
        line-height: 1rem;
        height:1.8rem;
        border-bottom: 1px solid #f3f3f3;
    }
    .dbyz li .hr_detail .hr_title p {
        font-size: .65rem;
        float: left;
        width: 97%;
    }
    .dbyz li .hr_detail .hr_title span {
        float: right;
        font-size: .65rem;
        color:#666;
    }
    .dbyz li .hr_detail .yz_hr_detail{
        padding:.5rem;
        color:#ccc;
    }
    .dbyz li .hr_detail .yz_click{
        text-align: right;
        padding:0 .5rem .5rem 0;
    }
    .dbyz li .hr_detail .yz_click a {
        color:#fff;
        background-color: #ee5959;
        padding:.08rem .15rem;
        border-radius: .3rem;
    }
</style>