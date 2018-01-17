<template>
    <div>
        ssss
    </div>   
</template>

<script>
import axios from "axios"
export default {
    mounted() {
        axios.get("api/data").then((response)=> {
            console.log(response.data)
        })
    }
}
</script>

<style>

</style>
