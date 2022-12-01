import { useState } from "react"
import { Option, Select } from "../common/Select"
import { Input } from "../common/Input"
import GraphBoard from './GraphBoard'
import Style from "./style.module.less"
import jt from '../../assets/imgs/NoStoppingArea.png'
import vx from '../../assets/imgs/DangerZone.png'
import area from '../../assets/imgs/形状 2015.png'
import left from '../../assets/imgs/掘进左视图.png'
import top from '../../assets/imgs/俯视图.png'
const InfoListItem = (props: any) => {
    const { title, val } = props
    return (
        <div className={Style.infoItem}>
            <span>{title}</span>
            <span className={Style.infoItemVal}>{val}</span>
        </div>
    )
}
const infoListArr = [
    { title: '工作面', val: "" },
    { title: '设计长度', val: "m" },
    { title: '剩余长度', val: "m" },
]

const OtherInfoListItem = (props: any) => {
    const { val } = props
    return (
        <div className={Style.otherInfoListItem}>
            <span style={{ paddingLeft: '30px' }}>班组：</span>
            <span>{val}</span>
        </div>
    )
}

const OtherInfoListArr: string[] = new Array(8).fill("")
export const Monitor = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const [shapeType, setShapeType] = useState<"rect" | "arch" | "trapezoid">('rect')
    const [position, setPosition] = useState('leftBottom')
    const [graphType, setGraphType] = useState('oneStep')
    return (
        <section id={Style.monitor} className='page'>
            <div className={Style.leftContent}>
                <h3 className={Style.monitorTitle} style={{ width: '281px' }}>掘进信息</h3>
                <div className={Style.infoList}>
                    {infoListArr.map((item: any) => (<InfoListItem {...item} key={item.title} />))}
                </div>
                <div className={Style.otherInfoList}>
                    {OtherInfoListArr.map((item: any, index) => (<OtherInfoListItem {...item} key={index} />))}
                </div>
                <div className={Style.graphParamsList}>
                    <div className={Style.graphParamsItem}>
                        <p className={Style.graphParamsName}>选择巷道形状</p>
                        <div className={Style.graphParamsValBox}>
                            <Select value={shapeType} handleChange={(val: any) => setShapeType(val)}>
                                <Option value='rect' label="矩形"></Option>
                                <Option value='trapezoid' label="梯形"></Option>
                                <Option value='arch' label="拱形"></Option>
                            </Select>
                        </div>
                    </div>
                    <div className={Style.graphParamsItem}>
                        <p className={Style.graphParamsName}>参数设定</p>
                        <div className={Style.specialGraphParamsValBox}>
                            <div className={Style.smallGraphPramsName}>矩形高</div>
                            <div className={Style.smallGraphPramsName}>矩形宽</div>
                            <Input value={height} handleChange={setHeight} />
                            <Input value={width} handleChange={setWidth} />
                        </div>
                    </div>
                    <div className={Style.graphParamsItem}></div>
                    <div className={Style.graphParamsItem}></div>
                    <div className={Style.graphParamsItem}></div>
                </div>
            </div>
            <div className={Style.main}>
                <GraphBoard />
            </div>
            <div className={Style.rightContent}>
                <div className={Style.angleInfoWrap}>
                    <div className={Style.angleInfoBox}>
                        <div >
                            <span className={Style.whitec}>机身前进角度：</span>
                            <span className={Style.bluec}>254°</span>
                        </div>
                        <div >
                            <span className={Style.whitec}>机身前进角度：</span>
                            <span className={Style.bluec}>254°</span>
                        </div>
                    </div>
                    <div className={Style.areaBox}>
                        <div className={Style.whitec + ` ${Style.banArea}`} >禁停区域</div>
                        <div className={Style.whitec + ` ${Style.dangerArea}`}>危险区域</div>
                    </div>
                </div>
                <div className={Style.positionInfoWrap}>
                    <div className={Style.positionInfo}>
                        <div>
                            <span className={Style.whitec}>x：</span>
                            <span className={Style.bluec}>254</span>
                        </div>
                        <div>
                            <span className={Style.whitec}>y：</span>
                            <span className={Style.bluec}>254</span>
                        </div>
                        <div>
                            <span className={Style.whitec}>z：</span>
                            <span className={Style.bluec}>254</span>
                        </div>
                    </div>
                    <img src={area} alt="" />
                </div>
                <div className={Style.cardBox}>
                    <h3 className={Style.cardTitle}>掘进左视图</h3>
                    <img src={left} alt="" />
                    <div className={Style.cardAngle}>
                        <div>
                            <span className={Style.whitec}>滚动角：</span>
                            <span className={Style.yellowc}>254°</span>
                        </div>
                    </div>
                </div>
                <div className={Style.cardBox}>
                    <h3 className={Style.cardTitle}>掘进俯视图</h3>
                    <img src={top} alt="" />
                    <div className={Style.cardAngle}>
                        <div>
                            <span className={Style.whitec}>滚动角：</span>
                            <span className={Style.yellowc}>254°</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}