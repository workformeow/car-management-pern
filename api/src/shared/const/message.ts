export const LOG = {
  SERVER: {
    listening: (baseUrl: string) => `Server listengin at ${baseUrl}`,
  },
  DATABASE: {
    connect: '[Database] Connected successfully',
    connectError: '[Database] Failed to connect',
    disconnect: '[Database] Disconnected',
  },
}
