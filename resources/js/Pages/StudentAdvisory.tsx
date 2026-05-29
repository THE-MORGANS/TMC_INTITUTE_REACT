import { Head } from '@inertiajs/react';

export default function StudentAdvisory() {
  return (
    <> 
      <Head title="Student Advisory" />
      <main className="page-page">
        <section className="page-hero">
          <div className="page-container">
            <h1>Student Advisory</h1>
            <p>
              Access expert guidance for course selection, career planning, and academic progression.
            </p>
            <div className="page-card">
              <h2>What we offer</h2>
              <ul className="page-list">
                <li>Personalised mentoring</li>
                <li>Career pathway planning</li>
                <li>Application support</li>
                <li>Leadership development tools</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
