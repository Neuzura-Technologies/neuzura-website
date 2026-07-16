import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProjectExplorer from "../components/projects/ProjectExplorer";

export default function ProjectsPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">

            <Navbar />

            <main className="pt-24">

                <section className="py-16 bg-white border-b">

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
                            Innovation Portfolio
                        </span>

                        <h1 className="mt-3 text-5xl font-bold text-slate-900">
                            All Projects
                        </h1>

                        <p className="mt-5 max-w-3xl text-lg text-slate-600">
                            Explore our research, software, robotics, artificial intelligence,
                            embedded systems, mobile applications, web applications,
                            intellectual property, and innovation projects.
                        </p>

                    </div>

                </section>

                <ProjectExplorer />

            </main>

            <Footer />

        </div>
    );
}