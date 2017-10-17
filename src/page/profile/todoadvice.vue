<template>
    <div class="rating_page">
        <head-top head-title="待办医嘱" go-back='true'></head-top>
        <div class="toDo">
            <ul>
                <li>
                    <dl>
                        <dt>2017年10月17日 08:47:47</dt>
                        <dd>C1-001今日医嘱</dd>
                        <dd>医嘱内容</dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import headTop from '../../components/head'

    export default {
        data(){
            
        },
         components:{
             headTop,
        },
    }
</script>
<style>

</style>
