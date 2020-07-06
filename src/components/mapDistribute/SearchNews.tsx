import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import "./styleNews.css";

interface IProps {
    // Khai báo để truyền ra ngoài thằng cha component News
    onSearch: any
}
interface IState {
    [keyword: string]: string
}
class SearchNews extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  onChange=(event :any) =>{
      event.preventDefault();
      var target :any= event.target;
      var name :any= target.name;
      var value :any= target.value;
      this.setState({
          [name] : value
      })
  }
  onSearch=()=>{
      this.props.onSearch(this.state.keyword);
  }
  render() {
      var keyword = this.state.keyword;
    return (
      <>
        <TextField
          className="searchNews"
          id="standard-secondary"
          label="Search..."
          variant="outlined"
          size="small"
          name="keyword"
          value={keyword}
          onChange={this.onChange}
          onKeyUp={this.onSearch}
          color="secondary"
        />
      </>
    );
  }
}
export default SearchNews;
