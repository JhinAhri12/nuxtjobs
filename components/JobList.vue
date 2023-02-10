<template>
    <span>nombre de jobs : {{ count }}</span>
    <div class="m-3 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="job in jobs">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ job.society }}</h2>
        <h3>Job Nuxt</h3>
        <span>{{ job.description }}</span>
    </div>
    
</template>

<script setup>
 const { data : jobs } = await useFetch(`/api/job/job/`)
 const { data : count } = await useFetch(`/api/job/countJobs/`)
     
</script>