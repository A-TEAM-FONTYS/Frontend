<template>
    <button class="flex-1 hover:bg-hex font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-full">{{name}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: ['name']
}
</script>