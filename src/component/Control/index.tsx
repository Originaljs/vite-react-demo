import Style from './control.module.less'
import fw from '../../assets/imgs/复位.png'
import qd from '../../assets/imgs/启动远程(1).png'
import jl from '../../assets/imgs/警铃.png'
export const Control = () => {
    return (
        <div id={Style.control}>
            <div className={Style.topButtonList}>
                <div className={Style.topbutton}><img src={fw} alt="" /></div>
                <div className={Style.topbutton}><img src={qd} alt="" /></div>
                <div className={Style.topbutton}><img src={jl} alt="" /></div>
            </div>

        </div>
    )
}