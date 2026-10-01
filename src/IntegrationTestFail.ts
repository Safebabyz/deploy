import { Utils } from "./Utils";
import axios from "axios";

const integration_test_fail = async () => {
    console.log("=== Running Integration Test (Expected to Fail) ===");

    let hasFailed = false;

    // ── Fail Case 1: Utils.add ผลลัพธ์ผิด ──────────────────────────
    const result = Utils.add(3, 4);
    const expected = 7; // ตั้งใจ expect ผลบวก แต่จริงๆ Utils.add คูณ → fail
    if (result !== expected) {
        console.error(`❌ Integration Test Fail 1: Utils.add(3, 4) expected ${expected}, got ${result}`);
        hasFailed = true;
    } else {
        console.log(`Integration Test Fail 1: passed`);
    }

    // ── Fail Case 2: HTTP endpoint ที่ไม่มีอยู่ ────────────────────
    try {
        await axios.get("http://localhost:3000/notfound");
        console.error("❌ Integration Test Fail 2: expected 404, but request succeeded");
        hasFailed = true;
    } catch (err: any) {
        if (err.response && err.response.status === 404) {
            console.error(`❌ Integration Test Fail 2: GET /notfound → 404 Not Found (expected failure)`);
            hasFailed = true;
        } else {
            console.error(`❌ Integration Test Fail 2: ${err.message}`);
            hasFailed = true;
        }
    }

    if (hasFailed) {
        process.exit(1);
    }
};

integration_test_fail();
