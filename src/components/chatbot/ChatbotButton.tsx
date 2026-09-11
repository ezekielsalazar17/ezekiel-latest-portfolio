"use client";

import Image from "next/image";
import { useState } from "react";
import ChatbotImage from "@/src/assets/bot.svg";
import Chatbot from "./Chatbot";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  function HandleOpen(): void {
    setOpen((prevOpen: boolean) => !prevOpen);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open AI assistant"
        onClick={HandleOpen}
        className="fixed bottom-4 right-4 bg-card p-3 rounded-full border border-border shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <Image
          src={ChatbotImage}
          width={32}
          height={32}
          alt="Chatbot"
          className="dark:invert"
        />
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 w-fit h-fit bg-card border border-border shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center p-3 border-b border-border">
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="size-2 bg-green-500 rounded-full animate-pulse" />
              <h2 className="font-semibold">Ezekiel</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close AI assistant"
              className="text-sm px-2 py-1 hover:bg-muted rounded"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
}
