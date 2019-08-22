import Rox from 'rox-browser'
import { betaAccess, isLoggedIn } from './users'

export const Flags = {
  score: new Rox.Flag(false),
  headerColor: new Rox.Variant('is-dark', ['is-dark', 'is-primary', 'is-white'])
}

Rox.setCustomBooleanProperty('isBetaUser', betaAccess())
Rox.setCustomBooleanProperty('isLoggedIn', isLoggedIn())


Rox.register('default', Flags)
Rox.setup(process.env.VUE_APP_ROLLOUT_KEY)
