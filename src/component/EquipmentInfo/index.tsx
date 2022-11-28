import Style from './style.module.less'

const EquipmentTitle = (props: any) => {
    const { title } = props
    return (
        <h3 className={Style.equipmentTitle}>{title}</h3>
    )
}
export const EquipmentInformation = () => {
    return (
        <section id={Style.EquipmentInfor} className='page'>
            <div className={Style.infoItem}>
                <EquipmentTitle title="整机参数" />
            </div>
            <div className={Style.infoItem}></div>
            <div className={Style.infoItem}></div>
            <div className={Style.infoItem}></div>

        </section>
    )
}