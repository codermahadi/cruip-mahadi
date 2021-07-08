import React, {FC} from 'react';
import Layout from "../components/layout";
import Banner from "../components/partials/Banner";
import Packages from "../components/partials/Packages";

const Home: FC = () => {

    return <Layout>
        <Banner />
        <Packages />
    </Layout>
};

export default Home;
