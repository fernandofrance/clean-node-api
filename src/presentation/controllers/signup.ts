import { MissingParamError } from '../errors/MissingParamError'
import { badRequest } from '../helpers/http-helper'
import { IHttpRequest, IHttpResponse } from '../protocols/IHttp'

export class SignUpController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
