import Style from './style.module.less'

type inputProps = {
    value: any,
    handleChange: Function,
    formatter?: Function,
    parser?: Function
}
export const Input = (props: inputProps) => {
    const df = (val: any) => val
    const { formatter = df, parser = df } = props

    return (
        <input className={Style.Input} type="text" value={formatter(props.value)} onChange={(ev) => props.handleChange(parser(ev.target.value))} />
    )
}