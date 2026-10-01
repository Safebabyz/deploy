// TV.ts — Module ควบคุมการเปิด/ปิดทีวี

export type TVStatus = "on" | "off";

let status: TVStatus = "off";

export function turnOn(): TVStatus {
    status = "on";
    return status;
}

export function turnOff(): TVStatus {
    status = "off";
    return status;
}

export function getStatus(): TVStatus {
    return status;
}

export const TV = { turnOn, turnOff, getStatus };
