<script>

  import { El, Icon } from "yesvelte";

  import {page} from '$app/stores'
  import ToC from "./ToC.svelte";

  export let title = ''
  export let description = ''

  let sections = []

$: hasToC = sections.length > 0;


  $: prevItem = $page.data?.links?.prevItem  
  $: nextItem = $page.data?.links?.nextItem

</script>

<svelte:head>
    <title>{title} | YeSvelte</title>
</svelte:head>

<El row>
    <El
      colSm="12"
      colMd
    >
      <El px="2">
        {#if title}
          <El tag="h1" mt="4">{title}</El>
        {/if}
        {#if description}
          <El tag="p">{description}</El>
        {/if}
        <slot />
      </El>

      <El row mt="3" mb="5">
        {#if prevItem}
          <El col="auto" tag="a" href={prevItem.href}>
            <El class="docs-link" tag="h3" mb="0">
              <Icon mb="1" name="chevron-left" />
              {prevItem.metadata.title}
            </El>
          </El>
        {/if}
        {#if nextItem}
          <El
            col="auto"
            ms="auto"
            justifyContent="end"
            tag="a"
            href={nextItem.href}
          >
            <El class="docs-link" tag="h3" mb="0">
              {nextItem.metadata.title}
              <Icon mb="1" name="chevron-right" />
            </El>
          </El>
        {/if}
      </El>
    </El>
    <El colLg="3" d="none" dLg={hasToC ? "inline-block" : "none"}>
      <ToC bind:sections />
    </El>
  </El>