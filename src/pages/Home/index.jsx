import React from "react";
import "./styles.css";
import {NavBar} from "../../components/NavBar";
import {Footer} from "../../components/Footer";
import {PresentationSection} from "./components/Presentation";
import {FunctionSection} from "./components/Functions";
import {UniversitiesSection} from "./components/Universities";
import {TutorialSection} from "./components/Tutorial";

export const Home = () => {

    return (
        <div>
            <NavBar/>
            <div className="content">
                <PresentationSection></PresentationSection>
                <FunctionSection></FunctionSection>
                <UniversitiesSection></UniversitiesSection>
                <TutorialSection></TutorialSection>
                <Footer/>
            </div>
        </div>
    )
};

/*

            
            
            
            
            <MemberShipSection></MemberShipSection>
            <FaqSection></FaqSection>
            <Footer></Footer>
*/