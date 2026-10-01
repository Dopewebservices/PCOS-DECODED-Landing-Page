import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Check,
  ClipboardCheck,
  Download,
  FileCheck2,
  HeartPulse,
  ListChecks,
  MessageCircleQuestion,
  MonitorSmartphone,
  NotebookPen,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import heroMockupAsset from "@/assets/pcos-mockup-1.jpeg.asset.json";
import offerMockupAsset from "@/assets/pcos-mockup-2.jpeg.asset.json";
import logoAsset from "@/assets/gwhwn-logo.jpeg.asset.json";
import preview1 from "@/assets/pcos-preview-1.jpeg.asset.json";
import preview2 from "@/assets/pcos-preview-2.jpeg.asset.json";
import preview3 from "@/assets/pcos-preview-3.jpeg.asset.json";
import preview4 from "@/assets/pcos-preview-4.jpeg.asset.json";
import preview5 from "@/assets/pcos-preview-5.jpeg.asset.json";
import preview6 from "@/assets/pcos-preview-6.jpeg.asset.json";
import preview7 from "@/assets/pcos-preview-7.jpeg.asset.json";
import preview8 from "@/assets/pcos-preview-8.jpeg.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PCOS DECODED | Practical PCOS Workbook for Women" },
      {
        name: "description",
        content:
          "Understand PCOS, track what matters and prepare for better healthcare conversations with this 50-page digital workbook and three launch bonuses.",
      },
      { property: "og:title", content: "PCOS DECODED | Understand. Organize. Take Your Next Step." },
      {
        property: "og:description",
        content:
          "A practical, evidence-informed and Nigerian-relevant PCOS health and wellness workbook for women.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PCOS DECODED",
          description: "A 50-page digital PCOS health and wellness workbook for women.",
          brand: { "@type": "Brand", name: "Global Women’s Health & Wellness Network" },
          offers: {
            "@type": "Offer",
            priceCurrency: "NGN",
            price: "9900",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
});

const trustItems = [
  { icon: BookOpen, label: "50 pages", detail: "Practical digital workbook" },
  { icon: SearchCheck, label: "Evidence-informed", detail: "Grounded in reputable sources" },
  { icon: HeartPulse, label: "Nigerian-relevant", detail: "African context in mind" },
  { icon: NotebookPen, label: "Practical", detail: "Trackers, worksheets & tools" },
];

const foundations = [
  ["PCOS foundations", "Build a clearer understanding of PCOS and common terminology."],
  ["Symptoms & body signals", "Organize observations and questions about symptoms and changes you notice."],
  ["Cycle tracking", "Record cycle information and identify patterns worth discussing with your healthcare provider."],
  ["Fertility & ovulation", "Understand PCOS-related fertility and ovulation considerations without fear or false promises."],
  ["Nutrition & lifestyle", "Explore evidence-informed wellness considerations relevant to PCOS."],
  ["Medications & treatment", "Learn common treatment categories and why individualized medical guidance matters."],
  ["Doctor visit preparation", "Turn uncertainty into organized questions for your next appointment."],
  ["Your personal PCOS plan", "Bring your learning, observations and next steps together in one practical framework."],
];

const previews = [
  { src: preview1.url, label: "Cycle tracker", note: "Record cycle dates, length, symptoms and changes." },
  { src: preview7.url, label: "Symptom tracker", note: "Build a clear dashboard of meaningful observations." },
  { src: preview5.url, label: "Myths vs facts", note: "Separate common PCOS claims from evidence-informed facts." },
  { src: preview6.url, label: "Appointment checklist", note: "Prepare the details and questions to take into care." },
  { src: preview4.url, label: "Personal health file", note: "Organize your history, results, medicines, plans and goals." },
  { src: preview2.url, label: "Periods & ovulation", note: "Understand the information your cycle may provide." },
  { src: preview3.url, label: "PCOS & fertility", note: "Explore fertility information without guarantees or hype." },
  { src: preview8.url, label: "Supplement decisions", note: "Check claims, evidence, safety and personal context." },
];

