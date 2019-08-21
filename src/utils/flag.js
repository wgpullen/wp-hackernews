import Rox from 'rox-browser'

export const Flags = {
  score: new Rox.Flag(false),
  headerColor: new Rox.Variant('is-dark', ['is-dark', 'is-primary', 'is-white'])
}

Rox.register('default', Flags)
Rox.setup(process.env.VUE_APP_ROLLOUT_KEY)
