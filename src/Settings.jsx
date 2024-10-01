import {Card, SideSheet} from "@douyinfe/semi-ui";
import {IconChevronRight} from '@douyinfe/semi-icons';
import {JXSetting} from "./JXSetting.jsx";
import {ThemeSetting} from "./ThemeSetting.jsx";
import {AboutAPP} from "./AboutAPP.jsx";
import {useState} from "react";
export function Settings () {
    const [JXvisible, setJXVisible] = useState(false);
    const JXchange = () => {
        setJXVisible(!JXvisible);
    };
    const [Themevisible, setThemeVisible] = useState(false);
    const Themechange = () => {
        setThemeVisible(!Themevisible);
    };
    const [Aboutvisible, setAboutVisible] = useState(false);
    const Aboutchange = () => {
        setAboutVisible(!Aboutvisible);
    };
    return (
        <>
            <div>
                <Card
                    onClick={JXchange}
                    bodyStyle={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                    style={{maxHeight: 100}}
                >
                    <p style={{fontWeight: 400, fontSize: 16}}>解析设置</p>
                    <IconChevronRight style={{color: 'var(--semi-color-primary)'}}/>
                </Card>
                <br/>
                <Card
                    onClick={Themechange}
                    bodyStyle={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                    style={{maxHeight: 100}}
                >
                    <p style={{fontWeight: 400, fontSize: 16}}>主题设置</p>
                    <IconChevronRight style={{color: 'var(--semi-color-primary)'}}/>
                </Card>
                <br/>
                <Card
                    onClick={Aboutchange}
                    bodyStyle={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                    style={{maxHeight: 100}}
                >
                    <p style={{fontWeight: 400, fontSize: 16}}>关于应用</p>
                    <IconChevronRight style={{color: 'var(--semi-color-primary)'}}/>
                </Card>
                <br/>
            </div>
            <SideSheet width={window.innerWidth} title="解析设置" visible={JXvisible} onCancel={JXchange} >
                <JXSetting></JXSetting>
            </SideSheet>
            <SideSheet width={window.innerWidth} title="主题设置"  visible={Themevisible} onCancel={Themechange} >
                <ThemeSetting></ThemeSetting>
            </SideSheet>
            <SideSheet width={window.innerWidth} title="关于应用"  visible={Aboutvisible} onCancel={Aboutchange} >
                <AboutAPP></AboutAPP>
            </SideSheet>
        </>
    )
}