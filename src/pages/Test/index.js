import React, { Component } from "react";

import { connect } from "react-redux";
import { setCount } from "@/store/actions";

import "./style.scss";

@connect((state) => ({
  count: state.count.count,
}))
class Test extends Component {
  render() {
    return (
      <div className="test-wrapper">
        <h2>欢迎来到浩哥后台管理系统test页面</h2>
        <div className="home-content flex-center">
          <p>{this.props.count}</p>
          <button
            onClick={() =>
              this.props.dispatch(setCount({ count: this.props.count + 1 }))
            }
          >
            增加
          </button>
        </div>
      </div>
    );
  }
}

export default Test;
