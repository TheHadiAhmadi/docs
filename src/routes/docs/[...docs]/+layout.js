// import { navigations } from './navigations'

function toTree(navigations) {
  console.log({ navigations });
  let result = [];
  navigations.map((navigation) => {
    let index = result.findIndex((item) =>
      navigation.route.startsWith(item.route)
    );
    if (index >= 0) {
      result[index].children ??= [];
      result[index].children.push(navigation);
    } else {
      result.push(navigation);
    }
  });

  console.log(result);
  return result;
}

export async function load({ url, params }) {
  
  let navigations = [];
  const files = import.meta.glob("../../../content/**/*.md");
  console.log(files);

  for (let file in files) {
    const { default: component, metadata } = await files[file]();
    const route = '/docs' + file.substring("../../../content".length, file.length - 3);
    if (route !== "/404") {
      navigations.push({
        route,
        component,
        metadata: metadata ?? { title: route.split("/").pop() },
      });
    }
  }

  let component;
      try {
          component = await import('../../../content/' + params.docs + '.md');
      }catch(err) {
          component = await import('../../../content/404.md');
      }

  	let nextItem
	let prevItem

  const route = url.pathname
	navigations.forEach((navigation) => {
		if (route.startsWith(navigation.route)) {
			if (navigation.children) {
				for (let i = 0; i < navigation.children.length; i++) {
					const child = navigation.children[i]

					if (child.route === route) {
						prevItem = navigation.children[i - 1]
						nextItem = navigation.children[i + 1]

						if (nextItem) {
							nextItem.href = nextItem.route
						}

						if (prevItem) {
							prevItem.href = prevItem.route
						}
					}
				}
			} else if (route === navigation.route) {
				return true
			}
		}
	})



  return {
    navigations: toTree(navigations),
    component: component.default,
    links: {

    }
    //
  };
}

// const routeMap = {}

// navigations.forEach((item) => {
// 	if (!item.children) {
// 		routeMap[item.route] = item
// 	} else {
// 		item.children?.forEach((child) => {
// 			if (child.route) {
// 				routeMap[item.route + child.route] = child
// 			}
// 		})
// 	}
// })

// export async function load({url, params}) {
//     let component;
//     try {
//         component = await import('../../../content/' + params.docs + '.md');
//     }catch(err) {
//         component = await import('../../../content/404.md');
//     }

// 	const route = url.pathname
// 	let currentRout = {}
// 	Object.keys(routeMap).forEach((k) => {
// 		if (route === k || route + '/' === k) {
// 			currentRout = routeMap[k]
// 		}
// 	})

//     console.log({currentRout, navigations})
// 	return {
//         component: component.default,
// 		metaData: {
// 			title: currentRout?.title,
// 			description: currentRout?.description,
// 		},
// 		links: {
// 			nextItem,
// 			prevItem,
// 		},
// 	}
// }
