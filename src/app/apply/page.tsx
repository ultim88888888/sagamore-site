import { ApplicationForm } from "@/components/apply/ApplicationForm";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-700 text-navy mb-2">Apply for Funding</h1>
          <p className="text-ink-secondary">One application, multiple lending options. No hard credit pull until you accept an offer.</p>
        </div>
        <ApplicationForm />
      </div>
    </main>
  );
}
