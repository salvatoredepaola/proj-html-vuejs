import { createApp } from 'vue'
import './styles/generic.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCreditCard,faDollarSign,faMap,faTruck)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
