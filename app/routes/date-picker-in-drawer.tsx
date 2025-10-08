import {fromDate, toCalendarDate} from '@internationalized/date'
import {
  Box,
  Button,
  DatePicker,
  Drawer,
  DrawerBody,
  DrawerContent,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@vygruppen/spor-react'
import {useState} from 'react'

export default function Component() {
  const drawer = useDisclosure()
  const [date, setDate] = useState<Date | null>(new Date())

  return (
    <Stack gap={4}>
      <Text>Datovelgeren utenfor en Drawer eller Dialog oppfører seg normalt.</Text>
      <Box>
        <DatePicker
          label={'Dato'}
          variant={'core'}
          value={date ? toCalendarDate(fromDate(date, 'UTC')) : null}
          onChange={(value) => {
            setDate(value?.toDate('UTC') ?? null)
          }}
        />
      </Box>
      <Drawer open={drawer.open} onOpenChange={(e) => drawer.setOpen(e.open)} size={'full'} placement={'bottom'}>
        <Button variant={'primary'} onClick={drawer.onOpen}>
          Åpne Drawer
        </Button>
        <DrawerContent pb={0}>
          <DrawerBody>
            <Stack gap={6} width={'100%'} maxWidth={'6xl'} mx={'auto'} pt={4} pb={12}>
              <Heading as={'h2'} variant={'md'} fontWeight={'bold'}>
                Drawer
              </Heading>
              <Text>
                Datovelgeren lukker seg med en gang når man trykker på noe inni, f.eks. knappene for å endre måned.
              </Text>
              <Box>
                <DatePicker
                  label={'Dato'}
                  variant={'core'}
                  value={date ? toCalendarDate(fromDate(date, 'UTC')) : null}
                  onChange={(value) => {
                    setDate(value?.toDate('UTC') ?? null)
                  }}
                />
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
}
