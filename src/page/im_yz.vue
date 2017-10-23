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
<style lang="scss" scoped>
    .dbyz {
        margin-top:3rem;
        li {
            margin-bottom:.5rem;
            .hr_time {
                text-align: center;
                color:#aeaeae;
                font-size:.55rem;
                height:1.2rem;
            }
            .hr_detail {
                background-color:#fff;
            }
            .hr_detail .hr_title {
                display: flex;
                padding:.5rem;
                line-height: 1rem;
                height:1.8rem;
                border-bottom: 1px solid #f3f3f3;
                p {
                    font-size: .65rem;
                    float: left;
                    width: 97%;
                }
                span {
                    float: right;
                    font-size: .65rem;
                    color:#666;
                }
            }
            .yz_hr_detail{
                padding:.5rem;
                color:#ccc;
                a {
                    color:#fff;
                    background-color: #ee5959;
                    padding:.08rem .15rem;
                    border-radius: .3rem;
                }
            }
        }
    }
</style>