
import Style from './style.module.less'
import jx1 from "../../assets/imgs/title1.png"
import zu1 from "../../assets/imgs/content.png"
import jx2 from "../../assets/imgs/title2.png"
import zu2 from "../../assets/imgs/content2.png"
import jx3 from "../../assets/imgs/title3.png"
import zu3 from "../../assets/imgs/content3.png"
import ws from "../../assets/imgs/瓦斯.png"
import sd from "../../assets/imgs/湿度.png"
import co from "../../assets/imgs/CO.png"
import wd from "../../assets/imgs/温度.png"
import fs from "../../assets/imgs/风速.png"
import fc from "../../assets/imgs/粉尘.png"

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
const weatherList = [
    { icon: ws, title: '瓦斯', val: '0.716', unit: 'kg/m³' },
    { icon: sd, title: '湿度', val: '82', unit: '%' },
    { icon: co, title: 'CO', val: '123', unit: '' },
    { icon: wd, title: '温度', val: '27', unit: '°C' },
    { icon: fs, title: '风速', val: '5', unit: 'm/s' },
    { icon: fc, title: '粉尘', val: '12', unit: 'mg/m³' },
]

const WeatherComponent = (props: any) => {
    const { icon, title, val, unit } = props
    return (
        <div className={Style.WeatherItem}>
            <img src={icon} alt="" />
            <div >
                <p>{title}</p>
                <div className={Style.textBox}>
                    <span className={Style.Weathervalue}>{val}</span>
                    <span className={Style.Weatherunit}>{unit}</span>
                </div>
            </div>
        </div>
    )
}
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
                    <div className={Style.weatherInfoList}>
                        {weatherList.map((item: any) => (<WeatherComponent {...item} key={item.val} />))}
                    </div>
                </div>
            </div>
            <div className={Style.systemMiddle}>
                <canvas className={Style.tcanvas}></canvas>
            </div>
            <div className={Style.systemRight}>
                <h3 className={Style.cardTitle}>故障信息</h3>
                <div className={Style.errorInfos}></div>
            </div>
        </section>
    )
}