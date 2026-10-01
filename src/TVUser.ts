// TVUser.ts — Module บันทึกว่าใครเปิด/ปิดทีวี

import { TV, TVStatus } from "./TV";
import { TVLog } from "./TVLog";

export interface UserAction {
    user: string;
    action: "turnOn" | "turnOff";
    status: TVStatus;
}

const actionHistory: UserAction[] = [];

export function userTurnOn(userName: string): UserAction {
    const status = TV.turnOn();
    const entry: UserAction = { user: userName, action: "turnOn", status };
    actionHistory.push(entry);
    TVLog.record(userName, "turnOn");
    console.log(`[TVUser] ${userName} เปิดทีวี → status: ${status}`);
    return entry;
}

export function userTurnOff(userName: string): UserAction {
    const status = TV.turnOff();
    const entry: UserAction = { user: userName, action: "turnOff", status };
    actionHistory.push(entry);
    TVLog.record(userName, "turnOff");
    console.log(`[TVUser] ${userName} ปิดทีวี → status: ${status}`);
    return entry;
}

export function getHistory(): UserAction[] {
    return actionHistory;
}

export const TVUser = { userTurnOn, userTurnOff, getHistory };
