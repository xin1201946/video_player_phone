import {Banner, Button} from "@douyinfe/semi-ui";

export function ThemeSetting(){
    const body = document.body;
    function change_theme(){
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        } else {
            body.setAttribute('theme-mode', 'dark');
        }
    }
    return(
        <>
            <Banner
                type="info"
                description="本应用已支持自动暗黑模式，无需手动调整哦"
                closeIcon={"none"}
            />
            <br/>
            <Button
                onClick={change_theme}
            >
                玉华之日/玄雅之夜
            </Button>
        </>
    )
}