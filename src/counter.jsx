import {Col, Input, Row,Button,SideSheet, Radio,  SplitButtonGroup } from "@douyinfe/semi-ui";
import {VideoPlayer} from "./VideoPlayer.jsx";
import {Settings} from "./Settings.jsx";
import {IconSetting} from '@douyinfe/semi-icons';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react'
export function Counter_main (){
    const [Settingsvisible, setSettingsVisible] = useState(false);
    const [Videovisible, setVideoVisible] = useState(false);
    const openSettings = () => {
        setSettingsVisible(!Settingsvisible);
    };
    const openVideoPlayer = () => {
        localStorage.setItem('XLresult',localStorage.getItem('XL')+document.getElementById('urlInput').value)
        setVideoVisible(!Videovisible);
    };
    return (
        <>
            <div>
                <Row gutter={18}>
                    <Col span={15}>
                        <Input id={'urlInput'} showClear placeholder='输入你的Url'></Input>
                    </Col>
                    <Col span={4}>
                        <div className="col-content" onClick={openVideoPlayer}><Button>解析</Button></div>
                    </Col>
                    <Col span={2}>
                        <div className="col-content"><Button icon={<IconSetting/>} onClick={openSettings}></Button>
                        </div>
                    </Col>

                </Row>

                <SideSheet title="设置" width={window.innerWidth} visible={Settingsvisible} onCancel={openSettings}
                           placement='right' footer={<p style={{textAlign:"center",color:"gray"}}>林间追风 2024</p>}>
                    <Settings></Settings>
                </SideSheet>
                <SideSheet title="VideoPlayer" width={window.innerWidth} visible={Videovisible}
                           onCancel={openVideoPlayer} placement='right'>
                    <VideoPlayer></VideoPlayer>
                </SideSheet>
            </div>
        </>
    )
}