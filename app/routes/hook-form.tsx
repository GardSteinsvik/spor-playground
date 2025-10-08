import {Input, Stack} from '@vygruppen/spor-react'
import {useForm} from 'react-hook-form'

export default function Component() {
  const {register} = useForm({
    mode: 'onSubmit',
    values: {
      test: 1000,
    },
  })

  return (
    <Stack gap={2} maxW={'400px'}>
      <Input {...register('test')} label={'Test'} />
      <Input {...register('test')} label={'Test'} />
    </Stack>
  )
}
