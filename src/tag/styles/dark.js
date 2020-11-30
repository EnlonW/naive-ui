import create from '../../_styles/utils/create-component-base'
import commonVariables from './_common'
import { changeColor } from 'seemly'
import { iconDark } from '../../styles'

export default create({
  theme: 'dark',
  name: 'Tag',
  peer: [
    iconDark
  ],
  getDerivedVars (vars) {
    const {
      textColor2Overlay,
      primaryColorHover,
      primaryColorPressed,
      primaryColor,
      infoColor,
      successColor,
      warningColor,
      errorColor,
      baseColor,
      borderColorOverlay,
      opacityDisabled,
      closeColorOverlay,
      colorColorHoverOverlay,
      closeColorPressedOverlay,
      borderRadiusSmall: borderRadius
    } = vars
    return {
      ...commonVariables,
      borderRadius,
      opacityDisabled,
      // checked
      textColorCheckable: textColor2Overlay,
      textColorHoverCheckable: primaryColorHover,
      textColorPressedCheckable: primaryColorPressed,
      textColorChecked: baseColor,
      colorCheckable: 'transparent',
      colorHoverCheckable: 'transparent',
      colorPressedCheckable: 'transparent',
      colorChecked: primaryColor,
      colorCheckedHover: primaryColorHover,
      colorCheckedPressed: primaryColorPressed,
      // default
      borderColor: borderColorOverlay,
      textColor: textColor2Overlay,
      color: 'transparent',
      closeColor: closeColorOverlay,
      closeColorHover: colorColorHoverOverlay,
      closeColorPressed: closeColorPressedOverlay,
      borderColorPrimary: changeColor(primaryColor, { alpha: 0.3 }),
      textColorPrimary: primaryColor,
      colorPrimary: 'transparent',
      closeColorPrimary: changeColor(primaryColor, { alpha: 0.7 }),
      closeColorHoverPrimary: changeColor(primaryColor, { alpha: 0.85 }),
      closeColorPressedPrimary: changeColor(primaryColor, { alpha: 0.57 }),
      borderColorInfo: changeColor(infoColor, { alpha: 0.3 }),
      textColorInfo: infoColor,
      colorInfo: 'transparent',
      closeColorInfo: changeColor(infoColor, { alpha: 0.7 }),
      closeColorHoverInfo: changeColor(infoColor, { alpha: 0.85 }),
      closeColorPressedInfo: changeColor(infoColor, { alpha: 0.57 }),
      borderColorSuccess: changeColor(successColor, { alpha: 0.3 }),
      textColorSuccess: successColor,
      colorSuccess: 'transparent',
      closeColorSuccess: changeColor(successColor, { alpha: 0.7 }),
      closeColorHoverSuccess: changeColor(successColor, { alpha: 0.85 }),
      closeColorPressedSuccess: changeColor(successColor, { alpha: 0.57 }),
      borderColorWarning: changeColor(warningColor, { alpha: 0.3 }),
      textColorWarning: warningColor,
      colorWarning: 'transparent',
      closeColorWarning: changeColor(warningColor, { alpha: 0.7 }),
      closeColorHoverWarning: changeColor(warningColor, { alpha: 0.85 }),
      closeColorPressedWarning: changeColor(warningColor, { alpha: 0.57 }),
      borderColorError: changeColor(errorColor, { alpha: 0.3 }),
      textColorError: errorColor,
      colorError: 'transparent',
      closeColorError: changeColor(errorColor, { alpha: 0.7 }),
      closeColorHoverError: changeColor(errorColor, { alpha: 0.85 }),
      closeColorPressedError: changeColor(errorColor, { alpha: 0.57 })
    }
  }
})
