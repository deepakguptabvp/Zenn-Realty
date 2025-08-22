import { Home, Building2, MapPin, Scale, DollarSign } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Curated Luxury Properties",
  },
  {
    icon: Building2,
    title: "One Stop Real Estate Solution",
  },
  {
    icon: MapPin,
    title: "Gurgaon Local Expertise",
  },
  {
    icon: Scale,
    title: "Legal Support",
  },
  {
    icon: DollarSign,
    title: "Financial Assistance",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-[#fdfaf7] text-center">
      <h2 className="text-4xl font-bold text-[#a97142] mb-18">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto px-4">
        {features.map(({ icon: Icon, title }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#082042] text-white rounded-2xl shadow-md p-6 hover:scale-115 transition-transform"
          >
            <Icon className="w-10 h-10 mb-4 text-[#f5c16c]" />
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
