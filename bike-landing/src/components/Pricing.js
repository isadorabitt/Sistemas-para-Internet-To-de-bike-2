import React from 'react';
import { Button } from './Button';
import { MdOutlinePedalBike, MdElectricBike, MdPedalBike } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements';

export const Pricing = () => {
    return (
        <IconContext.Provider value={{color: '#a9b3c1', size: 50}}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Nossos Planos</PricingHeading>
                    <PricingContainer>
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <MdOutlinePedalBike />
                                </PricingCardIcon>
                                <PricingCardPlan>Avulso</PricingCardPlan>
                                <PricingCardCost>R$3,50</PricingCardCost>

                                <PricingCardFeatures>
                                    <PricingCardFeature>Faça uma viagem de até 30 minutos.</PricingCardFeature>
                                    <PricingCardFeature>Minuto adicional: R$0,30.</PricingCardFeature>
                                </PricingCardFeatures>

                                <Button primary small round>Pedale Agora</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <MdElectricBike />
                                </PricingCardIcon>
                                <PricingCardPlan>Diário</PricingCardPlan>
                                <PricingCardCost>R$15,00</PricingCardCost>

                                <PricingCardFeatures>
                                    <PricingCardFeature>Máximo de 5 viagens de até 60 minutos por dia.</PricingCardFeature>
                                    <PricingCardFeature>Minuto adicional: R$0,20.</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary small round>Pedale Agora</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <MdPedalBike />
                                </PricingCardIcon>
                                <PricingCardPlan>Mensal</PricingCardPlan>
                                <PricingCardCost>R$30,00</PricingCardCost>

                                <PricingCardFeatures>
                                    <PricingCardFeature>Máximo de 5 viagens de até 60 minutos por dia.</PricingCardFeature>
                                    <PricingCardFeature>Minuto adicional: R$0,20.</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary small round>Pedale Agora</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    );
}