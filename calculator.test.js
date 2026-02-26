const { add, subtract, multiply, divide } = require('./calculator');

// Simple test runner
let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`✓ ${name}`);
        passed++;
    } catch (e) {
        console.log(`✗ ${name}`);
        console.log(`  Error: ${e.message}`);
        failed++;
    }
}

function assertEqual(actual, expected) {
    if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}`);
    }
}

// Tests
test('add 2 + 2 should equal 4', () => {
    assertEqual(add(2, 2), 4);
});

test('add 1 + 1 should equal 2', () => {
    assertEqual(add(1, 1), 2);
});

test('add 0 + 0 should equal 0', () => {
    assertEqual(add(0, 0), 0);
});

test('subtract 5 - 3 should equal 2', () => {
    assertEqual(subtract(5, 3), 2);
});

test('multiply 3 * 4 should equal 12', () => {
    assertEqual(multiply(3, 4), 12);
});

test('divide 10 / 2 should equal 5', () => {
    assertEqual(divide(10, 2), 5);
});

console.log(`\nResults: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
