"use client";

import { routes } from "@/src/routes";
import { useState, KeyboardEvent, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

interface ChatResponse {
  reply: string;
  error?: string;
}

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  useEffect(() => {
    if (messages.length === 0) {
      const greetings: Message = {
        role: "assistant",
        content: "Hello! Feel free to ask me about this Portfolio!",
      };
      setMessages([greetings]);
    }
  }, []);

  const sendMessage = async (): Promise<void> => {
    if (!message.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(routes.api.chat, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data: ChatResponse = await res.json();

      const botMessage: Message = {
        role: "assistant",
        content:
          data.reply ||
          "I'm sorry, I can only answer questions regarding the portfolio.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      void sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-90 w-80 max-w-md border rounded-lg bg-background overflow-hidden">
      <div className="flex-1 overflow-y-auto p-3 flex flex-col">
        <div className="flex-1" />

        <div className="space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg text-sm max-w-fit ${
                msg.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="bg-muted p-2 rounded-lg text-sm w-fit animate-pulse">
              Typing...
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </div>

      <div ref={scrollRef} />

      {/* Input */}
      <div className="flex border-t p-2 gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1 text-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm cursor-pointer hover:bg-accent-foreground"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}
