import React, { ChangeEvent, useState } from 'react';
import { Avatar, Card, CardHeader } from '@material-ui/core';

export interface ICraftyCalcCardProps {
    itemId: number,
    itemName: string,
    imageUrl: string
}

export const CraftyCalcCard: React.FC<ICraftyCalcCardProps> = ({
    itemId,
    itemName,
    imageUrl,
    ...props
}) => {

    return (
        <Card className="itemCard">
            <CardHeader 
                avatar={
                    <Avatar alt='Item' variant="square" src={`https://xivapi.com/${imageUrl}`}/>
                }
                title={itemName}
            />
        </Card>
    )
}
