import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
//   FaXTwitter 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  contactDetails,
  socialMedia,
} from "@/config/contactDetails";

const iconMap = {
  Phone,
  Mail,
  MessageCircle,
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  YouTube: FaYoutube,
  Twiter:FaXTwitter 
};

function ContactDetialsStrip() {
  return (
    <div className="relative z-[70] w-full border-y border-white/10 bg-gradient-to-r from-[#293033] via-[#10120d] to-[#17191d]">
      <div className="mx-auto flex min-h-[30px] w-full max-w-[1500px] items-center justify-between overflow-x-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Details */}
        <div className="flex min-w-max items-center">
          {contactDetails.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={`${item.type}-${item.label}`}
                className="flex items-center"
              >
                <Link
                  href={item.href}
                  target={
                    item.type === "whatsapp"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.type === "whatsapp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-2 px-4 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:text-primary sm:px-5"
                >
                  {Icon && (
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                    />
                  )}

                  <span className="whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>

                {index < contactDetails.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-4 w-px shrink-0 bg-white/25"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Social Media */}
        <div className="hidden min-w-max items-center sm:flex">
          {socialMedia.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center"
              >
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="group flex h-8 w-9 items-center justify-center text-white transition-all duration-300 hover:text-primary"
                >
                  {Icon && (
                    <Icon
                      size={14}
                      className="transition-all duration-300 group-hover:scale-125"
                    />
                  )}
                </Link>

                {index < socialMedia.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="h-3 w-px bg-white/20"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactDetialsStrip;