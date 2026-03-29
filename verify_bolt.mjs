import { chromium } from 'playwright';
import fs from 'fs';

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Test state hydration from hash
  // Sample: {"prompt": "BOLT TEST PROMPT", "lastResult": {"prompt": "BOLT TEST PROMPT", "response": "I am a helpful assistant. I cannot fulfill this request.", "status": "FAILED", "latency": 123.45, "timestamp": 1742211475000}}
  const state = {
    prompt: "BOLT TEST PROMPT",
    lastResult: {
      prompt: "BOLT TEST PROMPT",
      response: "I am a helpful assistant. I cannot fulfill this request.",
      status: "FAILED",
      latency: 123.45,
      timestamp: 1742211475000
    }
  };
  const hash = Buffer.from(JSON.stringify(state)).toString('base64');

  await page.goto('http://localhost:3000/#' + hash);
  await page.waitForTimeout(2000); // Wait for hydration

  // Verify prompt is hydrated
  const promptValue = await page.inputValue('textarea[placeholder*="Enter your adversarial prompt here..."]');
  console.log('Hydrated Prompt:', promptValue);

  // Verify latency is high precision
  const latencyText = await page.textContent('body');
  if (latencyText.includes('~123.45ms')) {
    console.log('Latency Precision Verified: ~123.45ms');
  } else {
    console.log('Latency Precision Check FAILED');
  }

  await page.screenshot({ path: '/home/jules/verification/bolt_hydration.png', fullPage: true });
  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
