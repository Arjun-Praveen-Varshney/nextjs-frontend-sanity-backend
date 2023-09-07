import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const Slug = ({ blog, profile, contact }) => {
  const client = createClient({
    projectId: "13d8cotr",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  return (
    <>
      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>
          {blog.title} | {profile.title}
        </title>

        <meta property="og:title" content="Blogposts by Arjun Varshney" />

        <meta property="og:locale" content="en_IN" />

        <link rel="canonical" href="//post" />

        <meta property="og:url" content="//post" />

        <meta
          name="description"
          content="This is a wonderful blogpost page developed by Arjun Varshney."
        />

        {/* <link rel="icon" type="image/png" href="/assets/img/favicon.png" /> */}

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossOrigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossOrigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
        />
      </Head>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></Script>
      <div id="main" className="relative">
        <div className="bg-[#5540af]">
          <div>
            <div className="w-full z-50 top-0 py-3 sm:py-5 bg-primary">
              <div className="container flex items-center justify-between mx-auto">
                <div>
                  <Link href={"/"}>
                    <a>
                      <h2 className="text-white text-3xl font-bold">
                        {profile.title}
                      </h2>
                    </a>
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <ul className="flex items-center">
                    <li className="group pl-6">
                      <Link href={"/#about"}>
                        <a className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          About
                        </a>
                      </Link>

                      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                    </li>

                    <li className="group pl-6">
                      <Link href={"/#services"}>
                        <a className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Services
                        </a>
                      </Link>

                      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                    </li>

                    <li className="group pl-6">
                      <Link href={"/#portfolio"}>
                        <a className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Portfolio
                        </a>
                      </Link>

                      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                    </li>

                    {/* <li className="group pl-6">
                      <Link href={"/#clients"}>
                        <a className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Clients
                        </a>
                      </Link>

                      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                    </li> */}

                    <li className="group pl-6">
                      <Link href={"/#work"}>
                        <a className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Work
                        </a>
                      </Link>

                      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                    </li>

                    <li className="group pl-6">
                      <Link href={"/#statistics"}>
                        <a className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Statistics
                        </a>
                      </Link>

                      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                    </li>

                    <li className="group pl-6">
                      <Link href={"/#blog"}>
                        <a className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Blog
                        </a>
                      </Link>

                      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                    </li>

                    <li className="group pl-6">
                      <Link href={"/#contact"}>
                        <a className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Contact
                        </a>
                      </Link>

                      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                    </li>
                  </ul>
                </div>
                <div className="block lg:hidden">
                  <button>
                    <i className="bx bx-menu text-4xl text-white"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
          </div>
        </div>
        <div>
          <div className="container py-6 md:py-10">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                  {blog.title}
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img
                      src="/ARJUN.png"
                      className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                      alt="author image"
                    />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">
                      By {profile.name}
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                      {blog.createdAt}
                    </span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
                <h2 id="lorem-ipsum-dolor-sit-amet">{blog.metadesc}</h2>

                <PortableText
                  // Pass in block content straight from Sanity.io
                  content={blog.content}
                  projectId="13d8cotr"
                  dataset="production"
                  // Optionally override marks, decorators, blocks, etc. in a flat
                  // structure without doing any gymnastics
                  serializers={{
                    h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                    li: ({ children }) => (
                      <li className="special-list-item">{children}</li>
                    ),
                  }}
                />
              </div>
              {/* <div className="flex pt-10">
                <Link href="/">
                  <a className="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20">
                    Frontend
                  </a>
                </Link>
                <Link href="/">
                  <a className="ml-2 block rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20">
                    Design
                  </a>
                </Link>
              </div> */}
              <div className="mt-10 flex justify-between border-t border-lila py-12">
                <Link href="/#blog">
                  <a className="flex items-center">
                    <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                    <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                      Previous Post
                    </span>
                  </a>
                </Link>
                <Link href="/#blog">
                  <a className="flex items-center">
                    <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                      Next Post
                    </span>
                    <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                  </a>
                </Link>
              </div>
              <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                  <img
                    src={builder.image(profile.image).url()}
                    className="rounded-full shadow"
                    alt="author image"
                  />
                </div>
                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                  <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                    {profile.name}
                  </h3>
                  <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                    {profile.about}
                  </p>
                  <div className="flex items-center justify-center pt-5 md:justify-start">
                    <Link href={contact.youtubechannelurl}>
                      <a>
                        <i className="bx bxl-youtube text-2xl text-primary hover:text-yellow"></i>
                      </a>
                    </Link>
                    <Link href={contact.telegramurl}>
                      <a className="pl-4">
                        <i className="bx bxl-telegram text-2xl text-primary hover:text-yellow"></i>
                      </a>
                    </Link>
                    <Link href={contact.whatsappurl}>
                      <a className="pl-4">
                        <i className="bx bxl-whatsapp text-2xl text-primary hover:text-yellow"></i>
                      </a>
                    </Link>
                    <Link href={contact.instagramurl}>
                      <a className="pl-4">
                        <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, {profile.title}.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <Link href={contact.youtubechannelurl}>
                <a>
                  <i className="bx bxl-youtube text-2xl text-white hover:text-yellow"></i>
                </a>
              </Link>
              <Link href={contact.telegramurl}>
                <a className="pl-4">
                  <i className="bx bxl-telegram text-2xl text-white hover:text-yellow"></i>
                </a>
              </Link>
              <Link href={contact.whatsappurl}>
                <a className="pl-4">
                  <i className="bx bxl-whatsapp text-2xl text-white hover:text-yellow"></i>
                </a>
              </Link>
              <Link href={contact.instagramurl}>
                <a className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const client = createClient({
    projectId: "13d8cotr",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type=='blog' && slug.current=='${slug}'][0]`;
  const blog = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  const contactQuery = `*[_type == "contact"][0]`;
  const contact = await client.fetch(contactQuery);
  return { props: { blog, profile, contact } };
}
