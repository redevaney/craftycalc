import React, { ChangeEvent, useState } from 'react';
import { IItemSearchKey, IFFXIVResults, IFFXIVItem, findItemByName } from './CraftyCalcActions';
import { Button, Grid, TextField } from '@material-ui/core';
import { CraftyCalcResultsGrid } from './CraftyCalcResultsGrid';
import { CraftyCalcCard } from './CraftyCalcCard';
import "../styles/styles.scss";

export const CraftyCalcContainer: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<IFFXIVResults[]>([]);

    const  searchForItem = async () => {
        if(searchTerm?.length <= 3)
            return;
        const request:IItemSearchKey = {
            indexes: 'item',
            string: searchTerm,
            string_algo: 'wildcard',
            limit: 20
        }
        const response = await findItemByName(request);
        setSearchResults(response)
    }

    const onChangeSearch = (search: string) => {
        setSearchTerm(search);
    }

    return (
        <Grid container>
            <Grid container item xs={6} className="leftGrid">
                <TextField id="searchQuery" label="Enter Search Term" onChange={(e:ChangeEvent<HTMLInputElement>) => onChangeSearch(e.target.value)} value={searchTerm} />
                <Button variant="contained" disabled={searchTerm?.length <= 3} onClick={() => searchForItem()}>Search</Button>
                <CraftyCalcResultsGrid results={searchResults} />
            </Grid>
            <Grid container item xs={6} className="rightGrid">
                <CraftyCalcCard itemId={2699} itemName="Cotton Coif" imageUrl="/i/040000/040305.png" />
            </Grid>
        </Grid>
    )
}