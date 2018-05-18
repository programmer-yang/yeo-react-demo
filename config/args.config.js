const yargs = require('yargs')

const argv = yargs.version(false).option('t', {
  alias: 'type',
  demand: true,
  describe: '编译目标环境 dev | prod',
  // default: 'dev',
  type: 'string'
}).argv

Object.keys(argv).forEach(key => {
  if (key === '$0' || key === '_') return
  if (Array.isArray(argv[key])) {
    argv[key] = argv[key][argv[key].length - 1]
  }
})

module.exports = argv
