import React, { memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { RegularText } from '../style';

export const InterfaceCard = memo(({ card, selectCard }) => {
  return (
    <Card>
      <CardActionArea
        onClick={() => selectCard(card)}
        sx={{
          height: '100%',
          '&[data-active]': {
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: 'action.selectedHover',
            },
          },
        }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Typography variant="h5" component="div">
            {card.label}
          </Typography>
          <RegularText color="text.secondary">
            {card.description}
          </RegularText>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

