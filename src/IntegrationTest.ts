// IntegrationTest.ts — รันได้ทั้ง fail และ success
// usage:
//   node dist/IntegrationTest.js         → success scenario
//   node dist/IntegrationTest.js fail    → fail scenario

import { TV } from "./TV";
import { TVUser } from "./TVUser";
import { TVLog } from "./TVLog";

const mode = process.argv[2]; // "fail" หรือ undefined

// ── Fail scenario ────────────────────────────────────────────────────
const runFailScenario = () => {
    console.log("=== Integration Test (Fail Scenario) ===\n");
    let hasFailed = false;

    // Fail 1: คาด "on" แต่ TV ยังไม่ได้เปิด
    const status = TV.getStatus();
    if (status === "on") {
        console.log("Test 1: passed");
    } else {
        console.error(`✗ Fail 1: expected 'on', got '${status}' — TV ยังไม่ได้เปิด`);
        hasFailed = true;
    }

    // Fail 2: คาด history 3 รายการ แต่ยังไม่มีการใช้ TVUser
    const history = TVUser.getHistory();
    if (history.length === 3) {
        console.log("Test 2: passed");
    } else {
        console.error(`✗ Fail 2: expected 3 history entries, got ${history.length}`);
        hasFailed = true;
    }

    if (hasFailed) {
        console.error("\n❌ Integration test FAILED");
        process.exit(1);
    }
};

// ── Success scenario ──────────────────────────────────────────────────
const runSuccessScenario = () => {
    console.log("=== Integration Test (Success Scenario) ===\n");
    let passed = true;

    // Test 1: TV เปิดได้
    TV.turnOn();
    if (TV.getStatus() === "on") {
        console.log("✓ Test 1: TV.turnOn() → status = on");
    } else {
        console.error("✗ Test 1: TV.turnOn() failed");
        passed = false;
    }

    // Test 2: TV ปิดได้
    TV.turnOff();
    if (TV.getStatus() === "off") {
        console.log("✓ Test 2: TV.turnOff() → status = off");
    } else {
        console.error("✗ Test 2: TV.turnOff() failed");
        passed = false;
    }

    // Test 3: TVUser บันทึกชื่อได้
    TVUser.userTurnOn("สมชาย");
    const history = TVUser.getHistory();
    if (history.length === 1 && history[0].user === "สมชาย") {
        console.log("✓ Test 3: TVUser บันทึกชื่อผู้ใช้ถูกต้อง");
    } else {
        console.error("✗ Test 3: TVUser history ผิดพลาด");
        passed = false;
    }

    // Test 4: TVLog บันทึก timestamp ได้
    const logs = TVLog.getLogs();
    if (logs.length > 0 && logs[0].user === "สมชาย") {
        console.log("✓ Test 4: TVLog บันทึก timestamp ถูกต้อง");
    } else {
        console.error("✗ Test 4: TVLog ไม่มี log หรือ log ผิดพลาด");
        passed = false;
    }

    console.log("\n--- TV Log History ---");
    TVLog.printLogs();

    if (!passed) {
        console.error("❌ Integration tests FAILED");
        process.exit(1);
    }

    console.log("✅ All integration tests passed!");
};

// ── Main ──────────────────────────────────────────────────────────────
if (mode === "fail") {
    runFailScenario();
} else {
    runSuccessScenario();
}
