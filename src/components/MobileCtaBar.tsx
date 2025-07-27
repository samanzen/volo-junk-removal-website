import { siteData } from "@/data/siteData";
import { FiPhone, FiImage } from "react-icons/fi";

export default function MobileCtaBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-secondary shadow-lg z-50 p-2 border-t border-gray-700">
      <div className="grid grid-cols-2 gap-2">
        <a 
          href={siteData.phoneHref}
          className="flex flex-col items-center justify-center px-4 py-2 bg-primary text-white rounded-md text-center font-semibold"
        >
          <FiPhone className="mb-1" />
          <span>Call Now</span>
        </a>
        <a 
          href={siteData.smsHref}
          className="flex flex-col items-center justify-center px-4 py-2 bg-accent text-white rounded-md text-center font-semibold"
        >
          <FiImage className="mb-1" />
          <span>Text a Photo</span>
        </a>
      </div>
    </div>
  );
}
