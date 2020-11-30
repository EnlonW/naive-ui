import { cTB, c, cB } from '../../../_utils/cssr'
import fadeInTransition from '../../../_styles/transitions/fade-in'
import fadeInScaleUpTransition from '../../../_styles/transitions/fade-in-scale-up'

export default c([
  ({ props }) => {
    const {
      cubicBezierEaseOut
    } = props.$global
    const {
      color,
      boxShadow
    } = props.$local
    return [
      cB('modal-container', {
        raw: `
          position: fixed;
          left: 0;
          top: 0;
          height: 0;
          width: 0;
          display: flex;
        `
      }),
      cB('modal-mask', {
        raw: `
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, .4);
        `
      }, [
        fadeInTransition({
          enterDuration: '.25s',
          leaveDuration: '.25s',
          enterCubicBezier: cubicBezierEaseOut,
          leaveCubicBezier: cubicBezierEaseOut
        })
      ]),
      cB('modal-body-wrapper', {
        raw: `
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          overflow: visible;
        `
      }, [
        cB('modal-scroll-content', {
          raw: `
            min-height: 100%;
            display: flex;
          `
        })
      ]),
      cTB('modal', {
        raw: `
          margin: auto;
          position: relative;
          box-shadow: ${boxShadow}
        `
      }, [
        fadeInScaleUpTransition({
          duration: '.25s',
          enterScale: '.5'
        }),
        cB('card', {
          raw: `
            background-color: ${color};
          `
        }),
        cB('confirm', {
          raw: `
            width: 446px;
            max-width: calc(100vw - 32px);
          `
        })
      ])
    ]
  }
])
