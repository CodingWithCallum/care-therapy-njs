import Link from "next/link";
import "../globals.css";
import 'material-symbols';

const iconRender = (val: string) => {
switch (val) {
    case "exercise-ico":
        return (
                <span className="material-symbols-rounded">fitness_center</span>
        )
    case "stretch-ico":
        return (
            <span className="material-symbols-rounded">sports_gymnastics</span>
        )
    case "sports-ico":
        return (
            <span className="material-symbols-rounded">sports_rugby</span>
        )
    case "injury-ico":
        return (
            <span className="material-symbols-rounded">personal_injury</span>
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
<article className="h-full p-4 bg-base-200 rounded-lg space-y-3" aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}>
    <div className="flex items-center gap-3">
      <span className={`p-3 flex w-max rounded-full text-white ${color}`} aria-hidden="true">
        {iconRender(icon)}
      </span>
      <h3 id={title.replace(/\s+/g, "-").toLowerCase()} className="text-xl font-semibold capitalize">
        {title}
      </h3>
    </div>
    <p className="text-md">
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
    icon: "exercise-ico",
    color: "bg-sky-600"
},
{
    id: 2,
    title: "Assisted Stretch \& Flexibility Therapy",
    description: "Hands-on sessions designed to improve flexibility, posture, and overall mobility using assisted stretching techniques.",
    icon: "stretch-ico",
    color: "bg-indigo-600"
},
{
    id: 3,
    title: "Sports Performance \& Injury Prevention Therapy",
    description: "Tailored programs for athletes and active individuals of all ages, focusing on enhancing performance, preventing injuries, and optimizing recovery.",
    icon: "sports-ico",
    color: "bg-orange-600"
},
{
    id: 4,
    title: "Injury Recovery Support",
    description: "Exercise-based support for individuals recovering from surgery, injury, or extended inactivity. This includes personalized rehabilitation plans to restore function and mobility.",
    icon: "injury-ico",
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
                    <div className="flex justify-center lg:justify-start">
                        <Link href="/OurServices" className="btn btn-primary">
                            More About Our Services
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