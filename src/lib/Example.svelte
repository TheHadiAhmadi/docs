<script lang="ts">
	import {
		TabList,
		TabItem,
		TabContent,
		TabPanel,
		Tabs,
		Card,
		CardHeader,
		CardBody,
	} from 'yesvelte'
	import { classname } from 'yesvelte/internal'
    import 'prismjs/themes/prism.css'

</script>

<Card>
	<Tabs>
		<CardHeader>
			<TabList>
				<TabItem active>Preview</TabItem>
					<TabItem>Code</TabItem>
			</TabList>
		</CardHeader>

		<TabContent>
			<TabPanel>
				<CardBody class={classname('preview-body')}>
					<slot name="example" />
				</CardBody>
			</TabPanel>
				<TabPanel>
                    <pre class="language-svelte"><slot name="code" /></pre>
				</TabPanel>
		</TabContent>
	</Tabs>
</Card>

<style>
	:global(pre[class*='language-']) {
		margin: 0;
	}

	:global([data-theme='dark']) :global([class*='language-']),
	:global([data-bs-theme='dark']) :global([class*='language-']) {
		background-color: transparent !important;
		text-shadow: 0 1px #000000;
		color: white;
	}

	:global([class*='language-']) :global(.token.operator),
	:global(.token.entity),
	:global(.token.url),
	:global(.language-css) :global(.token.string),
	:global(.style) :global(.token.string),
	:global([data-bs-theme='dark']) :global([class*='language-']) :global(.token.operator),
	:global(.token.entity),
	:global(.token.url),
	:global(.language-css) :global(.token.string),
	:global(.style) :global(.token.string) {
		color: #9a6e3a;
		background: transparent;
	}
</style>

