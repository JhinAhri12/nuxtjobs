<template>
    <span>Nombre de jobs : {{ count._count._all }}</span> &nbsp;&nbsp;
    <button class="rounded" @onclick="sortJobs">Trier </button>
    <div class="m-3 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="job in jobs">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ job.society }}</h2>
        <h3>Job Nuxt</h3>
        <span class="text-neutral-400">{{ job.description }}</span>
    </div>
    
</template>

<script setup>

 const { data : count  } =  await  useFetch(`/api/job/countJobs/`)    
 const { data : jobs } = await useFetch(`/api/job/job/`)

 const sortJobs = async () => {

 }
     
</script>
<style scoped>
button {
    background-color: #0f5e59;
color:white;
padding: 10px
}
h2{
    color : #22c55d;
    margin-bottom: 10px;
    font-size: 1.5rem;
}
</style>