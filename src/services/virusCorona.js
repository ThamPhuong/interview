import axios from "axios"
import { getAPI } from './getAPI';

const baseUrl = "https://api.covid19api.com"

export const getCoutries = () => getAPI(`${baseUrl}/summary`);

export const getCountryDetail = (countryCode) => getAPI(`https://restcountries.com/v2/alpha/${countryCode}`);
// export const getCountryDetail = async (countryCode) => await axios.get(`https://restcountries.com/v2/alpha/${countryCode}`);

// export const getCovidDetailByCountry = async (countryCode) => await axios.get(`${baseUrl}/country/${countryCode}`);
export const getCovidDetailByCountry = (countryCode) => getAPI(`${baseUrl}/country/${countryCode}`);
