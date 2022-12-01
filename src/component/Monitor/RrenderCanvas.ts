type vec2 = [number, number]

export class RenderCanvas {
    initSetting = {
        cellSize: 5, // 一个大刻度为多少个刻度
        step: 10, // 一刻度表示的值
        pixelRatio: 1, // 像素 / 坐标val
        center: { x: 0, y: 0 }
    }
    width: number
    height: number
    ctx: CanvasRenderingContext2D
    LOCK_POINTER: boolean = false
    lineList: Array<vec2> = [[0, 0]]
    private _pointerX: number = 0
    private _pointerY: number = 0

    get pointerX() {
        return this._pointerX
    }

    set pointerX(value: number) {
        this._pointerX = value
    }

    get pointerY() {
        return this._pointerY
    }

    set pointerY(value: number) {
        this._pointerY = value
    }

    static LINEAR(start: number, now: number, time: number, value: number) {
        return (now - start) / time * value
    }

    static EASE_IN(start: number, now: number, time: number, value: number) {
        return Math.pow((now - start) / time, 2) * value
    }

    constructor(dom: HTMLCanvasElement, center: any = {}) {
        this.width = dom.width
        this.height = dom.height
        this.ctx = dom.getContext('2d') as CanvasRenderingContext2D
        this.initSetting = { ...this.initSetting, ...center }
    }
    private setCenter(x: number, y: number): void {
        this.ctx.translate(x, y)
    }
    render(): void {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.drawBackground()
        this.drawAxis()
        this.drawLine(this.lineList)
        this.drawPointer()
    }

    drawBackground(): void {
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = `rgba(10,77,118,.5)`
        // 绘制网格
        this.drawGrid()
    }

    drawGrid(): void {
        const lineWidth = 1
        this.ctx.fillStyle = `rgba(10,79,120,.5)`
        this.ctx.save()
        this.setCenter(this.initSetting.center.x, 0)
        this.repeatDraw(lineWidth, this.height, true, false, this.initSetting.cellSize * this.initSetting.step * this.initSetting.pixelRatio - (lineWidth / 2), 0)
        this.ctx.restore()
        this.ctx.save()
        this.setCenter(0, this.initSetting.center.y)
        this.repeatDraw(this.width, lineWidth, false, true, 0, this.initSetting.cellSize * this.initSetting.step * this.initSetting.pixelRatio - (lineWidth / 2))
        this.ctx.restore()
        this.ctx.restore()
    }

    repeatDraw(width: number, height: number, repeatX: boolean, repeatY: boolean, gapX: number, gapY: number) {
        if (repeatX) {
            let left = 0, right = 0
            while (left > - this.initSetting.center.x || right < this.width - this.initSetting.center.x) {
                this.ctx.fillRect(left, 0, width, height)
                this.ctx.fillRect(right, 0, width, height)
                right += width + gapX - width / 2
                left -= width + gapX - width / 2
            }
        }

        if (repeatY) {
            let top = 0, bottom = 0
            while (top > -this.initSetting.center.y || bottom < this.height - this.initSetting.center.y) {
                this.ctx.fillRect(0, top, width, height)
                this.ctx.fillRect(0, bottom, width, height)
                top -= height + gapY - height / 2
                bottom += height + gapY - height / 2

            }
        }
    }
    // drawing the Axis of coordinates
    drawAxis(): void {
        this.ctx.save()
        const lineWidth = 2
        this.ctx.fillStyle = '#ffffff'
        this.ctx.save()
        this.ctx.fillRect(0, this.initSetting.center.y - (lineWidth / 2), this.width, lineWidth)
        this.ctx.fillRect(this.initSetting.center.x - (lineWidth / 2), 0, lineWidth, this.height)
        // draw the point of center
        this.ctx.beginPath()
        this.ctx.arc(this.initSetting.center.x, this.initSetting.center.y, 5, 0, Math.PI * 2, false)
        this.ctx.closePath()
        this.ctx.fill()
        this.ctx.restore()
        // 绘制刻度
        this.drawCalibration()

    }
    // draw the calibration of Axis
    drawCalibration() {
        this.ctx.save()
        const lineWidth = 1
        const longTickSize = 20
        const shortTickSize = 10
        this.ctx.fillStyle = `#ffffff`
        // 大刻度x
        this.setCenter(this.initSetting.center.x, this.initSetting.center.y - longTickSize)
        this.repeatDraw(lineWidth, longTickSize, true, false, this.initSetting.cellSize * this.initSetting.step * this.initSetting.pixelRatio - (lineWidth / 2), 0)
        this.ctx.restore()
        this.ctx.save()
        // 大刻度y
        this.setCenter(this.initSetting.center.x, this.initSetting.center.y)
        this.repeatDraw(longTickSize, lineWidth, false, true, 0, this.initSetting.cellSize * this.initSetting.step * this.initSetting.pixelRatio - (lineWidth / 2))
        this.ctx.restore()
        // 小刻度x
        this.ctx.save()
        this.setCenter(this.initSetting.center.x, this.initSetting.center.y - shortTickSize)
        this.repeatDraw(lineWidth, shortTickSize, true, false, this.initSetting.step * this.initSetting.pixelRatio - (lineWidth / 2), 0)
        this.ctx.restore()
        // 小刻度x
        this.ctx.save()
        this.setCenter(this.initSetting.center.x, this.initSetting.center.y)
        this.repeatDraw(shortTickSize, lineWidth, false, true, 0, this.initSetting.step * this.initSetting.pixelRatio - (lineWidth / 2))
        this.ctx.restore()
        this.ctx.restore()
        // this.setCenter()

    }

