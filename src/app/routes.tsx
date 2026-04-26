import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { LandingPage } from "./pages/LandingPage";
import { DemoPage } from "./pages/DemoPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "demo", Component: DemoPage },
      { path: "features", Component: FeaturesPage },
      { path: "how-it-works", Component: HowItWorksPage },
      { path: "applications", Component: ApplicationsPage },
    ],
  },
]);
