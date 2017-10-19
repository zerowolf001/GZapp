<template>
    <div id="ex_detail">
        <head-top head-title="检查详情" go-back='true'></head-top>
        <div class="ex_detail">
            <section>
                <table width="100%" border="0" cellspacing="5" cellpadding="0">
                    <tr>
                        <td rowspan="3" align="center" valign="middle" width="20%">
                            <div class="bed_img">
                                <img src="../assets/icon/woman.png" >
                            </div>
                        </td>
                        <td width="60%">
                            <header>
                                <h4 class="bed_title ellipsis" :class="'lv_'+ item.nursingLevel">{{item.name}}</h4>
                                <p v-if="item.gender == 0">女/{{item.age}}岁</p>
                                <p v-else>男/{{item.age}}岁</p>
                            </header>
                        </td>
                        <td rowspan="4" class="cr f6">{{item.eexit}}</td>
                    </tr>
                    <tr>
                        <td>{{item.contactNo}} /主治医生：{{item.doctor}}</td>
                    </tr>
                    <tr>
                        <td>
                            <ul class="bed_detail_ul">
                                <li v-if="item.hrf == 1">跌</li>
                                <li v-if="item.soreRisk == 1">疮</li>
                                <li v-if="item.catheterOff == 1">脱</li>
                                <li v-if="item.allergy == 1">敏</li>
                                <li v-if="item.isolation == 1">隔</li>
                                <li v-if="item.critically == 1">病重</li>
                                <li v-if="item.critically == 2">病危</li>
                                <li v-if="item.fasting == 1">禁食</li>
                                <li v-if="item.specialDiets == 1">特殊饮食</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" class="cr f5">{{item.bedNum}}号床</td>
                        <td>住院天数：{{item.DOH}}</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="bt">入院时间：{{item.ChkInAt}}</td>
                        <td class="bt"><router-link :to="{path: 'iodetail', query:{id: item.xh}}">查看详情</router-link></td>
                    </tr>
                </table>
            </section>
        </div>
    </div>
</template>
<script>
    import headTop from '../components/head'
    import {examineDetail} from '../service/getData'

    export default {
        data(){
          return {
              id:null,
              exaData:'',
          }
        },
        components:{
            headTop
        },
        mounted(){
            this.initData();
        },
        computed: {

        },
        methods: {
            async initData () {
                this.exaData = await InOut(this.StationID);
            }
        },
    }

</script>