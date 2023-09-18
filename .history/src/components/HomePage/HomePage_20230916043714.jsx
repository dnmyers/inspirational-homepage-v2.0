/* eslint-disable react/prop-types */
import { Container, Row, Col } from 'react-grid-system';

import Weather from '../../features/weather/Weather';
// import TaskInput from '../TaskInput/TaskInput';
// import Tasks from '../../features/tasks/Tasks';
import TasksContainer from '../TasksContainer/TasksContainer';
import Quote from '../../features/quote/Quote';

import './HomePage.scss';

const HomePage = () => {
    return (
        <Container fluid className="homepage-container">
            <Row>
                <Col lg={8} md={7}>&nbsp;</Col>
                <Col lg={4} md={5}>
                    <Weather />
                </Col>
            </Row>
            <Row className="middle-section">
                <Col md={12}>
                    <div className="task-section">
                        <TasksContainer />

                        {/* <TaskInput />
                        <Tasks /> */}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Quote />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;