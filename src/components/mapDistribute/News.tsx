import React, { Component } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fetchNews } from "../../api/map/index";
import SearchNews from './SearchNews';
import './styleNews.css';

interface IProps {
  // onSearch:any
}
interface IState {
  data: any[],
  keyword:any 
}
class News extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      keyword:""
    };
  }
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
  renderItem(data: any[]) {
    return data.map((item: any, index: any) => {
      // var source :any= item.sources[0].toString();
      // return item.title.toString() + <br/>;
      return (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector/>
          </TimelineSeparator >
          <TimelineContent>{item.title}<span><i className="fa fa-clock-o fa-1x" aria-hidden="true"></i></span></TimelineContent>
        </TimelineItem>
      );
    });
  }
  rederFilterItem(data:any [], keyword:any)
  {
    return data.filter((item:any, index:any) =>{
      if(keyword.toLowerCase()===item.title.toLowerCase().indexOf(keyword))
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector/>
            </TimelineSeparator >
            <TimelineContent>{item.title}<span><i className="fa fa-clock-o fa-1x" aria-hidden="true"></i></span></TimelineContent>
          </TimelineItem>
        )
    })
  }
  renderTimeLine(data: any[]) {
    return data.map((item: any, index: any) => {
      var i: any = index.toString();
      return (
        <TreeView
        key = {index}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
        >
          <TreeItem nodeId={i + 1} label={item.title} >
            
            <Timeline align="left">
              {/* <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          {this.renderItem(item.updates)}
                        </TimelineContent>
                    </TimelineItem> */}
              {this.renderItem(item.updates)}
              
            </Timeline>
          </TreeItem>
        </TreeView>
      );
    });
  }
  // Nhận lại keyword tìm kiến từ Component SearchNews.tsx
  onSearch = (keyword:any) =>{
    this.setState({
      keyword:keyword
    })
  }
  
  render() {
    var keyword:any = this.state.keyword;
    // console.log(keyword)
    var data:any = this.state.data;
    // console.log(data);
      if(keyword!=="")
      {
        return data.map((item: any, index: any) => {
          var i: any = index.toString();
          return (
            <TreeView
            key = {index}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              multiSelect
            >
              <TreeItem nodeId={i + 1} label={item.title} >
                
                <Timeline align="left">
                  {/* <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                              {this.renderItem(item.updates)}
                            </TimelineContent>
                        </TimelineItem> */}
                  {this.rederFilterItem(item.updates,this.state.keyword)}
                  
                </Timeline>
              </TreeItem>
            </TreeView>
          );
        });
        console.log("Dang Search")
      }
      else {
        {this.renderTimeLine(this.state.data)}
        console.log("Khong tim kiem");
      }

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
          {this.renderTimeLine(this.state.data)}
        </div>
      </div>
    );
  }
}
export default News;
