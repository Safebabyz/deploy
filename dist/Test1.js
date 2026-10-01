"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
// stdout: พิมพ์ 0 = ผ่านทุก test, 1 = มี test ที่ไม่ผ่าน (workflow อ่านค่านี้เป็น exit code)
// stderr: รายละเอียดของแต่ละ test เพื่อให้ขึ้นใน log ของ GitHub Actions
const check = (name, actual, expected) => {
    if (actual === expected) {
        console.error(`PASS ${name}`);
        return true;
    }
    console.error(`::error title=${name} failed::expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
    return false;
};
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    //test1
    if (!check("test1 Utils.add(1, 2)", Utils_1.Utils.add(1, 2), 3)) {
        console.log(1); //case error ค่าคือ 1
        return;
    }
    //test2
    if (!check("test2 Utils.helloworld()", Utils_1.Utils.helloworld(), "hello world")) {
        console.log(1);
        return;
    }
    console.log(0);
});
unit_test();
