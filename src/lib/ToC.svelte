<script>
	import { onMount } from 'svelte'

	import { afterNavigate } from '$app/navigation'
	import { El } from 'yesvelte'

	export let sections = []

	const init = () => {
		if (typeof window !== 'undefined') {
			const nodes = document.querySelectorAll('[data-href]')
			sections = Array.from(nodes).map((node) => {
				return {
					name: node.innerText,
					href: node.getAttribute('data-href'),
				}
			})
		}
	}

	onMount(() => {
		init()
	})

	afterNavigate(() => {
		init()
	})
</script>

{#if sections && sections.length > 0}
	<El mb="5" textMuted sticky="top" id="toc">
		<El tag="strong" d="none" dMd="block" my="2">
			<h4>On this page</h4>
		</El>
		<El tag="hr" d="none" dMd="block" my="2" />
		<El row>
			{#each sections as section}
				<El col="12" mb="2">
					<El tag="a" href="#{section.href}" textMuted>{section.name}</El>
				</El>
			{/each}
		</El>
	</El>
{/if}