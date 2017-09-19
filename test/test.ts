import { expect, tap } from 'tapbundle'
import * as mongoschedule from '../ts/index'

tap.test('first test', async () => {
  console.log(mongoschedule.standardExport)
})

tap.start()
