import { useState } from 'react'
import Style from './control.module.less'
import fw from '../../assets/imgs/复位.png'
import qd from '../../assets/imgs/启动远程(1).png'
import jl from '../../assets/imgs/警铃.png'
import btnH from '../../assets/imgs/灰色.png'
import btnActive from '../../assets/imgs/蓝色.png'
import lx from '../../assets/imgs/离线.png'

const ButtonS = (props: { name: string, callback?: Function }) => {
    const [checked, setchecked] = useState(false)
    const clickEvent = () => {
        setchecked(!checked)
        props.callback && props.callback(!checked)
    }
    return (
        <button className={Style.SwitchBtn} style={{ background: `url(${checked ? btnActive : btnH})` }} onClick={() => clickEvent}>{props.name}</button>
    )
}

const btnList1 = [
    { name: "油泵启动", value: "OIL_PUMP" },
    { name: "履带运行", value: "TRUNCATION_HEIGHT" },
    { name: "动画运行", value: "TRUNCATION" },
    { name: "自动行走", value: "ONE_MOTION" },
    { name: "自动行走(关闭)", value: "FAN_MACHINE" },
]

const btnList2 = [
    { name: "铲板升", value: "SPATULA_UP" },
    { name: "铲板降", value: "SPATULA_DOWN" },
    { name: "后支撑升", value: "BACK_SUPPORT_UP" },
    { name: "后支撑降", value: "BACK_SUPPORT_DOWN" },
    { name: "一运运行", value: "ONE_MOTION_FORWARD" },
    { name: "星轮正转", value: "START_WHEEL_FORWARD" },
    { name: "星轮反转", value: "START_Wheel_REVERSE" }
]
export const Control = () => {
    return (
        <div id={Style.control}>
            <div className={Style.topButtonList}>
                <div className={Style.topbutton}><img src={fw} alt="" /></div>
                <div className={Style.topbutton}><img src={qd} alt="" /></div>
                <div className={Style.topbutton}><img src={jl} alt="" /></div>
            </div>
            <section className={Style.container}>
                <div className={Style.buttonListLeft}>
                    {btnList1.map(({ name, value }) => (<ButtonS name={name} key={value} />))}
                </div>
                <div className={Style.buttonListRight}>
                    {btnList2.map(({ name, value }) => (<ButtonS name={name} key={value} />))}
                </div>
            </section>
            <footer className={Style.footer}>
                <div className={Style.footerControlList}>
                    <div className={Style.footerControlItem}>
                        <div className={Style.footerControlItemCenterControl}>
                            <span>截割速度</span>
                        </div>
                        <div className={Style.footerControlItemTopControl}></div>
                        <div className={Style.footerControlItemBottomControl}></div>
                    </div>
                    <div className={Style.footerControlItem}>
                        <div className={Style.footerControlItemCenterControl}>
                            <span>截割伸缩</span>
                        </div>
                        <div className={Style.footerControlItemTopControl}></div>
                        <div className={Style.footerControlItemBottomControl}></div>
                    </div>
                    <div className={Style.footerControlItem}>
                        <div className={Style.footerControlItemCenterControl}>
                            <span>截割部</span>
                        </div>
                        <div className={Style.footerControlItemTopControl}></div>
                        <div className={Style.footerControlItemBottomControl}></div>
                        <div className={Style.footerControlItemLeftControl}></div>
                        <div className={Style.footerControlItemRightControl}></div>
                    </div>
                </div>
                <div className={Style.footerDataInfoList}>
                    <div className={Style.footerDataInfoItem}>
                        <p className={Style.footerDataInfoDesc}>当前通讯情况</p>
                        <div className={Style.footerDataInfoMsg}>
                            <img src={lx} alt="" />
                        </div>
                    </div>
                    <div className={Style.footerDataInfoItem}>
                        <p className={Style.footerDataInfoDesc}>当前通讯情况</p>
                        <div className={Style.footerDataInfoMsg}>XXX秒</div>
                    </div>
                    <div className={Style.footerDataInfoItem}>
                        <p className={Style.footerDataInfoDesc}>当前通讯情况</p>
                        <div className={Style.footerDataInfoMsg}>XXX秒</div>
                    </div>
                </div>

            </footer>

        </div>
    )
}