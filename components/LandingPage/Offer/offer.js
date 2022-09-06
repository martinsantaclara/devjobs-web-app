import Link from 'next/link';
import { useDeviceContext } from '../../../context/StateContext';
import {
    Company,
    CompanyLogo,
    JobOffer,
    JobOfferWrapper,
    Location,
    Logo,
    Oval,
    OverTitle,
    Position,
    TimeAgoAndContract,
} from './offerStyles';

export const Offer = ({ offer }) => {
    const { mobile } = useDeviceContext();
    return (
        <JobOfferWrapper>
            <JobOffer>
                <CompanyLogo logoBackground={offer.logoBackground}>
                    <Logo logo={offer.logo} />
                </CompanyLogo>
                <OverTitle>
                    <TimeAgoAndContract>{offer.postedAt}</TimeAgoAndContract>
                    <Oval></Oval>
                    <TimeAgoAndContract>{offer.contract}</TimeAgoAndContract>
                </OverTitle>
                <Position mobile={mobile}>
                    <Link href={`/offers/${offer.id}`} passHref>
                        <a>{offer.position}</a>
                    </Link>
                </Position>
                <Company>{offer.company}</Company>
                <Location>{offer.location}</Location>
            </JobOffer>
        </JobOfferWrapper>
    );
};
