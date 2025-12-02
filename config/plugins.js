// config/plugins.js

export default () => ({
    /**ckeditor configuration */
    ckeditor5: {
        enabled: true,
        config: {
            editor: {
            removePlugins: ["MediaEmbed"],
            },
        },
    },
    // Redis connection used by REST Cache
    redis: {
        config: {
            settings: {
                debug: false,
                enableRedlock: true,
            },
            connections: {
                default: {
                    connection: {
                        host: process.env.REDIS_HOST || "127.0.0.1",
                        port: process.env.REDIS_PORT || 6379,
                        password: process.env.REDIS_PASSWORD || null,
                        db: process.env.REDIS_DB || 0,
                    },
                    settings: {
                        debug: false,
                    },
                },
            },
        },
    },

    // REST Cache plugin configuration
    "rest-cache": {
        enabled: false,
        config: {
            provider: {
                name: "redis",
                options: {
                    connection: "default", // use the Redis connection defined above
                    ttl: process.env.CACHING_TIMEOUT || 3600 * 1000,      // cache lifetime: 1 hour
                },
            },
            strategy: {
                keysPrefix: "xcellfund",
                debug: true,              // show cache hit/miss logs
                contentTypes: [
                    {
                        contentType: "api::global.global",
                        hitpass: false, // never check if we should bypass the cache
                        keys: {
                            useQueryParams: false, // disable query parameters in cache keys
                        },
                    },
                ],
            },
        },
    },
});
