import MainLayout from "../layout/MainLayout";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import About from "../sections/About/About";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";


function Home() {
    return (
        <MainLayout
            left={<LeftSidebar />}
            right={
                <>
                    <section id="about"><About /></section>
                    <section id="experience"><Experience /></section>
                    <section id="projects"><Projects /></section>
                </>
            }
        />
    );
}

export default Home;