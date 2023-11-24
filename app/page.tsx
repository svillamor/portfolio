"use client";
import React from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/react";
import { WayWiser } from "@/components/waywiser";
import { BoxwoodMeans } from "@/components/boxwoodmeans";
import { Acctwo } from "@/components/accordion";
import { Vspacer } from "@/components/vspacer";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-center">
      {/*


            MADE W/ LOVE BY SAMIRA
            Thanks for being here <3


    */}

      <div className="mx-4 sm:mx-20 ">
        {/* className="container mx-auto max-w3xl text-left justify-left" */}
        <h1 className="font-bold bg-high">Samira Villamor</h1>
      </div>
      <div className="mx-4 sm:mx-20 my-4">
        <h3 className="mt-2 mb-2 md:mb-4">Product design</h3>
        <h3 className="font-medium mb-1">
          <span className="text-purp pr-1">❖</span>{" "}
          <a href="mailto:samira.villamor@gmail.com">
            samira.villamor@gmail.com
          </a>
        </h3>
        <h3 className="font-medium">
          <span className="text-purp pr-1">❖</span>{" "}
          <a href="/svillamor_resume.pdf">svillamor_resume.pdf</a>
        </h3>
      </div>

      <div className="container max-w-full overflow-x-hidden  my-4 sm:my-6">
        <section className="flex flex-col flex-wrap justify-start items-start">
          <hr
            className="shrink-0 bg-divider border-none w-full h-divider"
            role="separator"
          ></hr>
          <Acctwo />
          <hr
            className="shrink-0 bg-divider border-none w-full h-divider"
            role="separator"
          ></hr>
        </section>
      </div>
    </section>
  );
}
