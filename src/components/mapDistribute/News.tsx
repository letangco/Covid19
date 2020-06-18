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

interface IProps {}
interface IState {
  data: any[];
}
class News extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
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
  renderTimeLine(data: any[]) {
    return data.map((item: any, index: any) => {
        
      var i: any = index.toString();

      return (
        <TreeView
          //   className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
        >
          <TreeItem nodeId={i + 1} label={item.title}>
            {/* <TreeItem nodeId="2" label="Calendar" />
            <TreeItem nodeId="3" label="Chrome" />
            <TreeItem nodeId="4" label="Webstorm" /> */}
            <Timeline align="left">
                <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{item.title}</TimelineContent>
                    </TimelineItem>
            </Timeline>
          </TreeItem>
        </TreeView>
      );
    });
  }
  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">
            <i className="fa fa-calendar" aria-hidden="true"></i>Event Timeline
            (GMT)
          </h3>
        </div>
        <div className="panel-body">
          {this.renderTimeLine(this.state.data)}
          {/* <TreeView
            //   className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
          >
            <TreeItem nodeId="1" label="Applications">
              <Timeline align="left">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Code</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
              </Timeline>
            </TreeItem>
          </TreeView> */}
        </div>
      </div>
    );
  }
}
export default News;
