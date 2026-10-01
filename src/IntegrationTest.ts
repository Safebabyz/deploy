import { Utils } from "./Utils";

const integration_test = async () => {
    // Integration test: ทดสอบการทำงานร่วมกันของฟังก์ชันต่างๆ
    let passed = true;

    // Test helloworld + add ทำงานร่วมกัน
    const greeting = Utils.helloworld();
    if (greeting === "hello world") {
        console.log("Integration test 1: helloworld() returns 'hello world' ✓");
    } else {
        console.error(`Integration test 1: expected 'hello world', got '${greeting}'`);
        passed = false;
    }

    // Test add หลายค่ารวมกัน (integration scenario)
    const result = Utils.add(Utils.add(1, 2), Utils.add(3, 4));
    if (result === 21) {
        console.log(`Integration test 2: add(add(1,2), add(3,4)) = ${result} ✓`);
    } else {
        console.error(`Integration test 2: expected 21, got ${result}`);
        passed = false;
    }

    if (!passed) {
        process.exit(1);
    }

    console.log("All integration tests passed!");
};

integration_test();
