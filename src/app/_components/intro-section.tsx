"use client";
import { track } from "@vercel/analytics";

import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function IntroSection() {
  return (
    <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative">
      <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
        <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
          📅 1ª Turma - 20 de Janeiro de 2023
          <ModeToggle />
        </span>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl">
          Ato da <span className="text-primary">Evolução</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Evolua com força, evolua com propósito.
          <br />
          Ato da Evolução: sua realidade hoje!
        </p>
        <div className="space-x-4">
          <a
            href="#investment"
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            onClick={() => {
              track("enrollment", { location: "intro" });
            }}
          >
            Invistir no meu crescimento
          </a>
          <a
            href="#feature"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            onClick={() => {
              track("features");
            }}
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
