import React, { Component } from "react";
import { fetchNews } from "../../api/map/index";
import SearchNews from './SearchNews';
import './styleNews.css';
import TaskNews from './TaskNews';
import BoNews from '../image/Bonews.png';
type IProps = {

};
type Note = []
interface IState {
  data: any[],
  keyword: any,
}
class News extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: [],
      keyword: "",
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
  onSearch = (keyword: any) => {
    this.setState({
      keyword: keyword
    })
  }

  render() {
    return (
      <div className="panel-news">
        <div className="title-search-news">
          <i className="fa fa-calendar fa-1x" aria-hidden="true">&nbsp;</i>
          <span>
            Event Timeline (GMT)&nbsp;
           <a href="https://bnonews.com/index.php/2020/04/the-latest-coronavirus-cases/"><img src={BoNews} alt="BoNews" height="30px" width="40px" /></a>
          </span>
        </div>

        <div className="content-search-news">
          <div className="txt-search-news">
            <SearchNews onSearch={this.onSearch} />
          </div>
          <div className="task-News scrollbar scrollbar-lady-lips">
            <TaskNews sendData={this.state.data} sendKeyWord={this.state.keyword} />
          </div>
        </div>
      </div>
    );
  }
}
export default News;
