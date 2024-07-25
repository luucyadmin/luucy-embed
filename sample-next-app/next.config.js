/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_PUBLIC_URL ? new URL(process.env.NEXT_PUBLIC_PUBLIC_URL).pathname.replace(/\/$/, '') : '',
  experimental: {
    missingSuspenseWithCSRBailout: false
  }
};

export default config;
