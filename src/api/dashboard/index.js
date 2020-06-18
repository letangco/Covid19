import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// API cho Chart Stat của DashBoard
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map((
      { confirmed, deaths, recovered,reportDate: date }
      ) => 
    ({ confirmed: confirmed.total, deaths: deaths.total,recovered: recovered.total, date }));
  } catch (error) {
    return error;
  }
};

//API lấy số liệu tổng quan của thế giới làm PieChart
export const fetchStatsData =async ()=>{
  try{
    const{data} = await axios.get(`https://api.thevirustracker.com/free-api?global=stats`);
    return data.results[0];
  }
  catch(error){
    return error;
  }
}

// API lấy số liệu của từng bang Hoa Kì
export const fetchUSAData = async () =>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}

// API lấy số liệu của từng bang của Canada
export const fetchCanadaData = async() =>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}

//API lấy số liệu của các tỉnh ở Trung Quốc
export const fetchChinaData = async() =>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}

// API lấy số liệu của các tỉnh của Australia
export const fetchAustraliaData = async() =>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}

// API lấy số liệu của các tỉnh của Italy
export const fetchItalyData = async() =>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}

// API lấy số liệu của các tỉnh của Russia
export const fetchRussiaData = async() =>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}

// API lấy số liệu của các tỉnh của Ireland
export const fetchIrelandData = async() =>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}

//API lấy summary các quốc gia châu Á
export const fetchAsiaSummaryData = async() =>{
  try{
    const{data} = await axios.get(`https://disease.sh/v2/continents/Asia`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}
//API lấy danh sách các quốc gia châu Á
export const fetchAsiaData = async() =>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data.regions.asia.list;
  } 
  catch(error)
  {
    return error;
  }
}
// API lấy danh sách tổng quát của toàn bộ quốc gia trên thế giới
export const SummaryStats = async() =>{
  try{
    const{data} = await axios.get(`https://api.covid19api.com/summary`);
    return data.Countries;
  } 
  catch(error)
  {
    return error;
  }
}
//API lấy summary các quốc gia châu Âu
export const fetchEuropeSummaryData = async() =>{
  try{
    const{data} = await axios.get(`https://disease.sh/v2/continents/Europe`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}
//API lấy danh sách các quốc gia châu Âu
export const fetchEuropeData = async() =>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data.regions.europe.list;
  } 
  catch(error)
  {
    return error;
  }
}
// API lay danh sach cac quoc gia Chau Phi Africa
export const fetchAfricaData = async()=>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data.regions.africa.list;
  }
  catch(error)
  {
    return error;
  }
}
//API lấy summary các quốc gia châu Phi Africa
export const fetchAfricaSummaryData = async() =>{
  try{
    const{data} = await axios.get(`https://disease.sh/v2/continents/Africa`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}
// API lay danh sach cac quoc gia oceania
export const fetchOceaniaData = async()=>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data.regions.oceania.list;
  }
  catch(error)
  {
    return error;
  }
}
// API lay danh sach cac quoc gia North America
export const fetchNorthAmericaData = async()=>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data.regions.northamerica.list;
  }
  catch(error)
  {
    return error;
  }
}
//API lấy summary các quốc gia NorthAmerica
export const fetchNorthAmericaSummaryData = async() =>{
  try{
    const{data} = await axios.get(`https://disease.sh/v2/continents/North%20America`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}
// API lay danh sach cac quoc gia South America
export const fetchSouthAmericaData = async()=>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data.regions.southamerica.list;
  }
  catch(error)
  {
    return error;
  }
}
//API lấy summary các quốc gia SouthAmerica
export const fetchSouthAmericaSummaryData = async() =>{
  try{
    const{data} = await axios.get(`https://disease.sh/v2/continents/South%20America`);
    return data;
  } 
  catch(error)
  {
    return error;
  }
}
// API lay danh sach cac quoc gia Ships
export const fetchShipsData = async()=>{
  try{
    const{data} = await axios.get(`https://cov19.cc/report.json`);
    return data.regions.ships.list;
  }
  catch(error)
  {
    return error;
  }
}
