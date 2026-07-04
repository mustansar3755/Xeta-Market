import { useEffect, useState } from "react";

function getTimeLeft(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 sm:w-16 rounded-lg border border-edge bg-panel/80 py-2 text-center font-mono text-lg sm:text-xl font-semibold text-cloud shadow-glow">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-1 text-[10px] uppercase tracking-wider text-mist">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ target }) {
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="flex items-center gap-3">
      <Unit value={time.d} label="Din" />
      <span className="pb-4 font-mono text-edge">:</span>
      <Unit value={time.h} label="Ghanty" />
      <span className="pb-4 font-mono text-edge">:</span>
      <Unit value={time.m} label="Min" />
      <span className="pb-4 font-mono text-edge">:</span>
      <Unit value={time.s} label="Sec" />
    </div>
  );
}
