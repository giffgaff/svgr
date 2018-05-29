import cosmiconfig from 'cosmiconfig'

export const DEFAULT_CONFIG = {
  dimensions: true,
  expandProps: true,
  ext: 'js',
  icon: false,
  native: false,
  prettier: true,
  ref: false,
  replaceAttrValues: null,
  svgAttribute: null,
  svgo: true,
  template: null,
  titleProp: false,
}

const explorer = cosmiconfig('svgr', {
  sync: true,
  cache: true,
  rcExtensions: true,
})

export async function resolveConfig(filePath) {
  const result = await explorer.search(filePath)
  return result ? result.config : null
}

export async function resolveConfigFile(filePath) {
  const result = await explorer.search(filePath)
  return result ? result.filepath : null
}
