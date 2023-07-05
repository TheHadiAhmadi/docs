<script>
    import Layout from '$lib/Layout.svelte';
    import tabler from 'yesvelte/css/tabler.css?url'
    // import ''
</script>
<svelte:head>
    <link rel="stylesheet" href={tabler}/>
    <link rel="stylesheet" href='/css/docs.css'/>

</svelte:head>  

<Layout {...$$props}>
    <slot/>
</Layout>
