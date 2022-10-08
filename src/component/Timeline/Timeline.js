import React from 'react';
import timelineData from '../../data';
import TimelineItem from '../TimelineItem/TimelineItem';
import classes from './Timeline.module.css';
import arrow from '../../img/arrow.svg';

console.log(timelineData)

const Timeline = () => {
    return (
        <>
            <div className={classes.timelineHead}>
                <h1>Roadmap</h1>
                <p>The following roadmap lists 2022 milestones.</p>
            </div>
            <div className={classes.timelineContainer}>

                {
                    timelineData.map((data, index) => <TimelineItem data={data} key={index} />)
                }
            </div>

            <p className={classes.tobe}>To be announced</p>
        </>
    )
};

export default Timeline;