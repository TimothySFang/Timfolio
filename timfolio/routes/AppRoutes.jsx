import { createBrowserRouter } from "react-router-dom";
import PhotographyPage from "@/pages/Photography/PhotographyPage";
import SoftwarePage from "@/pages/Software/SoftwarePage";
import HomePage from "@/pages/Home/HomePage";

const router = createBrowserRouter([
    {
        path: "/photography",
        element: <PhotographyPage />,
    },
    {
        path: "/software",
        element: <SoftwarePage />,
    },
    {
        path:"/",
        element:<HomePage />
    }
]);

export default router;