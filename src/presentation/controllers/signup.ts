import { MissingParamError } from '../errors/MissingParamError'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../interfaces/controllerInterface'
import { IRequest, IResponse } from '../interfaces/httpInterface'

export class SignUpController implements Controller {
  handle (httpRequest: IRequest): IResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
