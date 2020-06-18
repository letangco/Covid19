import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import "./styleNews.css";

interface IProps {
    // Khai báo để truyền ra ngoài thằng component News
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
      <div>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          size="small"
          placeholder="Search"
          name="keyword"
          value={keyword}
          onChange={this.onChange}
        //   onKeyUp={this.onSearch}
        />
        <Button
          type="button"
          variant="contained"
          color="secondary"
        //   href="#contained-buttons"
          size="large"
          onClick={this.onSearch}
        >
          Search
        </Button>
      </div>
    );
  }
}
export default SearchNews;
