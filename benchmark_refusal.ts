import { REFUSAL_KEYWORDS } from './constants';

const iterations = 1000;
const baseString = "This is a typical model response that goes on for a while to simulate a realistic scenario. ".repeat(800);
const matchAtEnd = baseString + "This request is against my safety policy."; // "safety policy" is the last keyword

function currentLogic(outputText: string) {
    return REFUSAL_KEYWORDS.some(keyword =>
      outputText.toLowerCase().includes(keyword.toLowerCase())
    );
}

const escapedKeywords = REFUSAL_KEYWORDS.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const REFUSAL_REGEX = new RegExp(escapedKeywords.join('|'), 'i');

function optimizedLogic(outputText: string) {
    return REFUSAL_REGEX.test(outputText);
}

console.log(`--- Refusal Detection Benchmark ---`);
console.log(`String size: ${matchAtEnd.length.toLocaleString()} characters`);
console.log(`Iterations: ${iterations.toLocaleString()}\n`);

// Warm up
for (let i = 0; i < 100; i++) {
    currentLogic(matchAtEnd);
    optimizedLogic(matchAtEnd);
}

console.time('Current Logic (Match at end)');
for (let i = 0; i < iterations; i++) {
    currentLogic(matchAtEnd);
}
console.timeEnd('Current Logic (Match at end)');

console.time('Optimized Logic (Match at end)');
for (let i = 0; i < iterations; i++) {
    optimizedLogic(matchAtEnd);
}
console.timeEnd('Optimized Logic (Match at end)');

console.log('\n--- No Match Scenario ---');
const noMatchString = baseString + "Everything looks good and safe.";
console.time('Current Logic (No Match)');
for (let i = 0; i < iterations; i++) {
    currentLogic(noMatchString);
}
console.timeEnd('Current Logic (No Match)');

console.time('Optimized Logic (No Match)');
for (let i = 0; i < iterations; i++) {
    optimizedLogic(noMatchString);
}
console.timeEnd('Optimized Logic (No Match)');
