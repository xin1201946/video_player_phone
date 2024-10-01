import {Banner, Card, Select} from "@douyinfe/semi-ui";

export function JXSetting(){
    let XLlist = JSON.parse(sessionStorage.getItem('XLlist'));
    let XL = localStorage.getItem('XL');

    const changeXL = value => {
        localStorage.setItem('XL', value);
    }
    return(
        <>
            <div
                style={{
                    display: 'inline-block',
                    padding: 20,
                }}
            >
                <Card
                    style={{maxWidth: 360}}
                    bordered={true}
                    headerLine={true}
                    title='默认线路设置'
                >
                    <div>
                        <Banner
                            closeIcon={null}
                            type="warning"
                            description="我并不保证这些线路的可用性，这些线路均来自网络，可能随时关闭"
                        />
                        <br/>
                        <Select id={'xlSelect'} placeholder="请选择线路" style={{width: 180}} defaultValue={XL}
                                optionList={XLlist} onSelect={changeXL}></Select>
                    </div>
                </Card>
            </div>
        </>
    )
}