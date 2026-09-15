// hooks/useScrollStageTracker.js
import { useEffect, useRef, useState } from "react";

export function useScrollStageTracker(totalItems, offset = 100) {
  const cardRefs = useRef([]);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    function handleScroll() {
      let current = 0;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        // jis card ka top, offset se upar ya barabar aa gaya, wahi abhi ka active stage hai
        if (rect.top <= offset) {
          current = index;
        }
      });

      setActiveStage(current);

      console.log(`Stage: ${current + 1} / ${totalItems}`);

      if (current === totalItems - 1) {
        console.log("✅ Last card tak pahunch gaye");
      } else if (current === 0) {
        console.log("🔝 Sabse top wale card pe hain");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalItems, offset]);

  return { activeStage, cardRefs };
}