<template>
    <div>
        ssss
    </div>   
</template>

<script>
import axios from "axios"
export default {
    mounted() {
        axios.get("apidata").then((response)=> {
            console.log(response.data)
        })
    }
}
</script>

<style>

</style>
