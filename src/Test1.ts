import { Utils } from "./Utils";

// stdout: พิมพ์ 0 = ผ่านทุก test, 1 = มี test ที่ไม่ผ่าน (workflow อ่านค่านี้เป็น exit code)
// stderr: รายละเอียดของแต่ละ test เพื่อให้ขึ้นใน log ของ GitHub Actions
const check = (name: string, actual: unknown, expected: unknown): boolean => {
    if (actual === expected) {
        console.error(`PASS ${name}`);
        return true;
    }
    console.error(`::error title=${name} failed::expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
    return false;
};

const unit_test = async () => {
    //test1
    if (!check("test1 Utils.add(1, 2)", Utils.add(1, 2), 3)) {
        console.log(1); //case error ค่าคือ 1
        return;
    }

    //test2
    if (!check("test2 Utils.helloworld()", Utils.helloworld(), "hello world")) {
        console.log(1);
        return;
    }

    console.log(0);
};

unit_test();
