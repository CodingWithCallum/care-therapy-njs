import Link from "next/link";
import "../globals.css";

const iconRender = (val: string) => {
switch (val) {
    case "default-ico":
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
            </svg>
        )
    default:
        return <>No Icon</>;
}
}
type FeatureItemProps = {
    title: string;
    description: string;
    icon: string;
    color: string;
};

const FeatureItem = ({ title, description, icon, color }: FeatureItemProps) => {
return (
<article className="h-full p-4 bg-gray-100 rounded-lg space-y-3" aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}>
    <div className="flex items-center gap-3">
      <span className={`p-3 flex w-max rounded-full text-white ${color}`} aria-hidden="true">
        {iconRender(icon)}
      </span>
      <h3 id={title.replace(/\s+/g, "-").toLowerCase()} className="text-lg font-semibold capitalize text-gray-900">
        {title}
      </h3>
    </div>
    <p className="text-sm text-gray-700">
      {description}
    </p>
  </article>
)
}
const features = [
{
    id: 1,
    title: "Adapted Exercise Therapy",
    description: "Personalized programs designed for individuals with physical disabilities, chronic health conditions, age-related limitations, or those requiring rehabilitative support.",
    icon: "default-ico",
    color: "bg-sky-600"
},
{
    id: 2,
    title: "Assisted Stretch \& Flexibility Therapy",
    description: "Hands-on sessions designed to improve flexibility, posture, and overall mobility using assisted stretching techniques.",
    icon: "default-ico",
    color: "bg-indigo-600"
},
{
    id: 3,
    title: "Sports Performance \& Injury Prevention Therapy",
    description: "Tailored programs for athletes and active individuals of all ages, focusing on enhancing performance, preventing injuries, and optimizing recovery.",
    icon: "default-ico",
    color: "bg-orange-600"
},
{
    id: 4,
    title: "Injury Recovery Support",
    description: "Exercise-based support for individuals recovering from surgery, injury, or extended inactivity. This includes personalized rehabilitation plans to restore function and mobility.",
    icon: "default-ico",
    color: "bg-rose-600"
},
]
 
const Features = () => {
return (
    <section className="py-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
                <div className="flex-1 pt-5 lg:py-8 space-y-8 max-w-2xl">
                    <h2 className="text-4xl font-semibold text-gray-900">
                        Our Services
                    </h2>
                    <p className="text-gray-700 max-w-md">
                        Our approach is rooted in the belief that exercise is a powerful tool for enhancing physical function, independence, and quality of life regardless of age, ability, or condition.
                    </p>
                    <div className="flex">
                        <Link href="/OurServices" className="bg-teal-600 text-white border border-teal-500 rounded-full px-6 h-12 flex w-max items-center">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="lg:w-[55%] xl:w-2/3 lg:items-center grid sm:grid-cols-2 xl:grid-cols-2 gap-4" role="list">
                    {
                        features.map(feature => (
                            <FeatureItem key={feature.id} {...feature} />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
)
}
export default Features