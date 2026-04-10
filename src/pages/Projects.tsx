import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { MountainSunrise } from "../components/MountainSunrise";

export function Projects() {
    return (
        <>
            <SEO
                title="Projects | Winter Plum & Co."
                description="Explore selected projects by Winter Plum & Co. Websites designed to convert and built to grow."
                url="https://winterplum.co/projects"
                keywords="web design portfolio, projects, Winter Plum, website design work, San Jose web design"
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Projects | Winter Plum & Co.",
                    },
                ]}
            />

            <main className="min-h-screen pb-20 px-6 relative">
                <section className="relative overflow-hidden min-h-[500px] flex flex-col justify-center pt-32 pb-20">
                    <MountainSunrise />

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sage/10 rounded-full blur-3xl opacity-50 -z-10" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h1 className="text-6xl md:text-7xl font-medium text-[#8c5a65] mb-6">
                            Our Work
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-[#302928]/70 max-w-2xl mx-auto leading-relaxed">
                            Websites designed to convert, and built to grow.
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 relative z-10">
                    <div className="group">
                        <div className="overflow-hidden rounded-2xl mb-6 bg-[#f4d8db]/30 aspect-[4/3] relative">
                            <img
                                src="/AAYSA Project SS.png"
                                alt="Ace Athletics Youth Soccer Academy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-serif font-medium text-[#302928] mb-2">
                            Ace Athletics Youth Soccer Academy
                        </h3>
                        <p className="text-[#302928]/60 font-light italic">
                            Full Academic-based Redesign- Increased online traffic & Sales by 23%
                        </p>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden rounded-2xl mb-6 bg-[#a3b89f]/30 aspect-[4/3] relative">
                            <img
                                src="/MF Project SS.png"
                                alt="Madeline Friedrich"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-2xl font-serif font-medium text-[#302928] mb-2">
                            Madeline Friedrich
                        </h3>
                        <p className="text-[#302928]/60 font-light italic">
                            Full filmography portfolio with a clean, elegant presentation.
                        </p>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto bg-[#302928] rounded-[3rem] p-12 md:p-20 text-center text-[#fcf6ee] relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(140,90,101,0.3),transparent_70%)]" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-medium mb-8">
                            Want results like this? Let&apos;s build your site.
                        </h2>
                        <Link
                            to="/contact"
                            className="inline-block px-10 py-4 rounded-full bg-[#8c5a65] text-[#fcf6ee] text-sm uppercase tracking-widest hover:bg-[#6b414a] transition-all hover:scale-105"
                        >
                            Let&apos;s build your site
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}