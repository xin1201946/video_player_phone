import {Descriptions, Lottie, Card, Avatar, Space, Button, SideSheet} from '@douyinfe/semi-ui';
import {useEffect, useState} from "react";
import {IconGithubLogo, IconInfoCircle} from '@douyinfe/semi-icons';
import {FaMicroblog , FaReact, FaTelegram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Meta from "@douyinfe/semi-ui/lib/es/card/meta.js";
import {SoftwareList} from "./SoftwareList.jsx";
export function AboutAPP(){
    const jsonURL =
        'https://lottie.host/c774640d-51ff-4f0e-8e98-180198376d75/4MnbHVayIB.json';
    const data = [
        { key: '应用版本', value: '1.0' },
        { key: '基于', value: 'Vite + React' },
    ];
    const [softwarevisible, setSoftwareVisible] = useState(false);
    const softwarechange = () => {
        setSoftwareVisible(!softwarevisible);
    };
    const [DHdata, setDHData] = useState('');
    useEffect(() => {
        fetch(jsonURL)
            .then(resp => resp.json())
            .then(setDHData);
    }, []);
    function get_github() {
        window.open('https://github.com/xin1201946')
    }

    function get_Twitter() {
        window.open('https://x.com/can_feng?t=tr7Cmvcj3sV_fUQaRw5oPA&s=09')
    }

    function get_blog() {
        window.open('https://www.talk.1201946.xyz/?i=1')
    }
    function get_telegram() {
        window.open('https://t.me/canfengs')
    }
    return (

        <flex style={{alignItems: 'center',justify:"center"}}>
                <Lottie id={'lottie_anm'}  params={{  animationData: DHdata }} width={'300px'} height={'300px'}  />
                <Descriptions align={"center"} data={data} />
                <Card
                    onClick={softwarechange}
                    style={{ maxWidth: 360 }}
                    bodyStyle={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <p style={{color:"gray"}}>开源项目列表</p>
                    <IconInfoCircle style={{ color: 'var(--semi-color-primary)' }}/>
                </Card>
                <br/>
                <Card
                    style={{ maxWidth: 360 }}
                    footer={
                        <Space align='baseline'>
                            <Button theme='borderless' onClick={get_github} type='primary' icon={<IconGithubLogo />}></Button>
                            <Button theme='borderless' onClick={get_blog} type='primary' icon={<FaMicroblog />}></Button>
                            <Button theme='borderless' onClick={get_Twitter} type='primary' icon={<FaXTwitter  />}></Button>
                            <Button theme='borderless' onClick={get_telegram} type='primary' icon={<FaTelegram />}></Button>
                        </Space>
                    }
                >
                    <Meta
                        title="林间追风"
                        avatar={
                            <Avatar
                                alt='Card meta img'
                                size="default"
                                src='https://q.qlogo.cn/headimg_dl?dst_uin=1143922499&spec=640&img_type=jpg'
                            />
                        }
                    />
                    <p style={{color:"gray"}}>我们，在路上，勿忘初心。找寻最初的梦想和微弱的希望</p>
                </Card>
            <SideSheet title="开源项目列表" height={window.innerHeight}  width={window.innerWidth} visible={softwarevisible} onCancel={softwarechange} placement='right'>
                <SoftwareList></SoftwareList>
            </SideSheet>
        </flex>

    )
}