    drawLine(pointers: Array<vec2>) {
        this.ctx.save()
        this.setCenter(this.initSetting.center.x, this.initSetting.center.y)
        this.ctx.strokeStyle = 'RGBA(255, 199, 61, .8)'
        this.ctx.lineWidth = 10
        this.ctx.lineJoin = "round"
        this.ctx.lineCap = "round"
        this.ctx.beginPath()
        this.ctx.moveTo(pointers[0][0], pointers[0][1])
        for (let i = 1; i < pointers.length; i++) {
            const pointer = pointers[i]
            this.ctx.lineTo(pointer[0] * this.initSetting.pixelRatio, pointer[1] * this.initSetting.pixelRatio)
        }
        this.ctx.stroke()
        this.ctx.restore()
    }

    drawPointer() {
        this.ctx.save()
        const radius = 40
        this.setCenter(this.initSetting.center.x, this.initSetting.center.y)
        const gradient = this.ctx.createLinearGradient((this.pointerX - radius) * this.initSetting.pixelRatio, (this.pointerY - radius) * this.initSetting.pixelRatio,
            (this.pointerX + radius) * this.initSetting.pixelRatio, (this.pointerY + radius) * this.initSetting.pixelRatio)
        gradient.addColorStop(0, "rgba(255, 110, 141, 1)");
        gradient.addColorStop(1, "rgba(252, 39, 39, 1)")
        this.ctx.fillStyle = gradient
        this.ctx.beginPath()
        this.ctx.arc(this.pointerX * this.initSetting.pixelRatio, this.pointerY * this.initSetting.pixelRatio, radius, 0, Math.PI * 2, false)
        this.ctx.closePath()
        this.ctx.fill()
        this.ctx.restore()

    }

    animationPointerTo(x: number, y: number, time: number, linearFn = RenderCanvas.LINEAR) {
        if (this.LOCK_POINTER) return
        this.LOCK_POINTER = true
        const start = Date.now()
        const easeFn = linearFn
        const endTime = start + time
        const distanceX = x - this.pointerX
        const distanceY = y - this.pointerY
        const startX = this.pointerX
        const startY = this.pointerY
        this.lineList.push([startX, startY])
        return new Promise((resolve: Function) => {
            let animation = () => {
                const now = Date.now()
                if (now > endTime) {
                    this.pointerX = x
                    this.pointerY = y
                    this.LOCK_POINTER = false
                    this.lineList[this.lineList.length - 1] = [x, y]
                    resolve()
                } else {
                    this.pointerX = startX + easeFn(start, now, time, distanceX)
                    this.pointerY = startY + easeFn(start, now, time, distanceY)
                    this.lineList[this.lineList.length - 1] = [this.pointerX, this.pointerY]
                    requestAnimationFrame(animation)
                }
            }
            animation()
        })

    }
}