// TVLog.ts — Module บันทึกเวลาที่ทีวีถูกเปิด/ปิด

export interface LogEntry {
    timestamp: Date;
    user: string;
    action: "turnOn" | "turnOff";
}

const logs: LogEntry[] = [];

export function record(user: string, action: "turnOn" | "turnOff"): LogEntry {
    const entry: LogEntry = {
        timestamp: new Date(),
        user,
        action,
    };
    logs.push(entry);
    console.log(
        `[TVLog] ${entry.timestamp.toISOString()} — ${user} ${action === "turnOn" ? "เปิดทีวี" : "ปิดทีวี"}`
    );
    return entry;
}

export function getLogs(): LogEntry[] {
    return logs;
}

export function printLogs(): void {
    console.log("\n=== TV Log History ===");
    if (logs.length === 0) {
        console.log("(ไม่มีประวัติ)");
        return;
    }
    logs.forEach((log, i) => {
        console.log(
            `${i + 1}. [${log.timestamp.toISOString()}] ${log.user} → ${log.action === "turnOn" ? "เปิด" : "ปิด"}ทีวี`
        );
    });
    console.log("=====================\n");
}

export const TVLog = { record, getLogs, printLogs };
