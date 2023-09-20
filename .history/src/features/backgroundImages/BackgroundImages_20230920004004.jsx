/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Hidden, Visible } from "react-grid-system";
import { CircleLoader } from 'react-spinners';

import {
    fetchBackgroundImages,
    selectBackgroundImages,
    selectIsLoading,
    selectError,
} from './backgroundImagesSlice';
import RightArrow from '../../components/RightArrow/RightArrow';
import LeftArrow from '../../components/LeftArrow/LeftArrow';

import './BackgroundImages.scss';

const BackgroundImages = (props) => {
    const [currentBackgroundImageIndex, setCurrentBackgroundImageIndex] = useState(0);
    const [currentBackgroundImage, setCurrentBackgroundImage] = useState('');

    const dispatch = useDispatch();
    const backgroundImages = useSelector(selectBackgroundImages);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchBackgroundImages());
    }, [dispatch]);

    useEffect(() => {
        if(backgroundImages.length > 0) {
            setCurrentBackgroundImage(backgroundImages[currentBackgroundImageIndex]);
        }
    }, [backgroundImages, currentBackgroundImageIndex]);


    if(isLoading) {
        return (
            <CircleLoader size={100} color={"#FFFFFF"} loading={isLoading} />
        );
    }

    if(error) {
        return (
            <div className="background-images-error">
                <p>Error: {error}</p>
            </div>
        );
    }

    const handleNextBackgroundImage = () => {
        setCurrentBackgroundImageIndex((prevIndex) => {
            if(prevIndex === backgroundImages.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handlePreviousBackgroundImage = () => {
        setCurrentBackgroundImageIndex((prevIndex) => {
            if(prevIndex === 0) {
                return backgroundImages.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };

    return (
        <>
            <Container>
                <Row className="background-images" style={{ backgroundImage: `url(${currentBackgroundImage})` }}>
                    <Hidden sm>
                        <Col
                            md={1}
                            className="left-arrow"
                        >
                            <LeftArrow
                                onClick={() => handlePreviousBackgroundImage()}
                            />
                        </Col>
                    </Hidden>
                    <Col
                        md={10}
                        className="children-container"
                    >
                        {props.children}
                    </Col>
                    <Hidden sm>
                        <Col
                            md={1}
                            className="right-arrow"
                        >
                            <RightArrow onClick={() => handleNextBackgroundImage()} />
                        </Col>
                    </Hidden>
                </Row>
                <Row>
                    <Hidden lg>
                        <Col sm={1}>
                            <LeftArrow onClick={() => handlePreviousBackgroundImage()} />
                        </Col>
                        <Col sm={10}>&nbsp;</Col>
                        <Col sm={1}>
                            <RightArrow onClick={() => handleNextBackgroundImage()} />
                        </Col>
                    </Hidden>
                </Row>
            </Container>
        </>
    );
};

export default BackgroundImages;