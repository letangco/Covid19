import React from 'react';

interface IState{
    term:any;
}
interface IProps{
    handleFormSubmit:any
}
class SearchBar extends React.Component <IProps, IState> {
    constructor(props:IProps)
    {
        super(props)
        this.state={
            term:""
        }
    }
    handleChange = (event:any) => {
        console.log(event.target.value)
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = (event:any) =>{
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <h2  style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img></h2>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                    </div>
                </form>
            </div>
            </>
           
        )
    }
}
export default SearchBar;