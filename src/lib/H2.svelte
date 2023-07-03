<script lang="ts">
  import { onMount } from 'svelte';
	import { El, Icon } from 'yesvelte'

    let title = ''
    let element;

    onMount(() => {
        title = element.textContent.trim()
    })

	$: href = title.replace(/\s/g, '_').replace(/\//g, '_')
</script>

<El mt="3" mb="2">
	<El tag="h2">
            <El
            bind:element
            href="#{href}"
			tag="a"
			d="inline"
			class="doc-title"
            data-href={encodeURIComponent(href)}
			id={href}
			>
            <slot/>
			<Icon name="link" />
		</El>
	</El>
</El>

<style>
	:global(.doc-title) {
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	:global(.doc-title) :global(.y-icon) {
		opacity: 0;
		vertical-align: middle;
		/* margin-left: 0.25rem; */
	}

	:global(.doc-title):hover :global(.y-icon) {
		opacity: 1;
	}
</style>