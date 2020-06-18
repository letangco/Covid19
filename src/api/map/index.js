import axios from 'axios';
// API lấy danh sách News tin tức của trang Map
export const fetchNews =async()=>{
    try {
      const{data} = await axios.get(`https://cov19.cc/event_timeline.json`);
      return Object.values(data);
    } catch (error) {
      return error;
    }
  }