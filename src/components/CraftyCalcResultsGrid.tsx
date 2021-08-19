import React, { ChangeEvent, useState } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { DataGrid, GridColDef,  GridCellValue, GridCellParams } from '@material-ui/data-grid';
import { IFFXIVResults } from './CraftyCalcActions';

export interface ICraftyCalcResultsGridProps {
    results: IFFXIVResults[]
}

export const CraftyCalcResultsGrid:  React.FC<ICraftyCalcResultsGridProps> = ({
    results,
    ...props
}) => {

    const getItemImage = (params: GridCellParams) => {
        return (<Avatar alt='Item' variant="square" src={`https://xivapi.com/${params.getValue(params.id, "icon")}`}/>)
    }

    const showItemCard = () => {

    }


    const columns: GridColDef[] = [
        {field: 'id', hide: true},
        {
            field: 'icon',
            headerName: 'Icon',
            renderCell: getItemImage,
            width: 150
        },
        {field: 'name', headerName: 'Name', width: 250},
    ]

    return (
        <Grid container >
            <Grid container item className="resultsGrid">
                <DataGrid rows={results} columns={columns} onRowClick={() => showItemCard} />
            </Grid>
        </Grid>
    )
}