import asyncio
from playwright.async_api import async_playwright
import base64
import json

async def verify_init():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        # Shared state to test
        state = {
            "prompt": "Verification Final Check",
            "lastResult": {
                "prompt": "Verification Final Check",
                "output": "Final Verification Success",
                "isRefusal": False,
                "timestamp": 1700000000000
            }
        }
        encoded = base64.b64encode(json.dumps(state).encode()).decode()

        url = f"http://localhost:4173/#{encoded}"
        print(f"Opening URL: {url}")

        await page.goto(url)

        # Wait for textarea to have the prompt
        textarea = page.locator('textarea[aria-label="Adversarial prompt input"]')
        await textarea.wait_for()

        content = await textarea.input_value()
        print(f"Prompt content: '{content}'")

        # Wait for results panel to show the output
        result_output = page.locator('text=Final Verification Success')
        await result_output.wait_for()
        print("Result output found in UI")

        await page.screenshot(path="final_verify.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_init())
