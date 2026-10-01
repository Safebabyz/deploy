import { Utils } from "./Utils";

// พิมพ์ 0 = ผ่านทุก test, พิมพ์ 1 = มี test ที่ไม่ผ่าน (workflow อ่านค่านี้เป็น exit code)
const unit_test = async () => {
    //test1
    if (Utils.add(1, 2) !== 3) {
        console.log(1); //case error ค่าคือ 1
        return;
    }

    //test2
    if (Utils.helloworld() !== "hello world") {
        console.log(1);
        return;
    }

    console.log(0);
};

unit_test();
