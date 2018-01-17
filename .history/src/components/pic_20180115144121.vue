<template>
    <div>
        ssss
    </div>   
</template>

<script>
import axios from "axios"
export default {
    mounted() {
        axios.get("http://localhost:5000/data").then((response)=>{
            console.log(response)
        })
    }
}
</script>

<style>

</style>
