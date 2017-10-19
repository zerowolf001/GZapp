<template>
    <div class="date">
        <head-top head-title="我的排班" go-back='true'></head-top>
        <!-- 年份 月份 -->
        <div class="month">
            <ul>
                <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
                <li class="year-month" @click="pickYear(currentYear,currentMonth)">
                    <span class="choose-year">{{ currentYear }}</span>
                    <span class="choose-month">{{ currentMonth }}月</span>
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
            <li @click="pick(day)" v-for="day in days">
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

    export default {
        data () {
            return {
                currentDay: 1,
                currentMonth: 1,
                currentYear: 1970,
                currentWeek: 1,
                days: [],
            }
        },
        mounted () {

        },
        created () {
            this.initData(null);
        },
        components:{
            headTop,
        },
        methods: {
            initData (cur) {
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
            pick (date) {
                alert(this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()))
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
<style>
    .date{
        margin-top:1.95rem;
    }
    .month {
        width: 100%;
        background: #47a7f0;
    }
    .month ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
    .year-month {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
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
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    .weekdays {
        margin: 0;
        padding: 10px 0;
        background-color: #47a7f0;
        display: flex;
        flex-wrap: wrap;
        color: #FFFFFF;
        justify-content: space-around;
    }

    .weekdays li {
        display: inline-block;
        width: 13.6%;
        text-align: center;
    }

    .days {
        padding: 0;
        background: #FFFFFF;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .days li {
        list-style-type: none;
        display: inline-block;
        width: 14.2%;
        text-align: center;
        padding-bottom: 15px;
        padding-top: 15px;
        font-size: 1rem;
        color: #000;
    }

    .days li .active {
        padding: 6px 10px;
        border-radius: 50%;
        background: #00B8EC;
        color: #fff;
    }

    .days li .other-month {
        padding: 5px;
        color: gainsboro;
    }

    .days li:hover {
        background: #e1e1e1;
    }
</style>