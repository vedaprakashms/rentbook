import { app } from '@electron/remote'
import { existsSync, mkdirSync } from 'fs'
import Datastore from 'nedb'
import { join } from 'path'

let db = new Datastore()
export const addtenant = {
  init: async () => {
    console.log(app.getPath('documents'))
    const dir = join(app.getPath('documents'), 'rentdata')

    if (!existsSync(dir)) {
      console.log('the directory dosent exist, Creating now')
      mkdirSync(dir)
      db = new Datastore({ filename: join(dir, 'tenants.db'), autoload: true })
      return {
        msg: 'The directory is created and the database initilized'
      }
    } else {
      console.log('the direcotrey exist and configured')
      db = new Datastore({ filename: join(dir, 'tenants.db'), autoload: true })
      return {
        msg: 'The database initilized'
      }
    }
  },
  add: async (k: adduser) => {
    console.log(k)
    db.insert(k, (e, r) => {
      e ? console.log : console.log(r)
    })
  },
  read: (): Promise<adduser[]> =>
    new Promise((resolve, reject) =>
      db.find({}, (err, val: adduser[]) => (err ? reject(err) : resolve(val)))
    )
}
