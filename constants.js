const DEFAULT_LOG_LEVEL = 'info';

// The name of the key used for the metadata object
const LOGGER_META_NAME = process.env.LOGGER_META_NAME || 'xpoz';

// Root level fields from ECS: https://www.elastic.co/guide/en/ecs/current/
const ECS_RESERVED = [
  'labels', 'tags', 'client', 'cloud', 'destination', 'event',
  'http', 'interface', 'log', 'process', 'server', 'service', 'source',
  'user_agent', 'trace', 'transaction', 'url', 'error',

  // Do not remove.
  // A trick to stop metadata formatter from these fields it to the metadata object.
  'level', 'message',
];

module.exports = {
  DEFAULT_LOG_LEVEL,
  LOGGER_META_NAME,
  ECS_RESERVED,
};
