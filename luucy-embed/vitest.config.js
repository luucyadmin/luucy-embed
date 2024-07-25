import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      include: ['index.js', 'lib/**/*.js'],
      reporter: ['text', 'html', 'cobertura']
    },
    reporters: ['default', 'junit'],
    outputFile: {
      junit: 'junit.xml'
    }
  }
});
