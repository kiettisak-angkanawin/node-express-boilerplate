import { Request, Response } from 'express';

/**
 * Example controller that provides a healthcheck endpoint
 */
module Example {

  'use strict';

  /*
   * Return an empty 200 response
   */
  export function healthCheck (req: Request, res: Response) {
    const status = {
      status: 'ok'
    };
    res.json(status);
    res.end();
  }

}

export = Example;
