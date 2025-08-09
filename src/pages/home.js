import React from 'react';
import {JumbotronContainer} from '../containers/jumbotron.js'
import {FooterContainer} from '../containers/footer.js'
import { FaqsContainer } from '../containers/faqs.js';
import HeaderContainer from '../containers/header.js';

export default function Home(){
    return(
        <>
        <HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </HeaderContainer>
        </>
    )
}