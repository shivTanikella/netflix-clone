import React from 'react';
import { Feature, OptForm } from '../components'
import {JumbotronContainer} from '../containers/jumbotron.js'
import {FooterContainer} from '../containers/footer.js'
import { FaqsContainer } from '../containers/faqs.js';
import HeaderContainer from '../containers/header.js';

export default function Home(){
    return(
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes, and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                
                <OptForm>
                    <OptForm.Input placeholder="Email address"/>
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>Ready to Watch? Enter your email to create or restart your membership.</OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
        </>
    )
}