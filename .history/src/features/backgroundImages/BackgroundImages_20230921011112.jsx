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
            setCurrentBackgroundImage(
                backgroundImages[currentBackgroundImageIndex]
            );
        }
    }, [backgroundImages, currentBackgroundImageIndex]);

    if(isLoading) {
        return (
            <Container>
                <Row>
                    <Col lg={5} xl={5}>&nbsp;</Col>
                    <Col lg={2} xl={2}>
                        <div className="loading">
                            <CircleLoader
                                size={200}
                                color={"#000000"}
                                loading={isLoading}
                            />
                            <h2>Loading...</h2>
                        </div>
                    </Col>
                    <Col lg={5} xl={5}>&nbsp;</Col>
                </Row>
            </Container>
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
        <Container>
            <Row className="background-images" style={{ backgroundImage: `url(${currentBackgroundImage})` }}>
                <Col
                    md={1}
                    className="left-arrow"
                >
                    <Hidden xs sm>
                        <LeftArrow
                            onClick={handlePreviousBackgroundImage}
                        />
                    </Hidden>
                </Col>
                <Col
                    md={10}
                    className="children-container"
                >
                    {props.children}
                </Col>
                <Col
                    md={1}
                    className="right-arrow"
                >
                    <Visible xs sm><LeftArrow onClick={handlePreviousBackgroundImage} className="bottom-left-arrow" />&nbsp;&nbsp;&nbsp;&nbsp;</Visible>
                    <RightArrow onClick={handleNextBackgroundImage} />
                </Col>
            </Row>
        </Container>
    );
};

export default BackgroundImages;