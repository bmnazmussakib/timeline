import React from 'react';
import classes from './TimelineItem.module.css';

const TimelineItem = ({ data }) => {
    const {id, phase, phaseData} = data;
    return (
        <div className={classes.timelineItem}>
            <div className={classes.timelineItemContent}>
                <h6 className={classes.timelineItemTitle}>Phase {id}</h6>
                <ul>
                    {
                        phaseData.map((data) => <li>{data.phaseList}</li>)
                    }
                </ul>
            </div>
            <div className={classes.timelineNumber}><h2>Q{phase}</h2></div>
        </div>
    );
};

export default TimelineItem;