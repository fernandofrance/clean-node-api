import { IRequest, IResponse } from './httpInterface'

export interface Controller {
  handle (httpRequest: IRequest): IResponse
}
