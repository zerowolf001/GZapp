<template>
    <div class="doc_search">
        <head-top head-title="医嘱搜索" go-back='true'></head-top>
        <form action=""></form>
        <section id="search">
            <dl class="doc_container">
                <dd class="bedBest_list">
                    <dl>
                        <dd>姓名/床号：<em><input type="text" class="nameAndBed_input"></em></dd>
                    </dl>

                </dd>
            </dl>
        </section>
    </div>
</template>

<script>
    import headTop from '../components/head'

    export default {
        data() {
            return{

            }
        },
        components:{
            headTop,
        }
    }
</script>