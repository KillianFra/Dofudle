"use client";

import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { SpellPane } from "~/Components/pane";
import type { Spell } from "~/Types/types";

export default function Page() {
  const [state, setState] = useState<Spell>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    axios.get(`https://api.dofusdb.fr/spells?id=250`)
      .then((response) => {
        setState(response.data.data[0]);
      }).catch((error) => {
        console.error(error)
      })
  }, []);

  useEffect(() => {
    if (state && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const img = new Image()
        img.src = state.img
        img.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw image
        };
      }
    }
  }, [state]);

  return state && (
    <div className="size-full flex justify-center items-center">
      <SpellPane>
        <div className="flex justify-center mt-10 mx-10 py-8 border-dsecondary border-2 rounded-md">
          <canvas 
            ref={canvasRef} 
            width={70} 
            height={70}
            style={{filter: `blur(8px)`}}
          />
        </div>
        <div className="text-2xl text-white text-center">

        </div>
      </SpellPane> 
    </div>
  );
}
