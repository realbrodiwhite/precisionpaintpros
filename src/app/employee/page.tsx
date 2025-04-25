
import { Button } from "@/components/ui/button";

export default function EmployeePage() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Employee Panel</h1>
        <p className="text-lg mt-2">
          Update projects, send invoices, and communicate with clients.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-700">
          Update project status, upload photos, and communicate with clients.
        </p>
        {/* Placeholder for project list */}
        <p className="text-gray-700">No projects available at this time.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Invoices</h2>
        <p className="text-gray-700">
          Send invoices to clients and track payments.
        </p>
        <Button>Create Invoice</Button>
      </section>
    </div>
  );
}
