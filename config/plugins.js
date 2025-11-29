// config/plugins.js

export default () => ({
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
                        host: '127.0.0.1',
                        port: 6379,
                        db: 0,
                    },
                    settings: {
                        debug: false,
                    },
                },
            },
        },
    },

    // REST Cache plugin configuration
    // "rest-cache": {
    //     config: {
    //         provider: {
    //             name: "redis",
    //             options: {
    //                 connection: "default", // use the Redis connection defined above
    //                 ttl: 3600 * 1000,      // cache lifetime: 1 hour
    //             },
    //         },
    //         strategy: {
    //             keysPrefix: "xcellfund",
    //             debug: true,              // show cache hit/miss logs
    //             contentTypes: [
    //                 {
    //                     contentType: "api::global.global",
    //                     hitpass: false, // never check if we should bypass the cache
    //                     keys: {
    //                         useQueryParams: false, // disable query parameters in cache keys
    //                     },
    //                 },
    //             ],
    //         },
    //     },
    // },
});
