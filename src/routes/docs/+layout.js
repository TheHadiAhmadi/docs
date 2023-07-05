// import { navigations } from './navigations'



export async function load({ url, params, parent }) {
  
  	let nextItem
	let prevItem

  const {navigations} = await parent()
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


//   console.log('rendering page: ', url, component.default)

  return {
    links: {
      nextItem,
      prevItem
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
//         component = await import('../../../' + params.docs + '.md');
//     }catch(err) {
//         component = await import('../../../404.md');
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
