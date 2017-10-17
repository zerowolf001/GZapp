<template>
  <div class="date_container">
    <head-top head-title="排班安排" go-back='true'></head-top>
    <div class="calendar">
      <dl>
        <dt class="arrow" @click="weekPre(currentYear,currentMonth)">上一周</dt>
        <dt class="year-month" @click="pickYear(currentYear,currentMonth)">
          <span>{{currentDay}}</span>
        </dt>
        <dt class="arrow" @click="weekNext(currentYear,currentMonth)">下一周</dt>
      </dl>
      <ul class="weekdays">
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
        <li>日</li>
      </ul>
      <!-- 日期 -->
      <ul class="days">
        <li @click="pick(day)" v-for="(day, index) in days" :key="index">
          <!--本月-->
          <span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{ day.getDate() }}</span>
          <!--今天-->
          <span v-else-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class='active'>{{ day.getDate() }}</span>
          <span v-else>{{ day.getDate() }}</span>
        </li>
      </ul>
    </div>
    <div class="agenda">
      <header class="agenda_header">
        <h3>值班医生</h3>
      </header>
      <div class="agenda_container">
        <ul>
          <li v-for="item in dutyDataYS">
            <!--<section class="doc_img">
              <img src="../assets/icon/icon1.jpg" alt="">
            </section>-->
            <div class="doc_right">
              <header>
                <h4 v-if="item.Title === '主任'" class="doc_name tit_head">{{item.name}}</h4>
                <h4 v-else-if="item.Title === '副主任'" class="doc_name tit_f_head">{{item.name}}</h4>
                <h4 v-else="item.Title === '医生'" class="doc_name tit_none">{{item.name}}</h4>
              </header>
              <section class="departments">
                <span>科室：{{item.DivisionName}}</span>
                <span>排班：{{item.code}}</span>
                <span>分管床位：{{item.beds}}</span>
                <a :href='"tel:"+item.mobil'>电话：{{item.mobil}}</a>
              </section>
            </div>
          </li>
        </ul>
      </div>
      <header class="agenda_header">
        <h3>值班护士</h3>
      </header>
      <div class="agenda_container">
        <ul>
          <li v-for="item in dutyDataHS">
            <!--<section class="doc_img">
              <img src="../assets/icon/icon2.jpg" alt="">
            </section>-->
            <div class="doc_right">
              <header>
                <h4 v-if="item.Title === '护士长'" class="doc_name tit_nurse_head">{{item.name}}</h4>
                <h4 v-else="item.Title === '护士'" class="doc_name tit_nurse">{{item.name}}</h4>
              </header>
              <section class="departments">
                <span>科室：{{item.DivisionName}}</span>
                <span>排班：{{item.code}}</span>
                <span>分管床位：{{item.beds}}</span>
                <a :href='"tel:"+item.mobil'>电话：{{item.mobil}}</a>
              </section>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/head'
  import {dutyListYS,dutyListHS} from '../service/getData'
  import alertTip from '../components/alertTip'

  export default {
    data(){
      return {
          currentYear: 1970,   // 年份
          currentMonth: 1,  // 月份
          currentDay: 1,    // 日期
          currentWeek: 1,    // 星期
          days: [],
          stationID:'0397',
          dutyDataHS:'',
          dutyDataYS:'',
      }
    },

      mounted(){
          this.initData(null);
      },
    components:{
      headTop,
    },
    methods:{
        formatDate (year, month, day) {
            const y = year;
            let m = month;
            if (m < 10) m = `0${m}`;
            let d = day;
            if (d < 10) d = `0${d}`;
            return `${y}/${m}/${d}`
        },
        async initData (cur) {
            let date = '';
            if (cur) {
                date = new Date(cur)
            } else {
                date = new Date()
            }
            this.currentDay = date.getDate();         //今日日期 几号
            this.currentYear = date.getFullYear();    //当前年份
            this.currentMonth = date.getMonth() + 1;  //当前月份
            this.currentWeek = date.getDay(); // 1...6,0   // 星期几
            if (this.currentWeek === 0) {
                this.currentWeek = 7
            }
            const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay); // 今日日期 年-月-日
            this.days.length = 0;
            // 今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 35- this.currentWeek
            /* eslint-disabled */
            for (let i = this.currentWeek - 1; i >= 0; i -= 1) {
                const d = new Date(str);
                d.setDate(d.getDate() - i);
                // console.log(y:" + d.getDate())
                this.days.push(d)
            }
            for (let i = 1; i <= 7 - this.currentWeek; i += 1) {
                const d = new Date(str);
                d.setDate(d.getDate() + i);
                this.days.push(d)
            }
            this.pick(date);
        },
        //上个星期
        weekPre () {
            const d = this.days[0]; // 如果当期日期是7号或者小于7号
            d.setDate(d.getDate() - 7);
            this.initData(d);
        },
        //  下个星期
        weekNext () {
            const d = this.days[6];   // 如果当期日期是7号或者小于7号
            d.setDate(d.getDate() + 7);
            this.initData(d)
        },
        // 上个月，传入当前年份和月份
        pickPre (year, month) {
            const d = new Date(this.formatDate(year, month, 1));
            d.setDate(0);
            this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
        },
        // 下一個月   传入当前年份和月份
        pickNext (year, month) {
            const d = new Date(this.formatDate(year, month, 1));
            d.setDate(35);
            this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
        },
        pickYear: function() {
            this.initData();
        },
        // 当前选择日期
        async pick (date) {
            let str = this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
            this.currentDay = str;
            this.dutyDataYS = await dutyListYS(str,this.stationID);
            this.dutyDataHS = await dutyListHS(str,this.stationID);
        },
    }
  }
