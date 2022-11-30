import Style from './style.module.less'
import { PropsWithChildren, useState, useEffect } from 'react'

// Option Component
export const Option = (props: any) => (<></>)

export const Select = ({ children, value, handleChange }: PropsWithChildren & { value: string, handleChange: Function }) => {
    const list = (Array.isArray(children) ? children : [children]).map((item) => (item.props))
    const [showOption, setShowOption] = useState(false)
    const findLabel = (value: any) => {
        return list.find(item => item.value === value).label
    }

    const hid = () => setShowOption(false)

    window.addEventListener('click', hid)
    useEffect(() => {
        window.removeEventListener('click', hid)
    })

    return (
        <div className={Style.inputWrap + `${showOption ? ' active' : ''}`} onClick={(event) => { event.stopPropagation(); setShowOption(!showOption) }}>
            <input value={findLabel(value)} readOnly className={Style.select} onChange={(ev) => (console.log(ev))} />
            <span className={Style.inputIcon + `${showOption ? ' active' : ''}`}></span>
            <div className={Style.optionList} style={{ display: showOption ? '' : 'none' }}>
                {list.map((item) => (
                    <div className={Style.optionItem + `${value === item.value ? ' active' : ''}`}
                        onClick={() => handleChange(item.value)} key={item.value}> <span>{item.label}</span> </div>
                ))}
            </div>
        </div>
    )
}