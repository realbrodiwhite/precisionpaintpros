
import { Button } from "@/components/ui/button";

export default function ClientPage() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Client Panel</h1>
        <p className="text-lg mt-2">
          Manage your projects, request estimates, view invoices, and make payments.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Request an Estimate</h2>
        <p className="text-gray-700">
          Need a painting estimate? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <Button>Request Estimate</Button>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Invoices</h2>
        <p className="text-gray-700">
          View your invoices and make payments securely online.
        </p>
        {/* Placeholder for invoice list */}
        <p className="text-gray-700">No invoices available at this time.</p>
      </section>
    </div>
  );
}