</script>
<style>
  /*.date_container {
    background-image: linear-gradient(180deg,#f65b55,#e0434e);
    padding: .333333rem;
  }*/

  .calendar {
    margin-top:1.95rem;
    /*background: linear-gradient(#f65b55,#E01F34);*/
    /*background: linear-gradient(#36db84 , #0eb27b);*/
    /*border-radius: .106667rem;*/
    overflow: hidden;
    /*margin-top: 1.95rem;*/
    background-color:#fff;
    border-bottom:1px solid #eee;
    position: fixed;
    width: 100%;
    z-index: 100;
    top:0;
  }
  .calendar dl {
    width:100%;
    justify-content: space-between;
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
    position: relative;
  }
  .calendar dl dt {
    color: #6f6f6f;
    font-size: 20px;
    text-transform: uppercase;
    /*letter-spacing: 3px;*/
  }
  .calendar dl dt.arrow {
    padding: 5px;
    font-size:.65rem;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .calendar dl dt.year-month {
    font-size: .7rem;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
  }
  .calendar dl dt.year-month span {
    display: block;
    margin:0 auto;
    color:#e64e4e;
  }
  .calendar ul.weekdays {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: .6rem;
  }
  .calendar ul.weekdays li {
    padding: .4rem 0; /*12px*/
    display: inline-block;
    width: 13.6%;
    text-align: center;
    color:#6f6f6f;
  }
  .calendar ul.days {
    padding: 0;
    background: #FFFFFF;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .calendar ul.days li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-pack: start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    display: inline-block;
    width: 14.2%;
    line-height:1.2rem;
    text-align: center;
    padding:10px 0;
    color: #6f6f6f;
    font-size: .6rem;
  }
  .calendar ul.days li span.active {
    display: inline-block;
    width:1.2rem;
    height:1.2rem;
    color: #fff;
    border-radius: 50%;
    background-color: #fa6854;
  }
  .calendar ul.days li span.other-month {
    color: #999;
  }
  .agenda {
    margin-top: 7.8rem;
  }
  .agenda header.agenda_header {
    border-bottom: 1px solid #eee;
    background-color:#fff;
  }
  .agenda header H3 {
    color: #333;
    font-size: 0.6rem;
    padding-left: .4rem;
    line-height: 1.6rem;
    font-weight: 600;
  }
  .agenda_container {
    background-color: #fff;
    margin-bottom: .7rem;
  }
  .agenda_container ul li {
    display: flex;
    border-bottom: 3px solid #f6f6f6;
    padding: 0.5rem;
  }
  .agenda_container .doc_img {
    width: 2.7rem;
    height: 3.33rem;
    border-radius: .15rem;
    background-color: #eee;
    font-size: 1rem;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .agenda_container ul li .doc_img img {
    width: 100%;
    height: 100%;
    opacity: .7;
  }
  .agenda_container .doc_right {
    padding-left: .7rem;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
  }
  .agenda_container .doc_right header {
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
  .doc_right header .tit_head:before {
    font-size: .65rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color: #47a7f0;
    padding: .17rem .25rem;
    margin-right: .2rem;
    content: '主任';
    text-align: center;
    white-space: nowrap;
    border-radius: .2rem;
  }
  .doc_right header .tit_f_head:before {
    font-size: .65rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color: #47a7f0;
    padding: .17rem .25rem;
    margin-right: .2rem;
    content: '副主任';
    text-align: center;
    white-space: nowrap;
    border-radius: .2rem;
  }
  .doc_right header .tit_none:before {
    font-size: .65rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color: #47a7f0;
    padding: .17rem .25rem;
    margin-right: .2rem;
    content: '医生';
    text-align: center;
    white-space: nowrap;
    border-radius: .2rem;
  }
  .doc_right header .tit_nurse_head:before {
    font-size: .65rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color: #fa6854;
    padding: .17rem .25rem;
    margin-right: .2rem;
    content: '护士长';
    text-align: center;
    white-space: nowrap;
    border-radius: .2rem;
  }
  .doc_right header .tit_nurse:before {
    font-size: .65rem;
    line-height: .65rem;
    color: #fff;
    font-weight: normal;
    background-color: #fa6854;
    padding: .17rem .25rem;
    margin-right: .2rem;
    content: '护士';
    text-align: center;
    white-space: nowrap;
    border-radius: .2rem;
  }
  .doc_right header .doc_name {
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
    font-size: .65rem;
    line-height: .65rem;
    font-weight: 700;
  }
  .departments span,.departments a {
    height: 0.8rem;
    margin-top: 0.3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .55rem;
    width: 50%;
    float: left;
  }
</style>

