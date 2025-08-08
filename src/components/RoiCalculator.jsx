// src/components/RoiCalculator.jsx
import React, { useMemo, useState } from 'react';
import './RoiCalculator.css';

export default function RoiCalculator() {
  const [raise, setRaise] = useState(250);
  const [fee, setFee] = useState(3);
  const [lock, setLock] = useState(6);

  const results = useMemo(() => {
    const fees = (raise * fee) / 100;
    const lp = raise - fees;
    const estApy = 8 + lock * 1.5; // mock formula
    return { fees, lp, estApy };
  }, [raise, fee, lock]);

  return (
    <section className="roi">
      <div className="container">
        <h2>Estimate fees & returns</h2>
        <div className="roi-grid">
          <div className="roi-controls">
            <label>Raise Amount (k USD)<input type="range" min="50" max="1000" value={raise} onChange={e=>setRaise(+e.target.value)} /></label>
            <div className="val">{raise}k</div>
            <label>Platform Fee (%)<input type="range" min="0" max="10" value={fee} onChange={e=>setFee(+e.target.value)} /></label>
            <div className="val">{fee}%</div>
            <label>Lock Period (months)<input type="range" min="1" max="24" value={lock} onChange={e=>setLock(+e.target.value)} /></label>
            <div className="val">{lock} mo</div>
          </div>
          <div className="roi-results">
            <div><span>Estimated Fees</span><strong>${results.fees.toFixed(1)}k</strong></div>
            <div><span>Liquidity After Fees</span><strong>${results.lp.toFixed(1)}k</strong></div>
            <div><span>Indicative APY</span><strong>{results.estApy.toFixed(0)}%</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
