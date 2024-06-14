import React from 'react';
import { SectionHeadingStyle } from '../../styles/components/SectionHeadingStyle';
import { TaskWrapper } from '../../styles/screens/TaskStyle';

const TaskScreen = () => {
    return (
        <TaskWrapper className='container d-flex'>
            <SectionHeadingStyle>Task Page</SectionHeadingStyle>
        </TaskWrapper>
    );
}

export default TaskScreen;