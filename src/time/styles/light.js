import create from '../../_styles/utils/create-component-base'

// no style, placeholder
export default create({
  theme: 'light',
  name: 'Time',
  getDerivedVars (vars) {
    return {}
  }
})
