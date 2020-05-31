import Basicsleeve from './sleeve_basic'
import Flaredsleeve from './sleeve_flared'
import Puffsleeve from './sleeve_puff'
import Cutawaysleeve from './sleeve_cutaway'

export default part => {
  let { store, options } = part.shorthand()

  if (options.sleevetype === 'flared') return Flaredsleeve(part)
  else if (options.sleevetype === 'puff') return Puffsleeve(part)
  else if (options.sleevetype === 'cutaway') return Cutawaysleeve(part)
  else return Basicsleeve(part)
}
