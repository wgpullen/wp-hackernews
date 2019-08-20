import Rox from 'rox-browser'

export const Flags = {
  score: new Rox.Flag(false)
}

Rox.register('default', Flags)
Rox.setup(process.env.VUE_APP_ROLLOUT_KEY)
