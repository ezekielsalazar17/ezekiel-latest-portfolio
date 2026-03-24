"use client";

import Image from "next/image";
import { useState } from "react";
import ChatbotImage from "@/src/assets/bot.svg";
import Chatbot from "./Chatbot";
import { Button } from "@/components/ui/button";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  function HandleOpen(): void {
    setOpen((prevOpen: boolean) => !prevOpen);
  }

  return (
    <>
      <div
        onClick={HandleOpen}
        className="fixed bottom-4 right-4 bg-background p-3 rounded-full 
  border border-foreground dark:border-accent cursor-pointer 
  dark:bg-primary-foreground shadow-lg hover:scale-110 transition 
  animate-float"
      >
        <Image
          src={ChatbotImage}
          width={32}
          height={32}
          alt="Chatbot"
          className="dark:invert"
        />
      </div>

      {open && (
        <div className="fixed bottom-20 right-4 w-fit h-fit bg-background dark:bg-primary-foreground border border-neutral-300 dark:border-accent rounded-xl shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center p-3 border-b border-foreground dark:border-accent">
            <Image
              src={ChatbotImage}
              width={32}
              height={32}
              alt="Chatbot"
              className="dark:invert"
            />
            <h2 className="font-semibold">AI Assistant</h2>
            <button
              onClick={() => setOpen(false)}
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
