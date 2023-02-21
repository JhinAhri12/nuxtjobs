<template>
{{ form.title }}
<div>
    <form :method="form.action" action="" @submit.prevent="onSubmit">
        <label for="society">Societé :</label>
        <input type="text" id="society" name="society" v-model="society" class="border rounded m-2"><br>
        <label for="description">Description : </label><br><br>
        <textarea id="description" name="description" class="border rounded mb-2 p-2" v-model="description"></textarea><br>
        <button type="submit" class="border rounded p-2 m-1">Envoyer</button>
    </form>
</div>

</template>
<script setup>

const form = defineProps(['title','action'])
let society = ''
let description = ''

async function onSubmit(){
    if (society === '' && description === '') 
    {
        alert('Les champs ne sont pas remplit')
        return
    } 
    else {
        if (form.action === 'POST'){

        society = society;
        description = description;
        await $fetch ( `/api/job/createJob`,
        {
            method: 'POST',
            body: { event: 'ADD_JOB', 'society': society, 'description': description },
        })
    }
    }
}

</script>

