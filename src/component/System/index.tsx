
import Style from './style.module.less'
import jx1 from "../../assets/imgs/title1.png"
import zu1 from "../../assets/imgs/content.png"
import jx2 from "../../assets/imgs/title2.png"
import zu2 from "../../assets/imgs/content2.png"
import jx3 from "../../assets/imgs/title3.png"
import zu3 from "../../assets/imgs/content3.png"

const TopList = (props: any) => {
    const { title, num, titlebg, contentbg } = props
    return (
        <div>
            <p className={Style.infoItemName} style={{ background: `url(${titlebg})` }}>{title}</p>
            <div className={Style.infoItemValBox} style={{ background: `url(${contentbg})` }}><span>{num}</span></div>
        </div>
    )
}
const leftList = [
    { title: "系统电压", num: 6, titlebg: jx1, contentbg: zu1 },
    { title: "油泵工作时间", num: 6, titlebg: jx2, contentbg: zu2 },
    { title: "截割工作时间", num: 6, titlebg: jx3, contentbg: zu3 }
]

export const System = () => {

    return (
        <section id={Style.system} className='page'>
            <div className={Style.systemLeft}>
                <div>
                    <h3 className={Style.cardTitle}>设备信息</h3>
                    <div className={Style.cardContent}>
                        {leftList.map((item, index) => (<TopList {...item} key={index} />))}
                    </div>
                </div>
                <div>
                    <h3 className={Style.cardTitle}>设备信息</h3>
                </div>
            </div>
            <div className={Style.systemMiddle}>
                <canvas className={Style.tcanvas}></canvas>
            </div>
            <div className={Style.systemRight}></div>
        </section>
    )
}