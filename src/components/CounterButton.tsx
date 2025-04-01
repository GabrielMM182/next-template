"use client"; // Necessário para useState, useEffect, onClick, Zustand hooks

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store/counter-store";

export function CounterButton() {
  const [localCount, setLocalCount] = useState(0);
  const { globalCount, incrementGlobal, decrementGlobal, resetGlobal } = useCounterStore();

  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-lg font-semibold">Client Component Counter</h2>
      <div className="mt-2">
        <p>Local Count: {localCount}</p>
        <p>Global Zustand Count: {globalCount}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <Button onClick={() => setLocalCount((c) => c + 1)}>
          Incrementar Local
        </Button>
        <Button 
          onClick={() => setLocalCount((c) => c - 1)}
          variant="outline"
        >
          Decrementar Local
        </Button>
      </div>
      <div className="flex gap-2 mt-2">
        <Button onClick={incrementGlobal} variant="secondary">
          Incrementar Global
        </Button>
        <Button 
          onClick={decrementGlobal}
          variant="outline"
        >
          Decrementar Global
        </Button>
        <Button 
          onClick={resetGlobal}
          variant="destructive"
        >
          Resetar Global
        </Button>
      </div>
    </div>
  );
} 