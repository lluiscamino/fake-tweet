const postcss = require('rollup-plugin-postcss');

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            postcss({
                modules: false,
                inject: true,
                extract: false,
            }),
        );
        return config;
    },
};
