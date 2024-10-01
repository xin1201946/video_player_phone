import {Card, Select} from "@douyinfe/semi-ui";

export function VideoPlayer () {
    let result_path =localStorage.getItem('XLresult')
    let XLlist = JSON.parse(sessionStorage.getItem('XLlist'));
    let XL = localStorage.getItem('XL');

    const changeXL = value => {
        localStorage.setItem('XL', value);
    }
    console.log(result_path)
    return (
        <>
            <iframe src={result_path}
                    width="100%"
                    id={'myIframe'}
                    frameBorder={'none'}
                    title="VideoPlayer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <br/>
            <Card
                style={{maxWidth: 360}}
                bodyStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <div>
                    <p>设置线路</p>
                    <Select id={'xlSelect'} placeholder="请选择线路" style={{width: 180}} defaultValue={XL}
                            optionList={XLlist} onSelect={changeXL}></Select>
                </div>
            </Card>
        </>
    )
}