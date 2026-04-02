import Technologies from "../Technologies/Technologies"
import "./About.css"
function About() {
    return (
        <div className="about">
            <span className="rel">Développeur front-end</span> passionné par le web et les nouvelles technologies, je crée des interfaces modernes et intuitives qui améliorent l’expérience utilisateur et la performance des applications.<br />
            <br />
            Avec <span className="rel">React Native</span>, je crée des applications mobiles multiplateformes fluides. Curieux et proactif, j’explore toujours de nouveaux outils pour apporter rapidement de la <span className="rel">valeur</span>.<br />
            <br />
            Expérimenté en React Native, je développe également des applications mobiles multiplateformes fluides et fonctionnelles. Curieux et proactif, je cherche toujours à explorer de nouveaux outils pour apporter rapidement de la valeur.<br />
            <br />
            Motivé, rigoureux et créatif, je suis prêt à relever des défis et contribuer à des projets innovants, en transformant les idées en produits concrets.
            <Technologies />
        </div>
    )
}

export default About