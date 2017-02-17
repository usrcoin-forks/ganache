import * as ApiHelpers from 'Data/Sources/ApiHelpers'

export default {
  startRpcService: (config) => {
    return ApiHelpers.sendIpcMessage('APP/STARTRPC', config)
  },

  getBlockchainState: () => {
    return ApiHelpers.sendIpcMessage('APP/GETBLOCKCHAINSTATE')
  },

  startMining: () => {
    return ApiHelpers.sendIpcMessage('APP/STARTMINING')
  },

  stopMining: () => {
    return ApiHelpers.sendIpcMessage('APP/STOPMINING')
  },

  forceMine: () => {
    return ApiHelpers.sendIpcMessage('APP/FORCEMINE')
  }
}
