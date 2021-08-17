import axios from 'axios';

//export const apiKey = '93425be3a8dd447c848366aa8ba0c662e39548622bf645c798331f33128b3b0c';
const apiSite = "https://xivapi.com/";

export interface IFFXIVItem {
    id: string,
    icon: string,
    name: string,
    url: string,
    url_type: string,
}

export interface IFFXIVResults {
    Pagination: {
        Page: number,
        PageNext?: number,
        PagePrev?: number,
        PageTotal: number,
        Results: number,
        ResultsPerPage: number,
        ResultsTotal: number,
    },
    Results: IFFXIVItem[]
}

export interface IItemSearchKey {
    indexes: string,
    string: string,
    string_algo: string,
    limit: number,
}

export const findItemByName = async (itemSearchKey: IItemSearchKey ) : Promise<IFFXIVResults[]> => {

    const response = await axios.post(`${apiSite}search?snake_case=1`, itemSearchKey);
    const result = await response.data
    return result.results;

}




