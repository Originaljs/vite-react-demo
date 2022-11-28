import Style from './input.module.less'
import { NavLink } from 'react-router-dom'
export default function () {
    return (
        <header className={Style.header}>
            <nav className={Style.headerNav}>
                <div className={Style.headerNavList}>
                    <NavLink to="/system" className={Style.item}><span >孪生系统</span></NavLink>
                    <NavLink to="/monitor" className={Style.item}><span>智能监测</span></NavLink>
                    <NavLink to="/" className={Style.item} end><span>智能控制</span></NavLink>
                    <NavLink to="/info" className={Style.item}><span>装备信息</span></NavLink>
                </div>
            </nav>
        </header>
    )
}