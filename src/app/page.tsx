'use client'

import HomeCard from "@/components/Cards/HomeCard";

export default function Home() {
  // 5 tane HomeCard bileşenini bir array içerisine ekleyin
  const homeCards = [];
  for (let i = 0; i < 5; i++) {
    homeCards.push(<HomeCard key={i} />);
  }

  return (
    <main>
      <div className="grid">
        {homeCards.map((card, index) => (
          <div key={index} className="col-4">
            {card}
          </div>
        ))}
      </div>
    </main>
  );
}
