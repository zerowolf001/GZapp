<template>
    <div class="date">
        <head-top head-title="我的排班" go-back='true'></head-top>
        <!-- 年份 月份 -->
        <div class="month">
            <ul>
                <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
                <li class="year-month" @click="pickYear(currentYear,currentMonth)">
                    <span>{{ currentYear }}年{{ currentMonth }}月</span>
                </li>
                <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
            </ul>
        </div>
        <!-- 星期 -->
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
            <li v-for="day in days">
                <!--本月-->
                <span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{ day.getDate() }}</span>
                <span v-else>
                    <!--今天-->
                    <span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
                    <span v-else>{{ day.getDate() }}</span>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
    import headTop from '../../components/head'
    import {myMonthdate} from '../../service/getData'

    export default {
        data () {
            return {
                employeeID: '000789',
                currentDay: 1,
                currentMonth: 1,
                currentYear: 1970,
                currentWeek: 1,
                days: [],
                myDateArr:[],
            }
        },
        created () {
            this.initData(null);
        },
        components:{
            headTop,
        },
        filters:{
          framDate:v =>v.substring(8)
        },
        methods: {
            async initData (cur) {
                let date;
                if (cur) {
                    date = new Date(cur)
                } else {
                    date = new Date()
                }
                this.currentDay = date.getDate();       // 今日日期 几号
                this.currentYear = date.getFullYear();      // 当前年份
                this.currentMonth = date.getMonth() + 1;   // 当前月份
                this.currentWeek = date.getDay(); // 1...6,0   // 星期几
                if (this.currentWeek === 0) {
                    this.currentWeek = 7
                }
                const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay); // 今日日期 年-月-日
                console.log(str);
                this.days.length = 0;
                // 今天是周日，放在第一行第7个位置，前面6个
                /* eslint-disabled */
                for (let i = this.currentWeek - 1; i >= 0; i--) {
                    const d = new Date(str);
                    d.setDate(d.getDate() - i);
                    this.days.push(d);
                }
                for (let i = 1; i <= 35 - this.currentWeek; i++) {
                    const d = new Date(str);
                    d.setDate(d.getDate() + i);
                    this.days.push(d);
                }
                this.pick(date);
            },
            // 上一個月   传入当前年份和月份
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
            async pick (date) {
              let str = this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
              this.currentDay = str;
              this.myDateArr = await myMonthdate(str,this.employeeID);
            },
            pickYear: function() {
                this.initData();
            },
            formatDate (year, month, day) {
                let y = year;
                let m = month;
                if(m<10) m = "0" + m;
                let d = day;
                if(d<10) d = "0" + d;
                return y+"-"+m+"-"+d
            },
        },
    }
</script>
<style lang="scss" scoped>
    .date{
        margin-top:1.95rem;
    }
    .month {
        width: 100%;
        background-color: #fff;
    }
    .month ul {
      width: 100%;
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
      li {
        color: #6f6f6f;
        font-size: 20px;
        text-transform: uppercase;
        &.arrow {
           padding: 5px;
           font-size: .8rem;
           -webkit-flex-shrink: 0;
           flex-shrink: 0;
           margin: 0 .5rem;
         }
        &.year-month {
           display: -webkit-box;
           display: -moz-box;
           display: -webkit-flex;
           display: -ms-flexbox;
           display: flex;
          font-size: .7rem;
          width: 100%;
          height: 100%;
          -webkit-box-align: center;
          box-align: center;
          -webkit-align-items: center;
          align-items: center;
          box-pack: start;
          -webkit-justify-content: flex-start;
          justify-content: flex-start;
          span {
            display: block;
            margin: 0 auto;
            color: #e64e4e;
          }
        }
      }
    }
    ul{
      &.weekdays {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: .6rem;
        background-color: #fff;
        border-bottom:1px solid #eee;
        li {
          padding: .4rem 0;
          display: inline-block;
          width: 13.6%;
          text-align: center;
          color: #6f6f6f;
        }
      }
    }

    .year-month:hover {
        background: rgba(150, 2, 12, 0.1);
    }

    .choose-year {
        padding-left: 20px;
        padding-right: 20px;
    }

    .choose-month {
        text-align: center;
        font-size: 1.5rem;
    }

    .arrow {
        padding: 30px;
    }

    .arrow:hover {
        background: rgba(100, 2, 12, 0.1);
    }

    .month ul li {
        color: #6f6f6f;
        font-size: 20px;
        text-transform: uppercase;
    }
    .days {
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .days li {
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
      width: 14.28571428571429%;
      padding-top:.2rem;
      line-height: 1.2rem;
      height:2.5rem;
      text-align: center;
      margin: .2rem 0;
      color: #6f6f6f;
      background-color:#fff;
      font-size: .6rem;
      .active {
        border-radius: 50%;
        background: #00B8EC;
        color: #fff;
      }
      span.active {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        color: #fff;
        border-radius: 50%;
        background-color: #fa6854;
      }
      .other-month {
        color: #999;
      }
    }
    .days li:hover {
        background: #e1e1e1;
    }
</style>
