import React, { Component } from "react";
interface IState {
  groupAge: any;
  groupSex:any
}
class calculatorRate extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      groupAge: "",
      groupSex:""
    };
  }
  onHandleSubmit = (event: any) => {
    event.preventDefault();
    console.log(this.state.groupAge, this.state.groupSex);
  };
  onHandleClickAge = (event: any) => {
    this.setState({
      groupAge: event.target.name,
    });
  };
  onHandleClickSex = (event: any) => {
    this.setState({
      groupSex: event.target.name,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form onSubmit={this.onHandleSubmit} className="form-horizontal">
            <div className="form-group">
              <legend>COVID-19 Prognostic Tool</legend>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="panel panel-primary">
                    {/* {Group Age} */}
                    <span className="label label-success">Group Age</span>
                    <div className="panel-body">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <input
                          type="button"
                          value="1 - 19"
                          name="groupAge1"
                          onClick={this.onHandleClickAge}
                        />
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <input
                          type="button"
                          value="20 - 39"
                          name="groupAge2"
                          onClick={this.onHandleClickAge}
                        />
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <input
                          type="button"
                          value="40 - 59"
                          name="groupAge3"
                          onClick={this.onHandleClickAge}
                        />
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <input
                          type="button"
                          value="60 - 79"
                          name="groupAge4"
                          onClick={this.onHandleClickAge}
                        />
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <input
                          type="button"
                          value="80 - 99"
                          name="groupAge5"
                          onClick={this.onHandleClickAge}
                        />
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <input
                          type="button"
                          value=" 100+"
                          name="groupAge6"
                          onClick={this.onHandleClickAge}
                        />
                      </div>
                    </div>

                    <span className="label label-warning">Sex?</span>
                    <div className="panel-body">
                      <div className="list-group" id="list-tab" role="tablist">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <input
                              type="button"
                              value="Male"
                              name="sexMale"
                              onClick={this.onHandleClickSex}
                            />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <input
                              type="button"
                              value="Female"
                              name="sexFemale"
                              onClick={this.onHandleClickSex}
                            />
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Cardiovascular Disease?</h3>
                      </div>
                      <div className="panel-body">
                        <div
                          className="list-group"
                          id="list-tab"
                          role="tablist"
                        >
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              Yes
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              No
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Diabetes?</h3>
                      </div>
                      <div className="panel-body">
                        <div
                          className="list-group"
                          id="list-tab"
                          role="tablist"
                        >
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              Yes
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              No
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                          Chronic Respiratory Disease?
                        </h3>
                      </div>
                      <div className="panel-body">
                        <div
                          className="list-group"
                          id="list-tab"
                          role="tablist"
                        >
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              Yes
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              No
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Hypertension?</h3>
                      </div>
                      <div className="panel-body">
                        <div
                          className="list-group"
                          id="list-tab"
                          role="tablist"
                        >
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              Yes
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              No
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Cancer?</h3>
                      </div>
                      <div className="panel-body">
                        <div
                          className="list-group"
                          id="list-tab"
                          role="tablist"
                        >
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              Yes
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              No
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Prior Stroke?</h3>
                      </div>
                      <div className="panel-body">
                        <div
                          className="list-group"
                          id="list-tab"
                          role="tablist"
                        >
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              Yes
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              No
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Heart Disease?</h3>
                      </div>
                      <div className="panel-body">
                        <div
                          className="list-group"
                          id="list-tab"
                          role="tablist"
                        >
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              Yes
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div
                              className="list-group-item list-group-item-action active"
                              id="list-home-list"
                              data-toggle="list"
                              role="tab"
                              aria-controls="home"
                            >
                              No
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default calculatorRate;
