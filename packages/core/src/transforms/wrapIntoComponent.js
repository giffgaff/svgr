export default (code, config, state) => {
  let props = ''

  if (config.expandProps && config.ref && config.titleProp) {
    props = '{svgRef, title, ...props}'
  } else if (config.expandProps && config.titleProp) {
    props = '{title, ...props}'
  } else if (config.expandProps && config.ref) {
    props = '{svgRef, ...props}'
  } else if (config.titleProp && config.ref) {
    props = '{svgRef, title}'
  } else if (config.expandProps) {
    props = 'props'
  } else if (config.ref) {
    props = '{svgRef}'
  } else if (config.titleProp) {
    props = '{title}'
  }

  let result = `import React from 'react'\n\n`
  result += `const ${state.componentName} = (${props}) => ${code}\n\n`

  if (state.webpack && state.webpack.previousExport) {
    result += `export default ${state.webpack.previousExport}\n`
    result += `export { ${state.componentName} as ReactComponent }`
  } else if (state.rollup && state.rollup.previousExport) {
    result += `${state.rollup.previousExport}\n`
    result += `export { ${state.componentName} as ReactComponent }`
  } else {
    result += `export default ${state.componentName}`
  }

  return result
}
