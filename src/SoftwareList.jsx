import {Banner, List, Lottie} from "@douyinfe/semi-ui";
import {useEffect, useState} from "react";

export function SoftwareList() {
    const sfdata =[
        "react",
        "vite",
        "semi-ui",
        "react-icons",
        "semi-icons",
    ]
    const [DHdata, setDHData] = useState('');
    const jsonURL='https://lottie.host/7dce6f1d-a070-4582-87d1-a1ad060ec362/W9xlyCcxRZ.json'
    useEffect(() => {
        fetch(jsonURL)
            .then(resp => resp.json())
            .then(setDHData);
    }, []);
    return(
        <>
            <Lottie id={'lottie_anm1'}  params={{  animationData: DHdata }}  />
            <Banner
                type="info"
                bordered
                icon={null} closeIcon={null}
                description="本项目基于以下开源项目开发"
            />
            <List
                bordered
                dataSource={sfdata}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </>

    )
}