import React, { useState } from 'react';

const faqs = [
  { q: 'How do I join the presale?', a: 'Click on Presale in the nav and follow the instructions.' },
  { q: 'What chains are supported?', a: 'Ethereum, BNB, Solana, Polygon, Arbitrum, and more.' },
  // ...
];

const FAQPage = () => {
  const [search, setSearch] = useState('');
  const filtered = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="container">
      <h2>FAQ</h2>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />
      {filtered.map((f, i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <strong>{f.q}</strong>
          <p>{f.a}</p>
        </div>
      ))}
      {/* TODO: Add more FAQs */}
    </div>
  );
};

export default FAQPage;
