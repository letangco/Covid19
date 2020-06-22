import React,{Component} from 'react';
import { Slide } from 'react-slideshow-image';
import './Game.css';
class Game extends Component {
  render(){
    const slideImages = [
      'https://9mobi.vn/cf/images/2015/03/nkk/anh-dep-1.jpg',
      'https://sites.google.com/site/hinhanhdep24h/_/rsrc/1436687439788/home/hinh%20anh%20thien%20nhien%20dep%202015%20%281%29.jpeg',
      'https://dulichvietnam.com.vn/vnt_upload/File/Image/anh_dep_viet_nam_2.jpg'
    ];
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
      onChange: (oldIndex :any, newIndex:any) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    }
    const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div className="imgSlide" style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="imgSlide" style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="imgSlide" style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </div>
      )
  }
    return (
        <div>
            This is Game Page
            {Slideshow()}
        </div>
    );
  }
}

export default Game;
