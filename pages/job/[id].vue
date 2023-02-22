<template>
    <NuxtLink to="/" class="job"> Retour à la liste des jobs</NuxtLink>
    <JobDetails :job="job" />
</template>
<script setup>
    
    const { id } = useRoute().params
    const idJob = ref({ query: "getById", params: id});
    const job = await $fetch(`/api/job/job?query=${idJob.value.query}&params=${idJob.value.params}`)
</script>
<style scoped>
.job {
    background-color: #0f5e59;
color:white;
padding: 10px
}
</style>
