
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
}