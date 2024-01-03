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

  add: async (k: adduser): Promise<adduser> =>
    new Promise((resolve, reject) =>
      db.insert(k, (err, val: adduser) => (err ? reject(err) : resolve(val)))
    ),
  read: (): Promise<adduser[]> =>
    new Promise((resolve, reject) =>
      db.find({}, (err, val: adduser[]) => (err ? reject(err) : resolve(val)))
    ),
  delete: async (id: string) => {
    const k = await new Promise((resolve, reject) =>
      db.remove({ _id: id }, {}, (err, val) => {
        //err ? reject(err) : resolve(val)
        if (err) {
          return reject({ id, err })
        } else {
          return resolve({ id, val })
        }
      })
    )
    console.log(k)
    return k
  }
}
