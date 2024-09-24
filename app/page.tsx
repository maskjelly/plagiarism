"use client";

import { useEffect, useState } from "react";
import { getEssay } from "./actions/route";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/togglebuddy";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import UserTransaction from "./actions/transaction";
import { fetchData } from "next-auth/client/_utils";

export default function Home() {
  const [essay, setEssay] = useState("");
  const [textAreaData, setTextAreaData] = useState("");
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);

  const prePrompt = `Re-write the following with bare minimum word and structure changes asif a normal college student would have written an essay , i need you to use very simple words for this : `;

  useEffect(() => {
    const countWords = (text: string) => {
      if (text.trim().length === 0) return 0;
      return text.trim().split(/\s+/).length;
    };
    setWordCount(countWords(textAreaData));
    if (wordCount === 0) {
      setTokenPrice(0);
    } else {
      setTokenPrice(wordCount * 1.9);
    }
  }, [textAreaData]);

  async function handleClick() {
    setLoading(true);
    try {
      fetchData; // Ensure this is awaited if it's an async function
      UserTransaction(tokenPrice);
      const generatedEssay = await getEssay(prePrompt + textAreaData);
      setEssay(generatedEssay);
      toast.success("Essay generated successfully!");
    } catch (error) {
      console.error("Error generating essay:", error);
      toast.error("Failed to generate essay.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container mx-auto p-4 max-w-2xl">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Essay Rewriter</h1>
        <Textarea
          className="mb-4"
          onChange={(e) => setTextAreaData(e.target.value)}
          placeholder="Enter the text to rewrite the essay"
          value={textAreaData}
          rows={5}
        />
        <div className="mb-4 text-right">
          <span className="text-sm light:text-white dark:text-white">
            Word Count: {wordCount} - Approximate tokens required: {tokenPrice}
          </span>
        </div>
        <Button
          className="w-full mb-4"
          onClick={handleClick}
          disabled={loading || !textAreaData.trim()}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Rewrite Essay"
          )}
        </Button>
        {essay && <div className="border p-4 bg-zinc-900">{essay} </div>}
      </div>
    </>
  );
}
// Hello , this is a story about john who is stuck on an island and has no where to go , he is bored and he is barely able to survive , he has been suffering because he had no friends and family that he had to talk to , he is tired of this noman life and is willing to leave as soon as he sees a boat that can come and help him . This has to be the toughest part of this entire life he says .
