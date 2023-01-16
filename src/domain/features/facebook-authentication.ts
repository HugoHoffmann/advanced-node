import { AccessToken } from '@/domain/models'
import { AuthenticationError } from '@/domain/errors'

export interface FacebookAuthentication {
  perform: (params: FacebookAuthentication.Params) => Promise<FacebookAuthentication.Return>
}

export namespace FacebookAuthentication {
  export type Params = {
    token: string
  }
  export type Return = AccessToken | AuthenticationError
}




