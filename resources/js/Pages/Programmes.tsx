import { Head } from '@inertiajs/react';

const PROGRAMMES = [
  'Governance & Risk',
  'Financial Crime Prevention',
  'ESG & Digital Risk',
  'Regulatory Technology',
  'Executive Education',
];

export default function Programmes() {
  return (
    <>
      <Head title="Programmes" />
      <main className="page-page">
        <section className="page-hero">
          <div className="page-container">
            <h1>Programmes</h1>
            <p>
              Explore our structured programmes designed to help professionals master modern risk, compliance,
              and digital transformation challenges.
            </p>
            <ul className="page-list">
              {PROGRAMMES.map((programme) => (
                <li key={programme} className="page-list-item">
                  {programme}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
