<template>
    <div>
        一会这里就是首屏渲染
    </div>   
</template>

<script>
import axios from "axios"
export default {
    mounted() {
        axios.get("http://localhost:5000/data").then((response)=>{
            
        })
    }
}
</script>

<style>

</style>
