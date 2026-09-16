"use client";



import { ourWorkData } from "@/config/ourWorkData";
import OurWorkHero from "./OurWorkHero";
import FeaturedProjects from "./FeaturedProjects";
import WorkStats from "./WorkStats";
import OurWorkCTA from "./OurWorkCTA";
import WorkIndustries from "./WorkIndustries";

export default function OurWork() {
  return (
    <main className="overflow-hidden bg-[#F8FAFC] text-[#1F2937]">

      {/* <OurWorkHero data={ourWorkData.hero} /> */}

      <FeaturedProjects projects={ourWorkData.projects} />

      <WorkIndustries industries={ourWorkData.industries} />

      <WorkStats stats={ourWorkData.stats} />

      <OurWorkCTA data={ourWorkData.cta} />

    </main>
  );
}