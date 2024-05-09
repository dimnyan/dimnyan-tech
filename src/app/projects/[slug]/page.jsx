import Projects from "@/app/_components/Projects/ProjectsData";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  // read route params
  const router = params;

  const decodedSlug = router.slug.replace(/%20/g, " ");

  const found = Projects.find((project) => project.title.includes(decodedSlug));
  const titleNew = "dimnyan | " + found.title;
  return {
    title: titleNew,
    description: found.description,
    image: found.imageUrl,
  };
}

export default function Page({ params }) {
  const router = params;

  const decodedSlug = router.slug.replace(/%20/g, " ");

  const found = Projects.find((project) => project.title.includes(decodedSlug));

  return (
    <div className="bg-slate-800 min-h-screen py-10 px-12 md:px-24">
      <div className="mx-auto max-w-screen-xl">
        <div className="py-10 flex flex-col gap-5">
          <h1 className="text-4xl text-slate-200  font-bold tracking-wider">
            {found.title}
          </h1>
          <p className="text-slate-400">Uploaded by Admin</p>
        </div>
        <div className="relative aspect-video flex-1">
          <Image
            src={found.imageUrl}
            alt={found.title}
            fill
            className="bg-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-10 my-10 justify-center">
          {found.sourceCodeLink && (
            <Link
              href={found.sourceCodeLink}
              className="font-bold text-slate-200 hover:text-orange-500 border-b border-b-orange-500 pb-1 w-fit mx-auto"
            >
              View Source Code
            </Link>
          )}
          {found.livePageLink && (
            <Link
              href={found.livePageLink}
              className="font-bold text-slate-200 hover:text-orange-500 border-b border-b-orange-500 pb-1 w-fit mx-auto"
              target="_blank"
            >
              View Live Page
            </Link>
          )}
        </div>
        <div className="text-slate-200 my-10">{found.description}</div>
        <div className="text-slate-200 flex flex-col gap-7 my-7">
          {found.features && (
            <ol className="mx-5 list-decimal">
              {found.features.map((item) => (
                <li className="py-1" key={Math.random()}>
                  {item.title}:
                  <ul className="list-disc px-5 py-2">
                    {item.list.map((list) => (
                      <li key={Math.random()}>{list}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          )}
          {found.techStack && (
            <div>
              <p>Technology Stack:</p>
              <ul className="list-disc px-5 py-2">
                {found.techStack.map((item) => (
                  <li key={Math.random()}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {found.additionalDesc && <div>{found.additionalDesc}</div>}
        </div>
      </div>
      <div className="flex justify-center py-10">
        <Link
          href="/projects"
          className="font-bold text-slate-200 hover:text-green-500 border-b border-b-green-500 pb-1 w-fit"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
