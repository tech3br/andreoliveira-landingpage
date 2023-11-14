import Image from "next/image";
import Link from "next/link";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutTubeIcon,
} from "@/components/social-icons";

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center items-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/avatar.jpg"
              alt="Lucas Nhimi"
              width={800}
              height={800}
              quality="100"
              priority={true}
              className="aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            @andreoliveira
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            doloribus, minus maxime quos consequuntur pariatur unde voluptatibus
            atque laudantium qui facilis, eius sunt, eligendi nemo aspernatur
            eveniet ipsam! Nulla, possimus.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <SocialLink
              href="https://instagram.com/lucasnhimi"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/lucasnhimi"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/lucasnhimi"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://youtube.com/lucasnhimi"
              icon={YoutTubeIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
