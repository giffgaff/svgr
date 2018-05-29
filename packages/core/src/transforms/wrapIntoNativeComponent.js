const componentsToList = components =>
  [...components].filter(component => component !== 'Svg').join(', ')

const logUnsupportedComponents = components => {
  if (!components.size) return ''
  return `
// SVGR has dropped some elements not supported by react-native-svg: ${componentsToList(
    components,
  )}
`
}

export default (code, config, state) => {
  const {
    reactNativeSvgReplacedComponents = new Set(),
    unsupportedComponents = new Set(),
  } = state

  let props = ''

  if (config.expandProps && config.ref) {
    props = '{svgRef, ...props}'
  } else if (config.expandProps) {
    props = 'props'
  } else if (config.ref) {
    props = '{svgRef}'
  }

  return `import React from 'react'
  import Svg, { ${componentsToList(
    reactNativeSvgReplacedComponents,
  )} } from 'react-native-svg';
  ${logUnsupportedComponents(unsupportedComponents)}


  const ${state.componentName} = (${props}) => ${code}

  export default ${state.componentName}`
}
