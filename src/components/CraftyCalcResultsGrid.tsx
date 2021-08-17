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


    const columns: GridColDef[] = [
        {field: 'id', hide: true},
        {field: 'name', headerName: 'Name', width: 250},
        {
            field: 'icon',
            headerName: 'Icon',
            renderCell: getItemImage,
            width: 150
        },

    ]

    return (
        <Grid container >
            <Grid container item xs={6} className="resultsGrid">
                <DataGrid rows={results} columns={columns} />
            </Grid>
        </Grid>
    )
}