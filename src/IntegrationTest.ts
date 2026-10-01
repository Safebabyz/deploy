import { Utils } from "./Utils";
import axios, { AxiosResponse } from "axios";

const integration_test = async () => {
    let passed = true;

    // ── Integration Test 1: Utils.add (multiply) ─────────────────────
    const addResult = Utils.add(3, 4);
    if (addResult === 12) {
        console.log(`Integration test 1: Utils.add(3, 4) = ${addResult} ✓`);
    } else {
        console.error(`Integration test 1: expected 12, got ${addResult}`);
        passed = false;
    }

    // ── Integration Test 2: HTTP GET / ───────────────────────────────
    try {
        const res: AxiosResponse = await axios.get("http://localhost:3000/");
        if (res.status === 200) {
            console.log(`Integration test 2: GET / → status ${res.status} ✓`);
        } else {
            console.error(`Integration test 2: expected 200, got ${res.status}`);
            passed = false;
        }
    } catch (err: any) {
        console.error(`Integration test 2: HTTP request failed - ${err.message}`);
        passed = false;
    }

    if (!passed) {
        process.exit(1);
    }

    console.log("All integration tests passed!");
};

integration_test();
