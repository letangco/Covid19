import React, { Component } from "react";
interface iState {}
interface iProps {
  dataResult: any;
}
class Results extends Component<iProps, iState> {
  render() {
    // console.log(this.props.dataResult)
    var data: any[] = this.props.dataResult;

    var groupAge: string = data[0];
    var valueAge: any = [0.06, 3.9, 22.4, 24.9, 48.7, 0.04];
    var sex: string = data[1];
    var Cardiovascular: string = data[2];
    var Diabetes: string = data[3];
    var Respiratory: string = data[4];
    var Hypertension: string = data[5];
    var Cancer: string = data[6];
    var Stroke: string = data[7];
    var Heart: string = data[8];
    function RenderGroupAgeUS() {
      switch (groupAge) {
        case "groupAge1": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">{valueAge[0]}%</div>
                </div>
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (Chinese Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data A paper by the
                      Chinese CCDC released on Feb. 17, which is based on 72,314
                      confirmed, suspected, and asymptomatic cases of COVID-19
                      in China as of Feb. 11, and was published in the Chinese
                      Journal of Epidemiology.
                    </p>
                  </div>
                  <div className="panel-body">0.2%</div>
                </div>
              </div>
            </div>
          );
          break;
        }
        case "groupAge2": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">{valueAge[1]}%</div>
                </div>
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (Chinese Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data A paper by the
                      Chinese CCDC released on Feb. 17, which is based on 72,314
                      confirmed, suspected, and asymptomatic cases of COVID-19
                      in China as of Feb. 11, and was published in the Chinese
                      Journal of Epidemiology.
                    </p>
                  </div>
                  <div className="panel-body">0.2%</div>
                </div>
              </div>
            </div>
          );
          break;
        }
        case "groupAge3": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">{valueAge[2]}%</div>
                </div>
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (Chinese Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data A paper by the
                      Chinese CCDC released on Feb. 17, which is based on 72,314
                      confirmed, suspected, and asymptomatic cases of COVID-19
                      in China as of Feb. 11, and was published in the Chinese
                      Journal of Epidemiology.
                    </p>
                  </div>
                  <div className="panel-body">0.2%</div>
                </div>
              </div>
            </div>
          );
          break;
        }
        case "groupAge4": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">{valueAge[3]}%</div>
                </div>
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (Chinese Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data A paper by the
                      Chinese CCDC released on Feb. 17, which is based on 72,314
                      confirmed, suspected, and asymptomatic cases of COVID-19
                      in China as of Feb. 11, and was published in the Chinese
                      Journal of Epidemiology.
                    </p>
                  </div>
                  <div className="panel-body">0.2%</div>
                </div>
              </div>
            </div>
          );
          break;
        }
        case "groupAge5": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">{valueAge[4]}%</div>
                </div>
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (Chinese Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data A paper by the
                      Chinese CCDC released on Feb. 17, which is based on 72,314
                      confirmed, suspected, and asymptomatic cases of COVID-19
                      in China as of Feb. 11, and was published in the Chinese
                      Journal of Epidemiology.
                    </p>
                  </div>
                  <div className="panel-body">0.2%</div>
                </div>
              </div>
            </div>
          );
          break;
        }
        case "groupAge6": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">{valueAge[5]}%</div>
                </div>
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Age Specific Fatality Rate (Chinese Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data A paper by the
                      Chinese CCDC released on Feb. 17, which is based on 72,314
                      confirmed, suspected, and asymptomatic cases of COVID-19
                      in China as of Feb. 11, and was published in the Chinese
                      Journal of Epidemiology.
                    </p>
                  </div>
                  <div className="panel-body">0.2%</div>
                </div>
              </div>
            </div>
          );
          break;
        }
      }
      return 1;
    }
    function RenderSex() {
      switch (sex) {
        case "Male": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP SEX</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Sex Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">61.8%</div>
                </div>
              </div>
            </div>
          );
          break;
        }
        case "Female": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP SEX</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Sex Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">38.2%</div>
                </div>
              </div>
            </div>
          );
          break;
        }
      }
    }
    function RenderResult() {}
    return (
      <div>
        <div className="container">
          {RenderGroupAgeUS()}
          {RenderSex()}
        </div>
      </div>
    );
  }
}

export default Results;