const audience = [
  "You’ve recently been diagnosed with PCOS.",
  "You suspect you may have PCOS and want to understand the basics.",
  "You’ve lived with PCOS for a while but still feel confused about it.",
  "You want a structured way to track symptoms and cycles.",
  "You want to prepare better questions before appointments.",
  "You’re tired of piecing information together from random social-media posts.",
  "You want a practical health workbook created with Nigerian and African relevance in mind.",
];

const faqs = [
  ["Is PCOS DECODED a physical book?", "No. PCOS DECODED is a digital PDF workbook that you can access after purchasing."],
  ["Can I use it on my phone?", "Yes. You can view the PDF on a smartphone, tablet or computer."],
  ["Can I print it?", "Yes. You can print the workbook for your personal use if you prefer working with physical worksheets."],
  ["Is this a medical treatment guide?", "No. PCOS DECODED is an educational and health-navigation workbook. It does not replace individualized medical care."],
  ["Will this diagnose whether I have PCOS?", "No. A PCOS diagnosis requires appropriate assessment by a qualified healthcare professional."],
  ["Can this workbook help me get pregnant?", "The workbook provides educational information about PCOS and fertility-related considerations, but it does not guarantee pregnancy or replace professional fertility care."],
  ["Can I share my copy with friends?", "Your purchase is for personal use. Please do not redistribute, reproduce or resell the digital file."],
  ["How will I receive the workbook?", "After successful payment, you’ll receive access to the digital product through Selar."],
];

function PurchaseButton({ label = "GET PCOS DECODED NOW", full = false }: { label?: string; full?: boolean }) {
  return (
    <Button asChild size="lg" className={`h-14 rounded-full px-7 text-sm font-extrabold shadow-cta sm:text-base ${full ? "w-full" : ""}`}>
      <a href="https://globalwomenshealthnetwork.selar.com/pcosdecoded">{label}<ArrowRight aria-hidden="true" /></a>
    </Button>
  );
}

