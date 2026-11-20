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

export const SUCCESS = {
  list: (name: string) => `Listed ${name} successfully`,
  create: (name: string) => `Created ${name} successfully`,
  update: (name: string) => `Updated ${name} successfully`,
  delete: (name: string) => `Deleted ${name} successfully`,
}

export const ERROR = {
  INTERNAL_SERVER_ERROR: 'Internal server error',

  alreadyExists: (item: string) => `${item} already exists`,
  invalidField: (field: string) => `Invalid ${field} format`,
  requiredField: (field: string) => `${field} is required`,
}
