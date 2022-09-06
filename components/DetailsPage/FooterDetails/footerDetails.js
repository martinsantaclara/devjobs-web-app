import { useDeviceContext } from '../../../context/StateContext';
import { Position } from '../../LandingPage/Offer/offerStyles';
import { ApplyButton } from '../BodyDetails/bodyDetailsStyles';
import {
    DigitalInc,
    FooterDetailsContainer,
    FooterDetailsTablet,
    FooterDetailsWrapper,
} from './footerDetailsStyles';

export const FooterDetails = ({ offer }) => {
    const { mobile } = useDeviceContext();
    return (
        <FooterDetailsContainer fluid mobile={mobile}>
            <FooterDetailsWrapper mobile={mobile}>
                {!mobile && (
                    <FooterDetailsTablet>
                        <Position details footer mobile={mobile}>
                            {offer.position}
                        </Position>
                        <DigitalInc>So Digital Inc</DigitalInc>
                    </FooterDetailsTablet>
                )}
                <ApplyButton fluid mobile={mobile}>
                    <a href={offer.apply}>Apply Now</a>
                </ApplyButton>
            </FooterDetailsWrapper>
        </FooterDetailsContainer>
    );
};
