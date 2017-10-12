<template>
    <div class="rating_page">
        <head-top head-title="我的满意度调查" go-back='true'></head-top>
        <div class="mark">
            <h3>我的评分</h3>
            <div class="mark_detail">
                <table width="50%" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td rowspan="2" class="grade">8.3分</td>
                        <td><rating-star :rating='item.rating'></rating-star></td>
                    </tr>
                    <tr>
                        <td>200人评价</td>
                    </tr>
                </table>
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
                faqData:null
            }
        },
        components:{
            headTop,
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
        text-align: center;
    }
    .mark_detail {
        padding:.5rem 0;
    }
    .mark_detail table tr td.grade {
        font-size:1.2rem;
        color:#dd3e3e;
    }
</style>