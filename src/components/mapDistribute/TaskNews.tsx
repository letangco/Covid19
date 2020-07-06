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
import './styleNews.css';
// Khai bao de nhan thuoc tinh props tu News
type IProps = {
  sendData: any[];
  sendKeyWord: "511"
};
interface IState {

}
class TaskNews extends Component<IProps, IState> {
  // componentDidMount() {
  //   const fetchMyAPI = async () => {
  //     const initialDailyData: any = await fetchNews();
  //     // console.log(initialDailyData);
  //     this.setState({
  //       data: initialDailyData,
  //     });
  //   };
  //   fetchMyAPI();
  // }
  renderItem = (data: any[]) => {
    return data.map((item: any, index: any) => {

      return (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator >
          <TimelineContent>{item.title}<span><i className="fa fa-clock-o fa-1x clock" aria-hidden="true"></i></span></TimelineContent>
        </TimelineItem>
      );
    });
  }
  renderTimeLine = (data: any[]) => {
    return data.map((item: any, index: any) => {
      var i: any = index.toString();
      return (
        <TreeView
          key={index}
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
  renderFilterTimeLine = (data: any[]) => {
    var keyword: string = this.props.sendKeyWord.toLowerCase();
    return data.map((item: any, index: any) => {
      var i: any = index.toString();
      return (
        <TreeView
          key={index}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
        >
          <TreeItem nodeId={i + 1} label={item.title} >

            <Timeline align="left">
              {/* {this.renderFilterItem(item.updates, keyword)} */}
              {
                item.updates.map((item: any, index: number) => {
                  if (item.title.toLowerCase().indexOf(keyword) !== -1) {
                    console.log(item.title, keyword);
                    return <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot variant="outlined" />
                        <TimelineConnector />
                      </TimelineSeparator >
                      <TimelineContent>{JSON.stringify(item.title)}<span><i className="fa fa-clock-o fa-1x clock" aria-hidden="true"></i></span></TimelineContent>
                    </TimelineItem>;
                  }
                  else {
                    return (<></>);
                  }
                }
                )
              }
            </ Timeline>
          </TreeItem>
        </TreeView>
      );

    });
  }
  renderFilterItem = (data: any[], keyword: any) => {
    return data.filter((item: any, index: any) => {
      if (item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
        console.log(item.title)
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator >
            <TimelineContent>{JSON.stringify(item.title)}<span><i className="fa fa-clock-o fa-1x" aria-hidden="true"></i></span></TimelineContent>
          </TimelineItem>
        )
      }
      return 0;
    })
  }
  render() {
    var keyword: any = this.props.sendKeyWord;
    var data: any = this.props.sendData;
    return (
      <>
        {(keyword === "") ? this.renderTimeLine(data) : this.renderFilterTimeLine(data)}
      </>
    );
  }
}
export default TaskNews;
