import {Col, Input, Row,Button,Modal,SideSheet } from "@douyinfe/semi-ui";
import {VideoPlayer} from "./VideoPlayer.jsx";
import {Settings} from "./Settings.jsx";
import {IconSetting} from '@douyinfe/semi-icons';
// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import { useState } from 'react'
import os from "./UATest.js";

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
    const [modalvisible, setmodalVisible] = useState(false);
    const showmodalDialog = () => {
        setmodalVisible(true);
    };
    const modalhandleOk = () => {
        setmodalVisible(false);
        window.location.href='https://pc.video.1201946.xyz/';
    };
    const modalhandleCancel = () => {
        setmodalVisible(false);
        console.log('Cancel button clicked');
    };
    useEffect(() => {
        if (os.isPc) {
            showmodalDialog();
        }
    }, []);
    return (
        <>
            <div>
                <Row gutter={18}  type="flex" justify="center" alignItems="center">
                    <Col span={15}>
                        <Input id={'urlInput'} showClear placeholder='输入你的Url或者影片名'></Input>
                    </Col>
                    <Col span={6}>
                        <div className="col-content" onClick={openVideoPlayer}><Button>解析</Button></div>
                    </Col>
                    <Button icon={<IconSetting/>} onClick={openSettings}
                            style={{position:"fixed",float:"right",top:"85%",right:"20px"}}>

                    </Button>
                </Row>

                <SideSheet title="设置" width={"100%"} visible={Settingsvisible} onCancel={openSettings}
                           placement='right' footer={<p style={{textAlign:"center",color:"gray"}}>林间追风 2024</p>}>
                    <Settings></Settings>
                </SideSheet>
                <SideSheet title="VideoPlayer" width={"100%"} visible={Videovisible}
                           onCancel={openVideoPlayer} placement='right'>
                    <VideoPlayer></VideoPlayer>
                </SideSheet>
                <Modal
                    title="UA检查"
                    visible={modalvisible}
                    onOk={modalhandleOk}
                    onCancel={modalhandleCancel}
                    closeOnEsc={true}
                >
                    检测到你的设备为PC，为了给你带来更好的使用体验，建议你切换到PC模式
                </Modal>
            </div>
        </>
    )
}