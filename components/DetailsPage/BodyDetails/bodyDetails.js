import { useDeviceContext } from '../../../context/StateContext';
import {
    Location,
    Oval,
    OverTitle,
    Position,
    TimeAgoAndContract,
} from '../../LandingPage/Offer/offerStyles';
import {
    ApplyButton,
    BodyDetailsContainer,
    BodyDetailsHeader,
    BodyHeaderLeft,
    Description,
    ItemContent,
    ItemNumber,
    ItemNumberWrapper,
    RequirementsContent,
    RequirementsItems,
    RequirementsListItem,
    RequirementsSection,
    RequirementsTitle,
    RoleContent,
    RoleItems,
    RoleListItem,
    RoleSection,
    RoleTitle,
} from './bodyDetailsStyles';

export const BodyDetails = ({ offer }) => {
    const { mobile, desktop } = useDeviceContext();
    return (
        <BodyDetailsContainer mobile={mobile}>
            <BodyDetailsHeader mobile={mobile}>
                <BodyHeaderLeft>
                    <OverTitle details>
                        <TimeAgoAndContract>
                            {offer.postedAt}
                        </TimeAgoAndContract>
                        <Oval></Oval>
                        <TimeAgoAndContract>
                            {offer.contract}
                        </TimeAgoAndContract>
                    </OverTitle>
                    <Position details mobile={mobile}>
                        {offer.position}
                    </Position>
                    <Location>{offer.location}</Location>
                </BodyHeaderLeft>
                <ApplyButton fluid body mobile={mobile} href={offer.apply}>
                    Apply Now
                </ApplyButton>
            </BodyDetailsHeader>
            <Description>{offer.description}</Description>
            <RequirementsSection desktop={desktop}>
                <RequirementsTitle>Requirements</RequirementsTitle>
                <RequirementsContent mobile={mobile}>
                    {offer.requirements.content}
                </RequirementsContent>
                <RequirementsItems>
                    {offer.requirements.items.map((item, index) => {
                        return (
                            <RequirementsListItem key={index}>
                                {/* {item} */}
                                <Oval details></Oval>
                                <ItemContent> {item}</ItemContent>
                            </RequirementsListItem>
                        );
                    })}
                </RequirementsItems>
            </RequirementsSection>
            <RoleSection>
                <RoleTitle>What You Will Do</RoleTitle>
                <RoleContent>{offer.role.content}</RoleContent>
                <RoleItems>
                    {offer.role.items.map((item, index) => {
                        return (
                            <RoleListItem key={index}>
                                <ItemNumberWrapper>
                                    <ItemNumber>{index + 1}</ItemNumber>
                                </ItemNumberWrapper>
                                <ItemContent>{item}</ItemContent>
                            </RoleListItem>
                        );
                    })}
                </RoleItems>
            </RoleSection>
        </BodyDetailsContainer>
    );
};
