import Layout from "../components/layout";
import React from "react";
import HeroHome from "../components/partials/HeroHome";
import FeaturesHome from '../components/partials/Features';
import FeaturesBlocks from "../components/partials/FeaturesBlocks";
import Testimonials from "../components/partials/Testimonials";
import Newsletter from "../components/partials/Newsletter";

export default function Home() {

    // @ts-ignore
    return (
        <Layout>
            {/*  Page sections */}
            <HeroHome/>
            <FeaturesHome/>
            <FeaturesBlocks/>
            <Testimonials/>
            <Newsletter/>
        </Layout>
    )
}
