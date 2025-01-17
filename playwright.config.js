// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,

  workers: 3,
  timeout : 180000,
  reporter: 'html',
  
  use: {
    launchOptions: {
      args: ["--start-maximized"]
    },
    trace: 'on',
    screenshot: 'on',
    video: 'off',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        headless: false,
       },
      
    },

    
  ],

 
});

