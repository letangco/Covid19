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