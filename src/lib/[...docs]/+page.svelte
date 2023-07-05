<script>
    export let data;

</script>
{#if data.component}
    <svelte:component this={data.component} {...$$props}/>
{/if}