"use client";

import { Separator } from "@/components/ui/separator";
import { site } from "@/data/site";

/** Copy block for orange contact section — light text on primary bg */
const ContactInfo = () => {
  return (
    <div className="flex flex-col md:gap-10 gap-8 text-white">
      <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-left-10 duration-1000 ease-in-out fill-mode-both">
        <div className="flex gap-3 items-center">
          <div className="w-2 h-2 rounded-full bg-white" />
          <p className="text-base font-medium text-white/90 !m-0">
            Start your project
          </p>
        </div>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white !m-0">
          Reach our team
        </p>
        <p className="text-base sm:text-lg text-white/85 max-w-md !m-0 leading-relaxed">
          We typically respond within one business day. Call for a free consult
          or tell us about your project below.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <div className="flex flex-col gap-1 min-w-[8rem]">
          <p className="text-sm font-medium text-white/70 !m-0">Office</p>
          <a
            href={`tel:${site.phone.officeTel}`}
            className="text-base font-semibold text-white hover:text-white/90 underline-offset-2 hover:underline"
          >
            {site.phone.office}
          </a>
        </div>
        <div className="flex flex-col gap-1 min-w-[8rem]">
          <p className="text-sm font-medium text-white/70 !m-0">Mobile</p>
          <a
            href={`tel:${site.phone.mobileTel}`}
            className="text-base font-semibold text-white hover:text-white/90 underline-offset-2 hover:underline"
          >
            {site.phone.mobile}
          </a>
        </div>
        <div className="flex flex-col gap-1 min-w-[10rem]">
          <p className="text-sm font-medium text-white/70 !m-0">Email</p>
          <a
            href={`mailto:${site.email}`}
            className="text-base font-semibold text-white hover:text-white/90 underline-offset-2 hover:underline break-all"
          >
            {site.email}
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-1 animate-in fade-in slide-in-from-left-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <p className="text-sm font-medium text-white/70 !m-0">Location</p>
        <p className="text-base font-semibold text-white !m-0">
          {site.location}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-white/70 !m-0">Business hours</p>
        <p className="text-base font-medium text-white !m-0">
          {site.hours.weekdays}
        </p>
        <p className="text-base font-medium text-white !m-0">
          {site.hours.saturday}
        </p>
        <p className="text-base font-medium text-white/75 !m-0">
          {site.hours.sunday}
        </p>
      </div>

      <Separator
        orientation="horizontal"
        className="bg-white/25 data-[orientation=horizontal]:bg-white/25"
      />
      <p className="text-sm text-white/85 !m-0">
        Mention this website for a free consultation and 5% off your next
        project.
      </p>
    </div>
  );
};

export default ContactInfo;
