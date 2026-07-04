import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Use the already running preview server on 4173
        page = await browser.new_page()

        try:
            # Set GEMINI_API_KEY in localStorage to bypass potential errors if needed
            await page.goto("http://localhost:4173")
            await page.evaluate("localStorage.setItem('GEMINI_API_KEY', 'dummy-key')")
            await page.reload()

            # Open Variable Manager
            await page.click("button:has-text('VARIABLES')")
            await page.wait_for_selector("text=MANAGE VARIABLES")

            # Check for sr-only labels
            labels = await page.query_selector_all(".sr-only")
            print(f"Found {len(labels)} sr-only labels")
            for label in labels:
                text = await label.inner_text()
                print(f"Label text: {text}")

            await page.screenshot(path="verification/refinements_var_manager.png")

            # Close and open Template Editor (it's not mounted in App.tsx yet based on memory,
            # but I should check if I can trigger it or if I should just trust the code)

        except Exception as e:
            print(f"Error: {e}")
            await page.screenshot(path="verification/error_refinement.png")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
