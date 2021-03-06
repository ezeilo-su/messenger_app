import React from 'react';
import { Box, Badge } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  badge: {
    fontSize: 20,
    minHeight: 25,
    minWidth: 25,
    color: '#FFF',
    marginRight: theme.spacing(2.5),
    borderRadius: '50%',
    backgroundColor: '#3A8DFF',
  },
}));

export default function BadgeUnread(props) {
  const classes = useStyles();

  return (
    <Box>
      <Badge
        classes={{ badge: `${classes.badge}` }}
        badgeContent={props.unread.length}
      />
    </Box>
  );
}
