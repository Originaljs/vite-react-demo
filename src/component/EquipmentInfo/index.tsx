import Style from './style.module.less'

import arrow from '../../assets/imgs/3.png'
import pre from '../../assets/imgs/1.png'

const EquipmentTitle = (props: any) => {
    const { title } = props
    return (
        <h3 className={Style.equipmentTitle}>{title}</h3>
    )
}

const InfoCardKV = (props: any) => {
    const { name, val } = props
    return (
        <div className={Style.tableRow}>
            {name ? <div className={Style.infoCardDetailName}>
                <img src={pre} />
                <span className={Style.infoCardDetailNameText}>{name}:</span>
            </div> :
                <div></div>}
            <span className={Style.infoCardDetailVal}>{val}</span>
        </div>
    )
}

const tableList = [
    { name: '型号', val: 'EBZ160-2' },
    { name: '总体长度', val: '10.4m' },
    { name: '总体宽度', val: '3.0m（铲板' },
    { name: '', val: '2.3m（机身' },
    { name: '总体高度', val: 'EBZ160-2' },
    { name: '卧底深度', val: 'EBZ160-2' },
    { name: '截割硬度', val: 'EBZ160-2' },
    { name: '供电电压', val: 'EBZ160-2' },
    { name: '爬坡能力', val: 'EBZ160-2' },
    { name: '截割高度', val: 'EBZ160-2' },
    { name: '截割宽度', val: 'EBZ160-2' },
    { name: '截割面积', val: 'EBZ160-2' },
]
export const EquipmentInformation = () => {
    return (
        <section id={Style.EquipmentInfor} className='page'>
            <div className={Style.infoItem}>
                <div className={Style.infoCard}>
                    <EquipmentTitle title="整机参数" />
                    <div className={Style.topImgBox}>
                        <img src={arrow} />
                        <img src={arrow} style={{ transform: 'rotate(180deg)' }} />
                    </div>
                    <div className={Style.infoCardDetailTable}>
                        {tableList.map((item: any, index: number) => (<InfoCardKV {...item} key={item.name + index} />))}
                    </div>
                </div>
                <div className={Style.infoCard} style={{ marginTop: '29px' }}>
                    <EquipmentTitle title="截割部" />
                </div>
                <div className={Style.infoCard} style={{ marginTop: '50px' }}>
                    <EquipmentTitle title="铲板部" />
                </div>
            </div>
            <div className={Style.infoItem}>
                <div className={Style.infoCard} style={{ marginTop: '29px' }}>
                    <EquipmentTitle title="行走部" />
                </div>
                <div className={Style.infoCard} style={{ marginTop: '50px' }}>
                    <EquipmentTitle title="水系部" />
                </div>
                <div className={Style.infoCard} style={{ marginTop: '50px' }}>
                    <EquipmentTitle title="液压系统" />
                </div>

            </div>
            <div className={Style.infoItem}>
                <div className={Style.infoCard} style={{ marginTop: '29px' }}>
                    <EquipmentTitle title="整机电器" />
                </div>
                <div className={Style.infoCard} style={{ marginTop: '70px' }}>
                    <EquipmentTitle title="油泵电机" />
                </div>
                <div className={Style.infoCard} style={{ marginTop: '70px' }}>
                    <EquipmentTitle title="截割电机" />
                </div>
            </div>
            <div className={Style.infoItem}>
                <div className={Style.infoCard} >
                    <EquipmentTitle title="第一运输机" />
                </div>
                <div className={Style.infoCard} style={{ marginTop: '70px' }}>
                    <EquipmentTitle title="第二运输机" />
                </div>
            </div>

        </section>
    )
}