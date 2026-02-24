"use client";

import Image from "next/image";
import ChatbotImage from "@/src/assets/bot.svg";
import { useState } from "react";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="fixed bottom-4 right-4 bg-background p-2 rounded-full border border-foreground dark:border-accent cursor-pointer dark:bg-primary-foreground">
        <Image
          src={ChatbotImage}
          width={32}
          height={32}
          alt="Chatbot Image"
          className="dark:invert"
        />
      </div>
      <div>
        
      </div>
    </div>
  );
}
