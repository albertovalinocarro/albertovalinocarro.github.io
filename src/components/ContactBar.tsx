import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { resume } from "../data/resume";

export function ContactBar() {
    return (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm opacity-90 justify-center sm:justify-start">
              <span className="inline-flex items-center gap-1">
                <MapPin size={16} className="opacity-70" />
                  {resume.socials.location}
              </span>
                <a
                    href={`mailto:${resume.socials.email}`}
                    className="inline-flex items-center gap-1 hover:underline"
                >
                    <Mail size={16} /> {resume.socials.email}
                </a>
                <a
                    href={resume.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                >
                    <Github size={16} /> GitHub
                </a>
                <a
                    href={resume.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                >
                    <Linkedin size={16} /> LinkedIn
                </a>
        </div>
    );
}
