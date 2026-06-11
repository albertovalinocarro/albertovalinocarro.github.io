import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { ENDPOINTS } from "../lib/api";
import type { Labels } from "../data/types";

interface ContactFormProps {
    labels: Labels;
}

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ labels }: ContactFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // Honeypot — hidden from humans; bots that fill it get a silent fake success.
    const [website, setWebsite] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (website.trim() !== "") {
            setStatus("success");
            return;
        }

        setStatus("sending");

        try {
            const res = await fetch(ENDPOINTS.contact, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
            });

            if (!res.ok) throw new Error("Request failed");

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="flex items-center gap-3 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/40 px-4 py-4 text-green-700 dark:text-green-400">
                <CheckCircle size={20} className="shrink-0" />
                <span>{labels.contactSuccess}</span>
            </div>
        );
    }

    const inputClass = `
        w-full rounded-lg border border-zinc-200 dark:border-zinc-700
        bg-white dark:bg-zinc-800
        px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100
        placeholder:text-zinc-400 dark:placeholder:text-zinc-500
        focus:outline-none focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400
        transition-colors
    `;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {labels.contactNameLabel}
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        required
                        maxLength={100}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={labels.contactNamePlaceholder}
                        className={inputClass}
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {labels.contactEmailLabel}
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={200}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={labels.contactEmailPlaceholder}
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="contact-message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {labels.contactMessageLabel}
                </label>
                <textarea
                    id="contact-message"
                    required
                    maxLength={2000}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={labels.contactMessagePlaceholder}
                    className={`${inputClass} resize-none`}
                />
            </div>

            {/* Honeypot field — visually hidden and skipped by screen readers/tab order */}
            <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                <label htmlFor="contact-website">Website</label>
                <input
                    id="contact-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{labels.contactError}</span>
                </div>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="
                    inline-flex items-center gap-2
                    rounded-lg px-5 py-2.5 text-sm font-medium
                    bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400
                    dark:bg-accent-500 dark:hover:bg-accent-600 dark:disabled:bg-accent-800
                    text-white
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2
                    dark:focus:ring-offset-zinc-900
                "
            >
                <Send size={16} />
                {status === "sending" ? labels.contactSending : labels.contactSend}
            </button>
        </form>
    );
}
