<script context="module">
  // import code from './Code.svelte'
  import h2 from "./H2.svelte";
  import h1 from "./H1.svelte";

  export { h2, h1 };
</script>

<script>
  import Logo from "./Logo.svelte";
  import { El, Icon, Button, Select } from "yesvelte";

  import SidebarNavigations from "./SidebarNavigations.svelte";
  import { page } from "$app/stores";
  import ToC from "./ToC.svelte";

  export let data;
  export let title = undefined;
  export let description = undefined;

  let sections = [];

  let dark = false;
  let theme = "daisyui";
  let offcanvasOpen = false;

  $: hasToC = sections.length > 0;
  $: console.log($$props);
  $: pathname = $page.url.pathname;

  $: nextItem = data.links?.nextItem;
  $: prevItem = data.links?.prevItem;
</script>

<El mx="auto" style="min-height: calc(100vh - 154px);">
  <El row g="0">
    <El
      d="none"
      dMd="block"
      h="auto"
      bgColor={dark ? "dark" : "light"}
      borderEnd
      colMd="auto"
    >
      <Logo href="/" height="40" p="3" />

      <SidebarNavigations
        navigations={data.navigations}
        style="overflow: hidden"
        {pathname}
      />
    </El>
    <El col>
      <El bgColor={dark ? "dark" : "light"} borderBottom>
        <El
          container="xl"
          d="flex"
          alignItems="center"
          justifyContent="between"
          py="3"
          px="3"
        >
          <El d="flex" gap="3" alignItems="center">
            <Icon
              dMd="none"
              size="xl"
              name="menu-2"
              on:click={() => (offcanvasOpen = !offcanvasOpen)}
            />
            <Logo dMd="none" href="/" height="32" />
          </El>

          <El d="flex" alignItems="center" gap="2">
            <El col="auto">
              <Select mb="0" bind:value={theme} items={["tabler", "daisyui"]} />
            </El>
            <El col>
              <Button outline on:click={() => (dark = !dark)}>
                {#if dark}
                  <Icon name="sun" />
                {:else}
                  <Icon name="moon" />
                {/if}
              </Button>
            </El>
          </El>
        </El>
      </El>

      <El container="xl">
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
                    {prevItem.title}
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
                    {nextItem.title}
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
      </El>
    </El>
  </El>
</El>

<El class={dark ? "bg-color-dark" : "bg-color-white"} borderTop>
  <El mx="auto" py="4" gap="3" container="lg" px="3" row>
    <El textAlign="center" col="12" colSm="auto">
      &copy; {new Date().getFullYear()} YeSvelte. All Rights Reserved
    </El>
    <El textAlign="end" ms="auto" col="12" colSm="auto" d="flex" gap="4">
      <El tag="a" href="#">Privacy Policy</El>
      <El tag="a" href="#">Terms of Service</El>
      <El tag="a" href="#">Cookies Settings</El>
    </El>
  </El>
</El>
