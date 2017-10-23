<template>
    <div class="rating_page">
        <head-top head-title="常见问题" go-back='true'></head-top>
        <ul>
            <li v-for="item in faqData">
                <dl>
                    <dd><span>问</span>{{item.question}}</dd>
                    <dd><span>答</span>{{item.answer}}</dd>
                </dl>
            </li>
        </ul>
    </div>
</template>
<script>
    import headTop from '../../components/head'
    import {faq} from '../../service/getData'

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
            this.initData();
        },
        methods: {
            async initData () {
                this.faqData = await faq();
            }
        },
    }
</script>
<style lang="scss" scoped>
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
    .rating_page ul li {
        margin:.5rem 0;
        background:#fff;
        padding:.4rem;
    }
    .rating_page ul li dl dd {
        font-size:.6rem;
        line-height:1.2rem;
    }
    .rating_page ul li dl dd:first-child span {
        font-size:.6rem;
        background:#de5467;
        color:#fff;
        border-radius: .2rem;
        padding:0 .5rem;
        margin-right:.5rem;
    }
    .rating_page ul li dl dd:last-child span {
        font-size:.6rem;
        background:#48ba68;
        color:#fff;
        border-radius: .2rem;
        padding:0 .5rem;
        margin-right:.5rem;
    }
</style>