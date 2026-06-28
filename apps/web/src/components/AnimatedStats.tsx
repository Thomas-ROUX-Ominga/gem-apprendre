'use client';
import FadeContent from '@/components/FadeContent';
import CountUp from '@/components/CountUp';

const STATS = [
  { to: 100, suffix: '%', lbl: 'de satisfaction sur nos accompagnements VAE & bilans (2024-2025)' },
  { to: 250, prefix: '+', lbl: "créateurs d'entreprise déjà accompagnés" },
  { to: 100, suffix: '%', lbl: 'de satisfaction sur nos 20 actions de formation en 2025' },
  { to: 82, suffix: '%', lbl: 'des entreprises créées toujours actives après 3 ans' },
];

export default function AnimatedStats() {
  return (
    <div className="proof-grid">
      {STATS.map((s, i) => (
        <FadeContent key={i} delay={i * 110} duration={600}>
          <div className="stat">
            <div className="num">
              {s.prefix ?? ''}
              <CountUp to={s.to} duration={2} delay={0.15} />
              {s.suffix ?? ''}
            </div>
            <div className="lbl">{s.lbl}</div>
          </div>
        </FadeContent>
      ))}
    </div>
  );
}
