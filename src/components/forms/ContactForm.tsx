import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { supabase } from "../../lib/supabase";
import { SITE_CONTENT } from "../../data/siteContent";

import type { FormData } from "../../types/forms";
import { emptyForm } from "../../types/forms";

export default function ContactForm({
    config,
    formType,
}: {
    config: typeof SITE_CONTENT.contact.consultation;
    formType: 'consultation' | 'workshop';
}) {
    const [form, setForm] = useState<FormData>(emptyForm());
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.service_interest || !form.message) {
            setError('Please fill in all required fields.');
            return;
        }
        setSubmitting(true);
        setError(null);
        const { error: dbError } = await supabase.from('contact_submissions').insert({
            name: form.name,
            email: form.email,
            organization: form.organization || null,
            service_interest: form.service_interest,
            message: form.message,
            form_type: formType,
        });
        setSubmitting(false);
        if (dbError) {
            setError('Something went wrong. Please try again.');
            return;
        }
        setSuccess(true);
        setForm(emptyForm());
    };

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5 shadow">
                    <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{config.successTitle}</h3>
                <p className="text-slate-600 max-w-sm">{config.successMessage}</p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-7 px-5 py-2.5 text-sm font-medium text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors"
                >
                    Submit Another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        {config.fields.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        {config.fields.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {config.fields.organization}
                </label>
                <input
                    type="text"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Acme Research Institute"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {config.fields.serviceInterest} <span className="text-red-500">*</span>
                </label>
                <select
                    name="service_interest"
                    value={form.service_interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                    <option value="">Select an option</option>
                    {config.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    {config.fields.message} <span className="text-red-500">*</span>
                </label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={config.fields.message}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
            </div>

            {error && (
                <p className="text-red-600 text-sm font-medium bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    {error}
                </p>
            )}

            <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-md hover:shadow-blue-300 transition-all duration-200"
            >
                {submitting ? (
                    <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                    </>
                ) : (
                    <>
                        {config.submitLabel}
                        <ArrowRight size={16} />
                    </>
                )}
            </button>
        </form>
    );
}

