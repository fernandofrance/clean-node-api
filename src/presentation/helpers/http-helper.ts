import { IResponse } from '../interfaces/httpInterface'

export const badRequest = (error: Error): IResponse => ({
  statusCode: 400,
  body: error
})
