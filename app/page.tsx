import Hero from "@/components/hero";
import OurMission from "@/components/our-mission";
import OurService from "@/components/our-service";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-start items-center">
      <Hero />
      <div className="h-px w-full bg-slate-300 mt-5" />
      <Stats />
      <OurService />
      <OurMission />
    </div>
  );
}
