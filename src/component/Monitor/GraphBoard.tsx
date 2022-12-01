
import { memo, useEffect, useRef } from "react"
import { RenderCanvas } from "./RrenderCanvas"
import Style from './style.module.less'
const GraphBoard = () => {
    const renderer = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const target = renderer.current as HTMLCanvasElement
        const parent = target.parentNode as HTMLDivElement
        target.width = parseInt(getComputedStyle(parent).width)
        target.height = parseInt(getComputedStyle(parent).height)
        const center = { x: target.width / 2, y: target.height / 2 }
        const container = new RenderCanvas(target, { center })
        target.addEventListener('contextmenu', (e) => {
            e.preventDefault()
        })
        const update = () => {
            requestAnimationFrame(update)
            container.render()
        }
        update();

        (async function () {
            const randomInt = (l: number, r: number) => Math.round(Math.random() * (r - l) + l)
        })()
    })
    return (
        <div className={Style.graphBoard}>
            <canvas ref={renderer} style={{ pointerEvents: 'auto' }}></canvas>
        </div>
    )
}
export default memo(GraphBoard)