<template>
  <div class="date_container">
    <!--<head-top head-title="排班安排" go-back='true'></head-top>-->
    <div class="calendar">
      <dl>
        <dt class="arrow" @click="weekPre(currentYear,currentMonth)">❮</dt>
        <dt class="year-month" @click="pickYear(currentYear,currentMonth)">
          <span>{{ currentYear }}年{{ currentMonth }}月</span>
        </dt>
        <dt class="arrow" @click="weekNext(currentYear,currentMonth)">❯</dt>
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
          <span v-else-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
          <span v-else>{{ day.getDate() }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import headTop from '../components/head'

  export default {
    data(){
      return {
        currentYear: 1970,   // 年份
        currentMonth: 1,  // 月份
        currentDay: 1,    // 日期
        currentWeek: 1,    // 星期
        days: [],
      }
    },
    created () {
      this.initData(null)
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
        return `${y}-${m}-${d}`
      },

      initData (cur) {
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
      },

      //上个星期
      weekPre () {
        const d = this.days[0]; // 如果当期日期是7号或者小于7号
        d.setDate(d.getDate() - 7);
        this.initData(d)
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

      // 当前选择日期
      pick (date) {
        alert(this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()))
      },

    }
  }
</script>
<style>
  .date_container #head_top {
    background:#f9f9f9;
  }
  .date_container polyline {
    stroke:rgb(224, 67, 78);
  }
  .date_container .title_head .title_text {
    color: #e0434e;
  }

  .date_container {
    /*background-image: linear-gradient(180deg,#f65b55,#e0434e);*/
    /*padding: .333333rem;*/
  }
  .calendar {
    background: linear-gradient(#f65b55,#E01F34);
    /*background: linear-gradient(#36db84 , #0eb27b);*/
    /*border-radius: .106667rem;*/
    overflow: hidden;
    /*margin-top: 1.95rem;*/
    border-bottom:1px solid #eee;
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
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    /*letter-spacing: 3px;*/
  }
  .calendar dl dt.arrow {
    padding: 5px 10px;
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
    color:#f7f7f7;
  }
  .calendar ul.weekdays {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: .6rem;
  }
  .calendar ul.weekdays li {
    padding: 12px 0;
    display: inline-block;
    width: 13.6%;
    text-align: center;
    color:white;
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
    color: #000;
  }
  .calendar ul.days li span {

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
</style>

