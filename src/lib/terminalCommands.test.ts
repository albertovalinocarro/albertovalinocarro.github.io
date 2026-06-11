import { describe, it, expect } from "vitest";
import { processCommand } from "./terminalCommands";

describe("processCommand", () => {
    it("returns nothing for empty input", () => {
        expect(processCommand("")).toEqual([]);
        expect(processCommand("   ")).toEqual([]);
    });

    it("returns 'clear' for the clear command", () => {
        expect(processCommand("clear")).toBe("clear");
        expect(processCommand("  CLEAR  ")).toBe("clear");
    });

    it("is case-insensitive for known commands", () => {
        const lower = processCommand("whoami");
        const upper = processCommand("WhoAmI");
        expect(lower).toEqual(upper);
    });

    it("lists all documented commands in help", () => {
        const result = processCommand("help");
        expect(result).not.toBe("clear");
        const text = (result as { text: string }[]).map((l) => l.text).join("\n");
        for (const cmd of ["whoami", "skills", "experience", "projects", "contact", "clear", "help"]) {
            expect(text).toContain(cmd);
        }
    });

    it("returns an error for unknown commands, preserving the user's casing", () => {
        const result = processCommand("FooBar") as { text: string; type: string }[];
        expect(result[0].type).toBe("error");
        expect(result[0].text).toContain("FooBar");
    });

    it("handles the sudo hire alberto easter egg", () => {
        const result = processCommand("sudo hire alberto") as { text: string; type: string }[];
        expect(result.some((l) => l.type === "success")).toBe(true);
        expect(result.map((l) => l.text).join("\n")).toContain("albertovcarro@gmail.com");
    });

    it("never lets editor commands trap the visitor", () => {
        for (const editor of ["vim", "vi", "nano", "emacs"]) {
            const result = processCommand(editor) as { text: string }[];
            expect(result.length).toBeGreaterThan(0);
        }
    });
});
