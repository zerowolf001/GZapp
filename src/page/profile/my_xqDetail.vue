<template>
    <div id="xqDetail">
        <alert-tip v-if="showAlert" :showHide="showAlert" :alertText="alertText"></alert-tip>
    </div>
</template>
<script>
    import {demandRequest} from '../../service/getData'
    import alertTip from '../../components/alertTip'

    export default {
        data() {
            return {
                xh:null,
                StationID:'0397',
                showAlert: false,
                alertText: null,
            }
        },
        created(){
            this.xh = this.$route.query.id;
        },
        components: {
            alertTip
        },
        mounted(){
            this.initData();
        },
        methods:{
            async initData() {
                this.bedDetailData = await demandRequest(this.xh);
                this.showAlert = true;
                this.alertText = '处理成功';
                setTimeout(() => {
                    this.showAlert = false;
                    this.$router.go(-1)
                }, 1000);
            },
        }
    }
</script>
<style>
    #xqDetail .cl {
        margin-top:8rem;
        width: 100%;
        text-align: center;
        font-size: .65rem;
    }
</style>