import React from "react";
import "./styles.css";
import {NavBar} from "../../components/NavBar";
import {Footer} from "../../components/Footer";
import {PresentationSection} from "./components/Presentation";
import {FunctionSection} from "./components/Functions";
import {UniversitiesSection} from "./components/Universities";

export const Home = () => {

    return (
        <div>
            <NavBar/>
            <div className="content">
                <PresentationSection></PresentationSection>
                <FunctionSection></FunctionSection>
                <UniversitiesSection></UniversitiesSection>
                <Footer/>
            </div>
        </div>
    )
};

/*

            
            
            
            <TutorialSection></TutorialSection>
            <MemberShipSection></MemberShipSection>
            <FaqSection></FaqSection>
            <Footer></Footer>
*/