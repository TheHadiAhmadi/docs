
// export async function entries(opts) {
//   console.log(opts)

//   return[]

// }  

// export function entries() {
//     const files = import.meta.glob("../../../content/**/*.md");

//     console.log({files})
  
//     let result = []
//     for (let file in files) {
//       const route = file.substring("../../../content/".length, file.length - 3);
      
//       if (route !== "/404") {
//         console.log({route})

//         console.log({result})
//         result.push({
//           docs: route,
//         });
//       }
//     }

//     console.log(result)
//     return result;
//   }
  