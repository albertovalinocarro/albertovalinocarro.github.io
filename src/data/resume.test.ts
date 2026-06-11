import { describe, it, expect } from "vitest";
import { resume, hashContent, CV_VERSION } from "./resume";

describe("hashContent", () => {
    it("is deterministic", () => {
        expect(hashContent("hello")).toBe(hashContent("hello"));
    });

    it("changes when the input changes", () => {
        expect(hashContent("hello")).not.toBe(hashContent("hello!"));
    });
});

describe("CV_VERSION", () => {
    it("is derived from the resume content", () => {
        expect(CV_VERSION).toBe(hashContent(JSON.stringify(resume)));
        expect(CV_VERSION.length).toBeGreaterThan(0);
    });
});

describe("resume data", () => {
    it("has the shape the translation cache validator expects", () => {
        expect(typeof resume.name).toBe("string");
        expect(typeof resume.summary).toBe("string");
        expect(Array.isArray(resume.skills)).toBe(true);
        expect(Array.isArray(resume.experience)).toBe(true);
        expect(Array.isArray(resume.education)).toBe(true);
        expect(Array.isArray(resume.projects)).toBe(true);
        expect(Array.isArray(resume.extras)).toBe(true);
        expect(resume.labels).toBeTruthy();
    });

    it("has non-empty skill groups", () => {
        expect(resume.skillGroups.length).toBeGreaterThan(0);
        for (const group of resume.skillGroups) {
            expect(group.label.length).toBeGreaterThan(0);
            expect(group.items.length).toBeGreaterThan(0);
        }
    });
});
