// IntegrationTestFail.ts — Integration test ที่ตั้งใจให้ fail
import { TV } from "./TV";
import { TVUser } from "./TVUser";

const integration_test_fail = () => {
    console.log("=== Integration Test (Fail Case) ===\n");
    let hasFailed = false;

    // ── Fail 1: คาด "on" แต่ TV ยังไม่ได้เปิด ───────────────────────
    const statusBeforeTurnOn = TV.getStatus();
    if (statusBeforeTurnOn === "on") {
        console.log("Test 1: passed");
    } else {
        console.error(`✗ Fail 1: expected status 'on', got '${statusBeforeTurnOn}' (TV ยังไม่ได้เปิด)`);
        hasFailed = true;
    }

    // ── Fail 2: คาด history มี 3 รายการ แต่ยังไม่มีการใช้ TVUser ────
    const history = TVUser.getHistory();
    if (history.length === 3) {
        console.log("Test 2: passed");
    } else {
        console.error(`✗ Fail 2: expected 3 history entries, got ${history.length}`);
        hasFailed = true;
    }

    if (hasFailed) {
        console.error("\n❌ Integration test failed (as expected)");
        process.exit(1);
    }
};

integration_test_fail();
