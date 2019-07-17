import React, { Component } from "react";
import { Button } from 'antd';

// 页面组件
import Banner from '../../components/banner';


import { connect } from 'react-redux';
import { getDataAction } from "../../actions";

import './index.less'
import 'styles/common.less'

const mapStateToProps = (state) => {
    let { data, dataLoading, error } = state.toJS();
    return {
        data, dataLoading, error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData(cb) {
            dispatch(getDataAction(cb))
        }
    }
}

class Index extends Component {
    state = {
        name: 'home page'
    }

    componentDidMount() {
        let a = new Set('123');
        console.log(a);
        this.props.fetchData(() => {
            
        });

    }

    //homeType 首页类型  0为立即申请按钮 1为搜索框
    render() {
        return (
            <div className="home-wrap">
                <div className="container" style={{textAlign: 'center', marginTop: '200px'}}>
                    {/* <Banner /> */}
                    <h1>React + Redux + Antd + Redux-thunk</h1>
                    <Button>开始你的表演！</Button>
                </div>               
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)

