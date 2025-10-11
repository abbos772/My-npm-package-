import React, { useState } from "react";
import "./Filter.css";

const Filter: React.FC = () => {
  const [active, setActive] = useState<"stickers" | "emoji">("stickers");

  return (
    <div className="filter-wrap" role="tablist" aria-label="Filter tabs">
      <button
        role="tab"
        aria-selected={active === "stickers"}
        className={`filter-tab ${active === "stickers" ? "active" : ""}`}
        onClick={() => setActive("stickers")}
      >
        Стикеры
      </button>

      <button
        role="tab"
        aria-selected={active === "emoji"}
        className={`filter-tab ${active === "emoji" ? "active" : ""}`}
        onClick={() => setActive("emoji")}
      >
        Эмодзи
      </button>
    </div>
  );
};

export default Filter;
