import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
     <p className="text-sm text-gray-500 dark:text-gray-300">
        {' '}
    </p>

       <p className="text-sm text-gray-500 dark:text-gray-300">
       A Brophy version of the word guessing game we all know and
        love, Wordle! {' '}
    </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Created by Nick Zalle '23 - The Roundup
    </p>


    </BaseModal>
  )
}
