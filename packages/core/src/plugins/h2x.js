import { transform } from 'h2x-core'
import jsx from 'h2x-plugin-jsx'
import {
  stripAttribute,
  emSize,
  removeDimensions,
  expandProps,
  svgRef,
  replaceAttrValues,
  removeComments,
  removeStyle,
  titleProp,
  toReactNative,
  svgAttribute,
} from '../'

function configToPlugins(config) {
  const plugins = [jsx, stripAttribute('xmlns'), removeComments, removeStyle]
  if (config.replaceAttrValues)
    plugins.push(replaceAttrValues(config.replaceAttrValues))
  if (!config.dimensions) plugins.push(removeDimensions())
  if (config.icon) plugins.push(emSize())
  if (config.ref) plugins.push(svgRef())
  if (config.svgAttributes) plugins.push(svgAttribute(config.svgAttributes))
  if (config.expandProps) plugins.push(expandProps())
  if (config.native) plugins.push(toReactNative())
  if (config.titleProp) plugins.push(titleProp())
  return plugins
}

export default (code, config = {}, state = {}) => {
  const plugins = configToPlugins(config)
  return transform(code, {
    plugins,
    state,
    ...config.h2xConfig,
  })
}
