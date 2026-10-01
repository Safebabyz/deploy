// IntegrationTest.ts — Integration test ที่คาดหวังว่าจะ pass
import { TV } from "./TV";
import { TVUser } from "./TVUser";
import { TVLog } from "./TVLog";

const integration_test = () => {
    console.log("=== Integration Test (Success Case) ===\n");
    let passed = true;

    // ── Test 1: TV เปิดได้ ────────────────────────────────────────────
    TV.turnOn();
    if (TV.getStatus() === "on") {
        console.log("✓ Test 1: TV.turnOn() → status = on");
    } else {
        console.error("✗ Test 1: TV.turnOn() failed, status =", TV.getStatus());
        passed = false;
    }

    // ── Test 2: TV ปิดได้ ─────────────────────────────────────────────
    TV.turnOff();
    if (TV.getStatus() === "off") {
        console.log("✓ Test 2: TV.turnOff() → status = off");
    } else {
        console.error("✗ Test 2: TV.turnOff() failed, status =", TV.getStatus());
        passed = false;
    }

    // ── Test 3: TVUser บันทึกชื่อผู้ใช้ได้ ───────────────────────────
    TVUser.userTurnOn("สมชาย");
    const history = TVUser.getHistory();
    if (history.length === 1 && history[0].user === "สมชาย") {
        console.log("✓ Test 3: TVUser.userTurnOn() บันทึกชื่อผู้ใช้ถูกต้อง");
    } else {
        console.error("✗ Test 3: TVUser history ผิดพลาด");
        passed = false;
    }

    // ── Test 4: TVLog บันทึก log ได้ ─────────────────────────────────
    const logs = TVLog.getLogs();
    if (logs.length > 0 && logs[0].user === "สมชาย") {
        console.log("✓ Test 4: TVLog บันทึก log พร้อม timestamp ถูกต้อง");
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

integration_test();
