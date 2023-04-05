import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { emitCorrectColorandLabel } from '../task-counter/helpers/emitCorrectColorAndLabel';
import { _TaskHeader } from './_task-header';
import { _TaskDescription } from './_taskDescription';
import { _TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';

export const Task: FC<ITask> = ({
  priority,
  status,
  title,
  date,
  description,
  onStatusChange,
  onClick,
}): ReactElement => {
  const color = emitCorrectColorandLabel(status).color;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        // width={'100%'}
        p="1em"
        borderRadius=".9em"
        border={'2px solid'}
        borderColor={color}
        sx={{ backgroundColor: 'background.paper' }}
        position="relative"
      >
        <Typography
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            transform: 'translate(0%,-50%)',
            padding: '.5em',
            backgroundColor: 'blue',
          }}
        >
          {priority}
        </Typography>
        <_TaskHeader date={date} title={title} />
        <Box pl={'1em'}>
          <_TaskDescription description={description} />
          <_TaskFooter
            onClick={onClick}
            onStatusChange={onStatusChange}
          />
        </Box>
      </Box>
    </>
  );
};
