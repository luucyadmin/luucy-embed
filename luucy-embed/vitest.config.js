import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.js'],
      reporter: ['text', 'html', 'cobertura']
    },
    reporters: ['default', 'junit'],
    outputFile: {
      junit: 'junit.xml'
    }
  }
});
