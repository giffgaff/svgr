import wrapIntoComponent from '../transforms/wrapIntoComponent'
import wrapIntoNativeComponent from '../transforms/wrapIntoNativeComponent'

export default (code, config, state) => {
  let transform = wrapIntoComponent
  if (config.native) transform = wrapIntoNativeComponent
  if (config.template) transform = config.template
  return transform(code, config, state)
}
