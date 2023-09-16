/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from "react-grid-system";

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
            // console.log("🚀 ~ file: BackgroundImages.jsx:27 ~ useEffect ~ backgroundImages:", backgroundImages)
            // setCurrentBackgroundImage(backgroundImages[currentBackgroundImageIndex]);
            console.group("file: BackgroundImages.jsx:27 ~ useEffect ~ backgroundImages");
            console.dir(backgroundImages);
            console.groupEnd();
            setCurrentBackgroundImage(backgroundImages[currentBackgroundImageIndex]);
        }
    }, [backgroundImages, currentBackgroundImageIndex]);


    if(isLoading) {
        return (
            <div className="background-images-loading">
                <h1>Loading...</h1>
            </div>
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
                    <Col
                        md={1}
                        className="left-arrow"
                    >
                        <LeftArrow
                            onClick={() => handlePreviousBackgroundImage()}
                        />
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
                        <RightArrow onClick={() => handleNextBackgroundImage()} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BackgroundImages;