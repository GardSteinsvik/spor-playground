import {Input, Stack} from '@vygruppen/spor-react'
import {Controller, useForm} from 'react-hook-form'

export default function Component() {
  const {register, control} = useForm({
    mode: 'onSubmit',
    values: {
      test: 1000,
    },
  })

  return (
    <Stack gap={2} maxW={'400px'}>
      <Input {...register('test')} label={'Uncontrolled'} />
      <Controller name={'test'} control={control} render={({field}) => <Input {...field} label={'Controlled'} />} />
    </Stack>
  )
}
