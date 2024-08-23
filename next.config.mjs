/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    webpack: (config) => {
        config.module.rules.push({
            test: /pdf\.worker\.(mjs|js)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[name][ext]',  // Custom output for the worker
            },
        });

        return config;
    },
};

