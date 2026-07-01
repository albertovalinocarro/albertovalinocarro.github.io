import { describe, it, expect } from "vitest";
import { resume, CV_VERSION } from "./resume";
import { resumeEs, SOURCE_CV_VERSION } from "./resume.es";

describe("Spanish translation sync", () => {
    it("was translated from the current English resume", () => {
        // If this fails, resume.ts changed after resume.es.ts was translated.
        // Retranslate the changed content in resume.es.ts, then update its
        // SOURCE_CV_VERSION to the value printed below.
        expect(
            SOURCE_CV_VERSION,
            `resume.es.ts is out of date: retranslate it and set SOURCE_CV_VERSION to "${CV_VERSION}"`
        ).toBe(CV_VERSION);
    });
});

describe("Spanish translation structure", () => {
    it("keeps untranslatable fields identical", () => {
        expect(resumeEs.name).toBe(resume.name);
        expect(resumeEs.email).toBe(resume.email);
        expect(resumeEs.socials.github).toBe(resume.socials.github);
        expect(resumeEs.socials.linkedin).toBe(resume.socials.linkedin);
    });

    it("mirrors the English resume's shape", () => {
        expect(resumeEs.typingTitles).toHaveLength(resume.typingTitles!.length);
        expect(resumeEs.skills).toHaveLength(resume.skills.length);
        expect(resumeEs.skillGroups).toHaveLength(resume.skillGroups!.length);
        expect(resumeEs.experience).toHaveLength(resume.experience.length);
        expect(resumeEs.education).toHaveLength(resume.education.length);
        expect(resumeEs.projects).toHaveLength(resume.projects.length);
        expect(resumeEs.personalProjects).toHaveLength(resume.personalProjects.length);
        expect(resumeEs.extras).toHaveLength(resume.extras.length);

        resume.experience.forEach((job, i) => {
            expect(resumeEs.experience[i].points).toHaveLength(job.points.length);
        });
        resume.personalProjects.forEach((project, i) => {
            expect(resumeEs.personalProjects[i].url).toBe(project.url);
            expect(resumeEs.personalProjects[i].stack).toEqual(project.stack);
            expect(resumeEs.personalProjects[i].points).toHaveLength(project.points.length);
        });
    });

    it("translates every label", () => {
        for (const key of Object.keys(resume.labels) as (keyof typeof resume.labels)[]) {
            expect(resumeEs.labels[key], `missing label: ${key}`).toBeTruthy();
        }
    });
});
