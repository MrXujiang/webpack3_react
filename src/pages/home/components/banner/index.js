import React, { PureComponent } from 'react'
import Vidage from 'vidage'

export default class Banner extends PureComponent {
    state = {
        name: '全屏视频背景',
        src: ''
    }

    componentDidMount() {
        new Vidage('#vidage')
    }

    render() {
        return <video id="vidage" className="vidage-video" preload="metadata" src={this.state.src} loop autoPlay muted></video>
    }
}