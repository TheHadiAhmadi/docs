<script>
  import { Sidebar, SidebarItem, Icon } from "yesvelte";

  export let navigations;

  
  function isActive(navigation, pathname) {
      if (pathname.startsWith(navigation.route)) {
        return true;
    }
    return false;
  }

  export let pathname = "";
</script>

<Sidebar class="y-docs-sidebar" {...$$restProps}>
  {#each navigations as navigation}
    {#if navigation.children && navigation.metadata.sidebar !== false}
      <SidebarItem
        active={pathname.startsWith(navigation.route)}
        title={navigation.metadata.title}
        icon={navigation.metadata.icon}
      >
        {#each navigation.children ?? [] as menu}
          {@const [pack, icon] = (menu.metadata.icon ?? ":").split(":")}
		  {#if  navigation.metadata.sidebar !== false}
          <SidebarItem
            active={pathname === menu.route}
            icon={menu.metadata.icon}
            title={menu.metadata.title}
            href={menu.route}
          >
            <Icon slot="start" {pack} name={icon} />
          </SidebarItem>
		{/if}
        {/each}
      </SidebarItem>
    {:else}
	{#if  navigation.metadata.sidebar !== false}
      <SidebarItem
        active={pathname.startsWith(navigation.route ?? "")}
        href={navigation.route}
        icon={navigation.metadata.icon}
        title={navigation.metadata.title}
      />
	  {/if}
    {/if}
  {/each}
</Sidebar>
