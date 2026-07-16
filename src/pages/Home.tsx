import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import App from "../App";

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const section = location.state?.scrollTo;

        if (section) {
            setTimeout(() => {
                const element = document.querySelector(section);

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                    });
                }

                // Clear the router state so refreshes don't scroll again
                navigate(".", {
                    replace: true,
                    state: null,
                });
            }, 50);
        }
    }, [location, navigate]);

    return <App />;
}