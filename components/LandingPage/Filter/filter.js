import React, { useState, useEffect, useRef } from 'react';
import {
    FilterContainer,
    FilterForm,
    Input,
    SearchIcon,
    LocationIcon,
    InputFilter,
    VLine,
    DesktopRightFilter,
    FullTime,
    FulltimeCheck,
    FullTimeText,
    MobileRightFilter,
    FilterIcon,
    SubmitButton,
    BgMobileFilter,
    MobileFilter,
    HLine,
    HiddenTitle,
    InputRightBar,
    HiddenLocation,
    InputTitleBar,
    InputLocationBar,
} from './filterStyles';
import { FilterIconSvg, SearchIconSvg } from './filterIcons';
import { useForm } from 'react-hook-form';
import { Container } from '../../../styles/globals';
import {
    useStateContext,
    useFilterContext,
    useDeviceContext,
} from '../../../context/StateContext';

function useOutsideAlerter(ref, setMobileFilter, setLocationInputFocus) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setMobileFilter(false);
                setLocationInputFocus(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}

// const Filter = ({ setPageBack }) => {
const Filter = () => {
    const { darkMode } = useStateContext();
    const {
        setTitle,
        setLocation,
        fullTime,
        setFullTime,
        checked,
        setChecked,
        mirrorTitle,
        setMirrorTitle,
        mirrorLocation,
        setMirrorLocation,
        refLocation,
        clear,
        setClear,
        page,
        setPage,
        setPageBack,
    } = useFilterContext();

    const { mobile, desktop } = useDeviceContext();

    const [mobileFilter, setMobileFilter] = useState(false);
    // const [checked, setChecked] = useState(fullTime);
    const [checkHover, setCheckHover] = useState(false);

    const [titleWidth, setTitleWidth] = useState(0);
    const [titleInputHover, setTitleInputHover] = useState(false);
    const [titleInputFocus, setTitleInputFocus] = useState(false);
    const refTitle = useRef('');

    const [locationWidth, setLocationWidth] = useState(0);
    const [locationInputHover, setLocationInputHover] = useState(false);
    const [locationInputFocus, setLocationInputFocus] = useState(false);
    const refHiddenLocation = useRef('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        if (window.sessionStorage.getItem('actualPage') !== null) {
            window.sessionStorage.removeItem('actualPage');
        }
        setTitle(mirrorTitle);
        setLocation(mirrorLocation);
        setFullTime(checked);
        setPageBack(page);
        setPage(0);
        setMobileFilter(false);
    };
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setMobileFilter, setLocationInputFocus);

    useEffect(() => {
        if (refTitle.current) {
            setTitleWidth(refTitle.current.offsetWidth);
        }
        if (refHiddenLocation.current) {
            setLocationWidth(refHiddenLocation.current.offsetWidth);
        }
    }, [mirrorTitle, mirrorLocation]);

    useEffect(() => {
        if (clear && refLocation.current) {
            refLocation.current.value = '';
            setMirrorLocation('');
            setClear(false);
        } else if (mirrorLocation !== '' && refLocation.current) {
            refLocation.current.value = mirrorLocation;
        }
    });

    const handleTitleInputFocus = () => {
        setTitleInputHover(false);
        // setTitleWidth(0);
        setTitleInputFocus(true);
    };

    const handleTitleInputHover = () => {
        if (!titleInputFocus && !locationInputFocus) {
            setTitleInputHover(true);
            if (refTitle.current) {
                setTitleWidth(refTitle.current.offsetWidth);
            }
        }
    };

    const handleTitleInputBlur = () => {
        setTitleInputFocus(false);
        // setTitleWidth(0);
    };

    const handleTitleMouseOut = () => {
        setTitleInputHover(false);
        // setTitleWidth(0);
    };

    const handleLocationInputFocus = () => {
        setLocationInputHover(false);
        setLocationInputFocus(true);
        // setLocationWidth(0);
    };

    const handleLocationInputBlur = () => {
        setLocationInputFocus(false);
        setMirrorLocation(refLocation.current.value);
        // setLocationWidth(0);
    };

    const handleLocationInputHover = () => {
        if (!locationInputFocus && mirrorLocation !== '') {
            setLocationInputHover(true);
            if (refHiddenLocation.current) {
                setLocationWidth(refHiddenLocation.current.offsetWidth);
            }
        }
    };

    const handleClickFilterIcon = () => {
        setMobileFilter(true);
        if (mirrorLocation !== '' && refLocation.current) {
            refLocation.current.value = mirrorLocation;
        }
    };

    const handleLocationMouseOut = () => {
        setLocationInputHover(false);
        // setLocationWidth(0);
    };

    const handleFulltimeMouseEnter = () => {
        if (!locationInputFocus) setCheckHover(true);
    };

    return (
        <FilterContainer title="Filter Section">
            <FilterForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    onMouseOver={handleTitleInputHover}
                    onMouseOut={handleTitleMouseOut}
                >
                    {!mobile && (
                        <SearchIcon xlScreen>
                            <SearchIconSvg xlScreen></SearchIconSvg>
                        </SearchIcon>
                    )}
                    <InputFilter
                        {...register('title')}
                        mobile={mobile}
                        placeAttr={
                            desktop
                                ? 'Filter by title, companies, expertise....'
                                : ''
                        }
                        value={mirrorTitle}
                        onChange={(e) => setMirrorTitle(e.target.value)}
                        onFocus={handleTitleInputFocus}
                        onBlur={handleTitleInputBlur}
                    />
                    <HiddenTitle ref={refTitle}>{mirrorTitle}</HiddenTitle>

                    {titleInputHover && titleWidth !== 0 && (
                        <InputRightBar
                            mobile={mobile}
                            barWidth={titleWidth}
                        ></InputRightBar>
                    )}
                    {!mobile && <VLine></VLine>}
                </Input>
                {!mobile && (
                    <Input
                        onMouseOver={handleLocationInputHover}
                        onMouseOut={handleLocationMouseOut}
                        location
                    >
                        <LocationIcon />
                        <InputFilter
                            nameAttr="location"
                            placeAttr="Filter by location..."
                            {...register('location')}
                            mobile={mobile}
                            location
                            ref={refLocation}
                            onFocus={handleLocationInputFocus}
                            onBlur={handleLocationInputBlur}
                        />
                        <HiddenLocation ref={refHiddenLocation}>
                            {mirrorLocation}
                        </HiddenLocation>
                        {locationInputHover && locationWidth !== 0 && (
                            <InputRightBar
                                mobile={mobile}
                                barWidth={locationWidth}
                                location
                            ></InputRightBar>
                        )}
                        <VLine></VLine>
                    </Input>
                )}

                <DesktopRightFilter>
                    {!mobile && (
                        <FullTime xlScreen desktop={desktop}>
                            <FulltimeCheck
                                onClick={() => setChecked(!checked)}
                                onMouseEnter={handleFulltimeMouseEnter}
                                onMouseLeave={() => setCheckHover(false)}
                                src={`/assets/checkbox-${
                                    checked
                                        ? 'checked'
                                        : checkHover
                                        ? 'hover-light'
                                        : darkMode
                                        ? 'default-dark'
                                        : 'default-light'
                                }.svg`}
                            />
                            <FullTimeText>
                                Full Time {desktop ? 'Only' : ''}
                            </FullTimeText>
                        </FullTime>
                    )}
                    <MobileRightFilter>
                        <FilterIcon onClick={handleClickFilterIcon}>
                            <FilterIconSvg></FilterIconSvg>
                        </FilterIcon>
                        <SubmitButton
                            type="submit"
                            mobileSearch
                            mobile={mobile}
                        >
                            {mobile ? (
                                <SearchIcon>
                                    <SearchIconSvg></SearchIconSvg>
                                </SearchIcon>
                            ) : (
                                'Search'
                            )}
                        </SubmitButton>
                    </MobileRightFilter>
                </DesktopRightFilter>
                {mobileFilter && (
                    <BgMobileFilter>
                        <Container>
                            <MobileFilter ref={wrapperRef}>
                                <Input
                                    onMouseOver={handleLocationInputHover}
                                    onMouseOut={handleLocationMouseOut}
                                >
                                    <LocationIcon />
                                    <InputFilter
                                        nameAttr="location"
                                        placeAttr="Filter by location..."
                                        {...register('location')}
                                        mobile={mobile}
                                        ref={refLocation}
                                        onFocus={handleLocationInputFocus}
                                        onBlur={handleLocationInputBlur}
                                    />
                                    <HiddenLocation ref={refHiddenLocation}>
                                        {mirrorLocation}
                                    </HiddenLocation>
                                    {locationInputHover &&
                                        locationWidth !== 0 && (
                                            <InputRightBar
                                                mobile={mobile}
                                                barWidth={locationWidth}
                                                location
                                            ></InputRightBar>
                                        )}
                                </Input>
                                <HLine></HLine>
                                <FullTime>
                                    <FulltimeCheck
                                        onClick={() => setChecked(!checked)}
                                        onMouseEnter={handleFulltimeMouseEnter}
                                        onMouseLeave={() =>
                                            setCheckHover(false)
                                        }
                                        src={`/assets/checkbox-${
                                            checked
                                                ? 'checked'
                                                : checkHover
                                                ? 'hover-light'
                                                : darkMode
                                                ? 'default-dark'
                                                : 'default-light'
                                        }.svg`}
                                    />
                                    <FullTimeText>Full Time Only</FullTimeText>
                                </FullTime>
                                <SubmitButton type="submit" fluid>
                                    Search
                                </SubmitButton>
                            </MobileFilter>
                        </Container>
                    </BgMobileFilter>
                )}
            </FilterForm>
        </FilterContainer>
    );
};

export default Filter;
