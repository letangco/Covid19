import React, { Component } from "react";
import { fetchNews } from "../../api/map/index";
import SearchNews from './SearchNews';
import './styleNews.css';
import TaskNews from './TaskNews';
type IProps = {
  
};
type Note = []
interface IState {
  data: any[],
  keyword:any ,
}
class News extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: [],
      keyword:"",
    };
    
  }
  static defaultProps = {
    someDefaultProp: 11
  };
  componentDidMount() {
    const fetchMyAPI = async () => {
      const initialDailyData: any = await fetchNews();
      // console.log(initialDailyData);
      this.setState({
        data: initialDailyData,
      });
    };
    fetchMyAPI();
  }
  // Nhận lại keyword tìm kiến từ Component SearchNews.tsx
  onSearch = (keyword:any) =>{
    this.setState({
      keyword:keyword
    })
  }
  
  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">
            <i className="fa fa-calendar" aria-hidden="true"></i> Event Timeline
            (GMT)
          </h3>
        </div>
        <div className="panel-body">
          <SearchNews onSearch ={this.onSearch}/>
          {/* {this.renderTimeLine(this.state.data)} */}
          <TaskNews sendData={this.state.data} sendKeyWord = {this.state.keyword} />
        </div>
      </div>
    );
  }
}
export default News;
