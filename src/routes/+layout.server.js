export const trailingSlash = 'always'

function toTree(navigations) {
    console.log({ navigations });
    let result = [];
    navigations.map((navigation) => {
      let index = result.findIndex((item) =>
        navigation.route.startsWith(item.route)
      );
      console.log('to array', {navigation, result})
      if (index >= 0) {
        result[index].children ??= [];
        if(result[index].children.findIndex(x => x.route === navigation.route) == -1)
        result[index].children.push(navigation);
      } else {
        result.push(navigation);
      }
    });
  
    console.log(result);
    return result;
}

export const prerender = true
export async function load({ url, params }) {
  
    let navigations = [];
    const files = import.meta.glob("./docs/**/+page.md");
  
    for (let file in files) {
      const { default: component, metadata } = await files[file]();
      const route = file.substring(".".length, file.length - '+page.md'.length);
      if (metadata.sidebar !== false && navigations.findIndex(x => x.route === route) === -1) {
        console.log('add route', {navigations, route, metadata})
        navigations.push({
          route,
          // component,
          metadata: metadata ?? { title: route.split("/").pop() },
        });
      }
    }

    console.log(navigations, toTree(navigations))
    return {
        navigations: toTree(navigations)
    }
}