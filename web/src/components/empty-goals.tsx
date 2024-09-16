import inOrbitLogo from '../assets/in-orbit-logo.svg'
import rocketLaunchIllustration from '../assets/rocket-launch-illustration.svg'

import { PlusIcon } from 'lucide-react'

import { Button } from '../components/ui/button'
import { DialogTrigger } from '../components/ui/dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={inOrbitLogo} alt="in.orbit" />
      <img src={rocketLaunchIllustration} alt="in.orbit" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <PlusIcon size={16} />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
