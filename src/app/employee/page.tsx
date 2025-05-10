
export default function ClientPage() {
    return (
        <div className="container mx-auto py-12">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Client Dashboard</h1>
                <p className="text-lg mt-2">
                    Welcome to your client dashboard. Here, you can manage your
                    projects, request estimates, view invoices, and more.
                </p>
            </header>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    Available Actions
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Request a new estimate for your next project.</li>
                    <li>View the status of your current projects.</li>
                    <li>Review and pay your invoices.</li>
                    <li>Communicate with the team about your projects.</li>
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    Request an Estimate
                </h2>
                <p className="text-gray-700">
                    Fill out the form in the Contact Us page to request an
                    estimate.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    Recent Projects
                </h2>
                <p className="text-gray-700">
                    Here's a list of your recent projects and their current
                    status.
                </p>
                {/* Placeholder for project list */}
                <div className="border border-gray-300 rounded-lg p-4 mt-4">
                    <h3 className="font-semibold">
                        Residential Interior Painting
                    </h3>
                    <p className="text-gray-700">Status: In Progress</p>
                    <p className="text-gray-700">
                        Estimated Completion: 2 Weeks
                    </p>
                </div>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    Recent Invoices
                </h2>
                <p className="text-gray-700">
                    Here you can see your invoices. Invoices will appear here
                    once they have been created by an employee.
                </p>
            </section>
        </div>
    );
}
