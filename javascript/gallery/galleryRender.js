import { renderImageSlider } from './imageSlider.js'
import { discountCountdown } from './discountRender.js'
import { cardTrigger } from './cardRender.js'
import { navigationBarRender } from '../general/navigationBar.js'

navigationBarRender()

renderImageSlider()
discountCountdown()
cardTrigger(10, 20)