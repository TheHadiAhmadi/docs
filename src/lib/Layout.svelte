<script context="module">
  // import code from './Code.svelte'
  import h2 from "./H2.svelte";
  import h1 from "./H1.svelte";

  export { h2, h1 };
</script>

<script>
  import Logo from "./Logo.svelte";
  import { El, Icon, Button, Select } from "yesvelte";
  import {browser} from '$app/environment'

  import SidebarNavigations from "./SidebarNavigations.svelte";
  import { page } from "$app/stores";
  import ToC from "./ToC.svelte";

  export let data;

  let dark = false;
  let theme = "daisyui";
  let offcanvasOpen = false;
  
  $: console.log($$props);
  $: pathname = $page.url.pathname;

  $: if(browser) {
    document.body.setAttribute('data-theme', dark ? 'dark' : 'light')
      document.body.setAttribute('data-bs-theme', dark ? 'dark' : 'light')
  }
  

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
        <slot />
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
