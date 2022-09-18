import { CompanyLogo, Logo } from '../../LandingPage/Offer/offerStyles';
import {
    CompanyData,
    CompanyDetails,
    CompanySiteButton,
    CompanyWeb,
    HeaderDetailsContainer,
    HeaderDetailsContent,
    SiteButtonWrapper,
} from './headerDetailsStyles';
import {
    useStateContext,
    useDeviceContext,
} from '../../../context/StateContext';

export const HeaderDetails = ({ offer }) => {
    const webSite = `${offer.company.toLowerCase()}.com`.replaceAll(' ', '');
    const { darkMode } = useStateContext();
    const { mobile } = useDeviceContext();

    return (
        <HeaderDetailsContainer mobile={mobile}>
            <HeaderDetailsContent mobile={mobile}>
                <CompanyLogo
                    logoBackground={offer.logoBackground}
                    mobile={mobile}
                    details
                >
                    <Logo
                        company={offer.company}
                        logo={mobile ? offer.logo : offer.logoDesktop}
                    />
                </CompanyLogo>
                <CompanyData mobile={mobile}>
                    <CompanyDetails mobile={mobile}>
                        {offer.company}
                    </CompanyDetails>
                    <CompanyWeb>{webSite}</CompanyWeb>
                </CompanyData>
                <SiteButtonWrapper>
                    <CompanySiteButton
                        inverted
                        darkMode={darkMode}
                        mobile={mobile}
                        href={offer.website}
                    >
                        Company Site
                    </CompanySiteButton>
                </SiteButtonWrapper>
            </HeaderDetailsContent>
        </HeaderDetailsContainer>
    );
};
