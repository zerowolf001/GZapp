<template></template>
<script>
    import nprogress from 'nprogress'
    import 'nprogress/nprogress.css'

    export default {
        props: {
            parent: String
        },
        created() {
            if (this.parent) {
                nprogress.configure({ parent: this.parent })
            }
            this.$router.beforeEach((to, from, next) => {
                nprogress.start()
                next()
            })
            this.$router.afterEach(() => {
                nprogress.done()
            })
            Vue.http.interceptors.push((request, next) => {
                nprogress.start()
                next(response => {
                    nprogress.done()
                    return response
                })
            })
        }
    }
</script>
<style>
    .nprogress-custom-parent #nprogress .spinner,
    #nprogress .spinner {
        display: none;
    }
</style>