function SectionHeading({ eyebrow, title, copy, align = "center" }: { eyebrow: string; title: string; copy?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-[1.08] text-primary sm:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{copy}</p> : null}
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-primary">
        <Check className="size-3.5" aria-hidden="true" />
      </span>
      <span className="leading-7 text-foreground/85">{children}</span>
    </li>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background pb-20 md:pb-0">
      <header className="border-b border-border/70 bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-12">
          <img src={logoAsset.url} alt="Global Women’s Health & Wellness Network" className="h-11 w-auto max-w-[210px] object-contain object-left mix-blend-multiply sm:h-15 sm:max-w-[320px]" />
          <Button asChild className="hidden rounded-full px-6 font-bold sm:inline-flex"><a href="https://globalwomenshealthnetwork.selar.com/pcosdecoded">Get the workbook</a></Button>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-20">
          <div className="order-2 max-w-2xl lg:order-1">
            <p className="eyebrow">A practical PCOS health & wellness workbook for women</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-primary sm:text-6xl lg:text-7xl">PCOS DECODED</h1>
            <p className="mt-4 font-display text-2xl leading-tight text-primary/85 sm:text-3xl">Understand your PCOS.<br />Organize your health.<br />Take your next step with confidence.</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8">PCOS can feel confusing. Your periods may change, symptoms can overlap, internet advice can contradict itself, and you may not know what to ask your healthcare provider.</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8">PCOS DECODED gives you one practical place to understand the basics, track what matters and prepare for more informed health conversations.</p>
            <div className="mt-7 flex items-end gap-3">
              <div><p className="eyebrow">Launch price</p><p className="mt-1 font-display text-5xl text-primary">₦9,900</p></div>
              <p className="pb-1 text-sm text-muted-foreground">Regular price: <span className="line-through">₦14,900</span></p>
            </div>
            <div className="mt-6"><PurchaseButton /></div>
            <p className="mt-3 text-sm text-muted-foreground">Instant digital access after successful payment.</p>
          </div>
          <div className="order-1 mx-auto w-full max-w-[410px] lg:order-2 lg:max-w-[530px]">
            <div className="rounded-2xl bg-blush/55 p-3 sm:p-6"><img src={heroMockupAsset.url} alt="PCOS DECODED practical health and wellness workbook cover" className="aspect-[2/3] w-full rounded-xl object-cover object-top shadow-editorial" /></div>
          </div>
        </div>
      </section>

      <section aria-label="Workbook highlights" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-8 lg:grid-cols-4 lg:px-12">
          {trustItems.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex gap-3 border-border px-3 py-5 odd:border-r lg:border-r lg:px-6 lg:last:border-r-0">
              <Icon className="mt-0.5 size-5 shrink-0 text-sage" aria-hidden="true" />
              <div><p className="text-xs font-extrabold uppercase text-primary">{label}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <SectionHeading eyebrow="Information overload, organized" title="PCOS can be confusing. Your health journey doesn’t have to be." align="left" />
            <p className="mt-6 leading-7 text-foreground/80">You may have searched:</p>
            <div className="mt-4 grid gap-2 font-semibold text-primary sm:grid-cols-2">
              {["Why are my periods irregular?", "Could this be PCOS?", "Why am I gaining weight?", "Does PCOS affect fertility?", "What should I ask my doctor?", "What matters when tracking my cycle?"].map((item) => <p key={item}>“{item}”</p>)}
            </div>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Instead of more conflicting opinions, PCOS DECODED turns information overload into a structured personal health workbook.</p>
            <Button asChild variant="outline" className="mt-7 rounded-full px-6 font-bold"><a href="#preview">See what’s inside <ArrowRight aria-hidden="true" /></a></Button>
          </div>
          <img src={preview5.url} alt="PCOS myths versus facts workbook page" className="mx-auto w-full max-w-[500px] rounded-xl border border-border shadow-editorial" />
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-extrabold uppercase text-peach">More than an ebook</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">A practical health navigation toolkit.</h2></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-primary-foreground/20 md:grid-cols-3">
            {[
              [BookOpen, "Learn", "Understand PCOS, symptoms, cycles, fertility, treatment considerations and common misconceptions."],
              [ClipboardCheck, "Track", "Use practical worksheets and trackers to organize relevant observations and patterns."],
              [MessageCircleQuestion, "Prepare", "Prepare better questions and information for conversations with your healthcare provider."],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof BookOpen;
              return <article key={title as string} className="bg-primary p-7 sm:p-9"><FeatureIcon className="size-7 text-peach" aria-hidden="true" /><h3 className="mt-5 font-display text-3xl">{title as string}</h3><p className="mt-3 leading-7 text-primary-foreground/75">{text as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="Inside your workbook" title="What’s inside PCOS DECODED?" copy="Eight focused areas help you move from uncertainty to a clearer, organized next step." />
          <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {foundations.map(([title, text], index) => (
              <article key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border py-6">
                <span className="font-display text-2xl text-sage">0{index + 1}</span><div><h3 className="font-bold uppercase text-primary">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preview" className="scroll-mt-6 border-y border-border bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Workbook preview" title="This is a workbook you can actually use." copy="Learn it. Track it. Write it down. Take it with you to your next healthcare conversation." />
          <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
            {previews.map((item) => (
              <figure key={item.label} className="w-[84vw] max-w-[390px] shrink-0 snap-center overflow-hidden rounded-lg border border-border bg-background sm:w-auto sm:max-w-none">
                <img src={item.src} alt={`${item.label} page from PCOS DECODED`} loading="lazy" className="aspect-[3/4] w-full object-cover object-top" />
                <figcaption className="border-t border-border p-5"><p className="font-display text-2xl text-primary">{item.label}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p></figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">A closer look at some of the practical tools inside PCOS DECODED.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="A simple rhythm" title="How you’ll use PCOS DECODED" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Learn", "Read through the educational sections at your own pace."],
              ["02", "Track", "Record relevant observations and patterns in the worksheets."],
              ["03", "Prepare", "Organize questions before speaking with your healthcare provider."],
              ["04", "Review", "Return as your understanding and health conversations develop."],
            ].map(([number, title, text]) => <article key={number} className="border-t-2 border-sage pt-5"><span className="font-display text-3xl text-sage">{number}</span><h3 className="mt-3 font-display text-3xl text-primary">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-blush/45 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr]">
          <div><SectionHeading eyebrow="Made for real questions" title="PCOS DECODED is for you if…" align="left" /><ul className="mt-8 space-y-4">{audience.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul></div>
          <div className="border-l-4 border-primary bg-card p-7 sm:p-9"><ShieldCheck className="size-8 text-sage" aria-hidden="true" /><h3 className="mt-5 font-display text-3xl text-primary">What PCOS DECODED does not do</h3><ul className="mt-6 space-y-3 text-foreground/80">{["Diagnose PCOS", "Replace a doctor", "Prescribe medication", "Tell you to start or stop medication", "Guarantee pregnancy or fertility outcomes", "Replace individualized medical care"].map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true">•</span>{item}</li>)}</ul><p className="mt-6 font-bold leading-7 text-primary">It helps you become more informed and better organized—not replace your healthcare professional.</p></div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="Main workbook + 3 launch bonuses" title="Everything you get with PCOS DECODED" />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <article className="border-2 border-primary bg-card p-7 sm:p-9"><div className="flex items-start justify-between gap-4"><BookOpen className="size-8 text-sage" aria-hidden="true" /><span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">₦14,900 value</span></div><p className="mt-6 eyebrow">Main product</p><h3 className="mt-2 font-display text-3xl text-primary">PCOS DECODED</h3><p className="mt-3 leading-7 text-muted-foreground">50-page digital PCOS health and wellness workbook.</p></article>
            <div className="grid gap-4">
              {[
                [MessageCircleQuestion, "Bonus #1", "Doctor Appointment Question Sheet", "Organize the questions you want to discuss with your healthcare provider."],
                [ClipboardCheck, "Bonus #2", "Quick PCOS Symptom & Cycle Tracker", "A simplified tracking resource for quick everyday use."],
                [ListChecks, "Bonus #3", "PCOS Action Checklist", "A practical checklist for organizing your next steps."],
              ].map(([Icon, bonus, title, text]) => { const BonusIcon = Icon as typeof BookOpen; return <article key={bonus as string} className="flex gap-4 border border-border bg-card p-5"><BonusIcon className="mt-1 size-6 shrink-0 text-sage" aria-hidden="true" /><div><p className="eyebrow">{bonus as string}</p><h3 className="mt-1 font-bold text-primary">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text as string}</p></div></article>; })}
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="scroll-mt-6 bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr]">
          <img src={offerMockupAsset.url} alt="PCOS DECODED digital workbook" className="mx-auto w-full max-w-[330px] rounded-xl shadow-editorial" />
          <div>
            <p className="text-xs font-extrabold uppercase text-peach">Introductory launch offer</p><h2 className="mt-4 font-display text-5xl leading-tight">Get the complete workbook and all 3 bonuses.</h2>
            <div className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-2"><span className="font-display text-6xl">₦9,900</span><span className="pb-2 text-primary-foreground/65 line-through">₦14,900</span><span className="mb-1 rounded-full bg-peach px-3 py-1 text-xs font-extrabold uppercase text-primary">Save ₦5,000</span></div>
            <Button size="lg" className="mt-8 h-14 w-full rounded-full bg-primary-foreground text-base font-extrabold text-primary shadow-cta hover:bg-primary-foreground/90" onClick={() => window.alert("Add your Selar checkout link to activate purchase.")}>GET PCOS DECODED — ₦9,900 <ArrowRight aria-hidden="true" /></Button>
            <p className="mt-3 text-center text-sm text-primary-foreground/70">Digital product • Instant access • Personal-use licence</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-peach/40 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 px-5 text-center sm:px-8 lg:flex-row lg:text-left"><div><p className="eyebrow">Introductory launch pricing</p><h2 className="mt-3 font-display text-3xl text-primary">Get all 3 bonuses while the ₦9,900 offer is available.</h2><p className="mt-2 text-sm text-muted-foreground">Regular price: ₦14,900. No fake countdown—just genuine launch-period pricing.</p></div><PurchaseButton label="GET THE LAUNCH OFFER" /></div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8"><div className="border border-sage bg-mint/60 p-7 sm:p-10"><div className="flex items-center gap-3"><Stethoscope className="size-7 text-primary" aria-hidden="true" /><p className="eyebrow text-primary">Important health notice</p></div><h2 className="mt-5 font-display text-4xl text-primary">Education supports care. It does not replace it.</h2><div className="mt-5 space-y-4 leading-7 text-foreground/85"><p>PCOS DECODED is an educational and health-navigation resource. It is not intended to diagnose, treat, cure or prevent any medical condition and does not replace consultation with a qualified healthcare professional.</p><p>Do not start, stop or change medications or treatment based solely on this workbook. If you have concerning, severe, persistent or worsening symptoms, seek appropriate medical care. For emergencies, seek urgent medical attention.</p></div></div></div>
      </section>

      <section className="border-y border-border bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8"><SectionHeading eyebrow="Questions, answered" title="Before you get started" /><Accordion type="single" collapsible className="mt-10 border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="py-6 text-left text-base font-bold text-primary hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-6 text-base leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]"><img src={logoAsset.url} alt="Global Women’s Health & Wellness Network" className="w-full max-w-md mix-blend-multiply" /><div><p className="eyebrow">Created with women’s health in mind</p><h2 className="mt-4 font-display text-4xl text-primary">Important health information, made easier to navigate.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">PCOS DECODED is a health education initiative from Global Women’s Health & Wellness Network, created to make women’s-health information easier to understand, organize and navigate.</p><div className="mt-6 space-y-2 text-sm"><a className="block font-semibold text-primary underline decoration-sage underline-offset-4" href="mailto:globalwomenshealthwellnessnet@gmail.com">globalwomenshealthwellnessnet@gmail.com</a><a className="block font-semibold text-primary underline decoration-sage underline-offset-4" href="https://wa.me/2348025639533">WhatsApp: +234 802 563 9533</a></div></div></div>
      </section>

      <section className="bg-blush/60 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8"><Sparkles className="mx-auto size-8 text-sage" aria-hidden="true" /><h2 className="mt-5 font-display text-4xl leading-tight text-primary sm:text-5xl">Ready to start understanding your PCOS better?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-foreground/75">Give yourself a clearer, more organized way to learn, track and prepare for better healthcare conversations.</p><p className="mt-7 font-display text-5xl text-primary">₦9,900</p><p className="mt-1 text-sm text-muted-foreground">Regular price: <span className="line-through">₦14,900</span></p><div className="mt-7"><PurchaseButton /></div><p className="mt-3 text-sm font-semibold text-primary">50-page workbook + 3 launch bonuses</p></div>
      </section>

      <section className="border-t border-border bg-card py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:px-8 lg:flex-row"><div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-bold uppercase text-primary">{[[Download, "Digital product"], [MonitorSmartphone, "Instant access"], [FileCheck2, "Personal-use licence"], [HeartPulse, "Nigerian/African relevance"]].map(([Icon, text]) => { const TrustIcon = Icon as typeof Download; return <span key={text as string} className="flex items-center gap-2"><TrustIcon className="size-4 text-sage" aria-hidden="true" />{text as string}</span>; })}</div><p className="text-center text-sm text-muted-foreground">Need help? <a href="mailto:globalwomenshealthwellnessnet@gmail.com" className="font-bold text-primary">Email us</a> or <a href="https://wa.me/2348025639533" className="font-bold text-primary">WhatsApp +234 802 563 9533</a></p></div>
      </section>

      <footer className="border-t border-border bg-background py-10"><div className="mx-auto max-w-6xl px-5 text-center text-sm leading-6 text-muted-foreground sm:px-8"><p className="font-display text-xl text-primary">PCOS DECODED</p><p className="mt-1">by Global Women’s Health & Wellness Network</p><p>An educational women’s-health resource.</p><p className="mt-5">© 2026 Global Women’s Health & Wellness Network. All rights reserved.</p></div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-editorial backdrop-blur md:hidden"><Button asChild className="h-12 w-full rounded-full font-extrabold"><a href="https://globalwomenshealthnetwork.selar.com/pcosdecoded">GET PCOS DECODED — ₦9,900 <ArrowRight aria-hidden="true" /></a></Button></div>
    </main>
  );
}
