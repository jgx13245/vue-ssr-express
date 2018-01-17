<template>
    <div class="wrap">
        <ul>
            <li v-for="(item,index) in pic" @click="showTitle(item.title)" :key="index">
                <img :src="item.image">
                <p>
                    {{item.title}}
                </p>
            </li>
        </ul>
    </div>
   
</template>

<script>
    import Vue from 'vue'
    import { mapGetters} from 'vuex'
    import axios from "axios"
    import {PIC} from '../store/mutation-types'
    const computed = {
        ...mapGetters([ 
            'pic'
        ])
    }
    export default {
        data() {
            return {}
        },
        methods: {
            showTitle(title) {
                alert(title)
            }
        },
        computed,
        mounted() {
            Vue.axios.get('http://localhost:8090/data').then((response) => {
                const pic = response.data.data.liveWodList
                this.$store.commit(PIC.GET_DATA, pic)
            })
        }
    }
</script>
<style>
    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: center;
    }
    li{
        width: 380px;
        height: 270px;
        margin-right: 30px;
        background-color: #f2f2f2;
        cursor: pointer;
        margin-top: 10px;
    }

    img {
        width: 380px;
        height: 214px;
    }

    p {
        width: 380px;
        padding-left: 15px;
        font-size: 16px;
    }
</style>