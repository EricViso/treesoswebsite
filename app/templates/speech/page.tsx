import { speech } from "@/lib/content";
import { SpeechBlock } from "@/components/marketing/SpeechBlock";

/**
 * PARAGRAPH / SPEECH TEMPLATE preview — the thesis narrative on a light page.
 */
export default function SpeechTemplate() {
  return (
    <main className="bg-canvas">
      <SpeechBlock
        eyebrow={speech.eyebrow}
        title={speech.title}
        lead={speech.lead}
        body={speech.body}
        pullQuote={speech.pullQuote}
        signoff={speech.signoff}
      />
    </main>
  );
}
