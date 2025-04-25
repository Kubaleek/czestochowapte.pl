import { Pages } from "@/types/pages";
import { Post } from "@/types/posts";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SlugContent({ page, posts, content }: { page?: Pages; posts?: Post; content: any }) {
  return (
    <section className="col-span-12 md:col-span-8 xl:col-span-9 bg-white gap-2 flex flex-col py-[30px] px-[20px]">
      <div>
        <h2 className="text-lg font-bold text-[#17822e] break-words">{page?.title || posts?.title}</h2>
        <h1 className="text-xl md:text-3xl font-bold">{page?.title || posts?.title}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <a href={"https://twitter.com/PTE_ZK"} className="bg-[#17822e] p-2 text-white inline-block rounded shadow justify-center items-center" aria-label="twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
        <a href={"https://www.facebook.com/profile.php?id=100064391691386"} className="bg-[#17822e] p-2 text-white inline-block rounded shadow justify-center items-center" aria-label="facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href={"https://www.linkedin.com/company/polskie-towarzystwo-ekonomiczne/?originalSubdomain=pl"} className="bg-[#17822e] p-2 text-white inline-block rounded shadow justify-center items-center" aria-label="linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
      <div className="content flex flex-col gap-3 mt-3">
        <BlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) => <p className="text-sm leading-6 font-normal text-justify">{children}</p>,
            link: ({ children, url }) => (
              <a href={url} className="text-green-800 hover:underline">
                {children}
              </a>
            ),
            list: (props) => {
              if (props.format === "ordered") {
                return <ol className="pl-4">{props.children}</ol>;
              }

              return <ul className="pl-4">{props.children}</ul>;
            },
            "list-item": (props) => <li className="m-1 text-sm leading-6 font-normal">{props.children}</li>,
            image: (props) => <Image src={props.image.url} width={props.image.width} className="object-cover" height={props.image.height} alt={props.image.alternativeText || ""} />,
            heading: ({ level, children }) => {
              switch (level) {
                case 1:
                  return <h1 className="font-bold text-2xl">{children}</h1>;
                case 2:
                  return <h2 className="font-bold text-2xl">{children}</h2>;
                case 3:
                  return <h3 className="font-bold text-xl">{children}</h3>;
                case 4:
                  return <h4 className="font-bold text-lg">{children}</h4>;
                case 5:
                  return <h5 className="font-bold text-lg">{children}</h5>;
                case 6:
                  return <h6 className="font-bold text-lg">{children}</h6>;
              }
            },
          }}
        />
      </div>
    </section>
  );
}
