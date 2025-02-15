import BlurFade from "../magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/greenmind.jpg",
    title: "GreenmindAi",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/blog.png",
    title: "my-blog",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/spotify.png",
    title: "spotify redesigned",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/features.jpg",
    title: "features sec",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/interviewai.png",
    title: "Ai-Interview",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/oldport.png",
    title: "Old Portfolio",
    link: "",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
