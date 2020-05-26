import { QueryBuilder } from 'knex';
import { database } from './../../lib/database';
import * as flatSerializer from './../serializers/flat';
import { flatModel } from './../models/flat';
import { Request, Response } from "express";

export const index = async ( req: Request, res: Response) => {
  let query: QueryBuilder = await database('flats').select();
  if (req.query.limit) {
    query = query.limit(req.query.limit);
  } if (req.query.offset) {
    query = query.offset(req.query.offset);
  }
  const flats: Array<flatModel> = await query;
  res.json(flatSerializer.index(flats));
};

export const show = async ( req: Request, res: Response) => {
  try {
    const flat: flatModel = await database('flats').select().where({title: req.params.title}).first();
    if( typeof flat !== 'undefined') {
      res.json(flatSerializer.show(flat));
    } else  {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const create = async ( req: Request, res: Response) => {
  try  {
    const flat: flatModel = {
      title: req.body.title,
      price: req.body.price,
      floorArea: req.body.floorArea,
      country: req.body.country,
      zip: req.body.zip,
      city: req.body.city,
      street: req.body.street,
    }
    await database('flats').insert(flat);
    res.sendStatus(201);
  } catch (error ) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const update = async ( req: Request, res: Response) => {
  try {
    const flat: flatModel = await database('flats').select().where({title: req.params.title});
    if ( flat ) {
      const newFlat: flatModel = {
        title: req.body.title,
        price: req.body.price,
        floorArea: req.body.floorArea,
        country: req.body.country,
        zip: req.body.zip,
        city: req.body.city,
        street: req.body.street,
      }
      await database('flats').update(newFlat).where({ title: req.params.title });
      res.sendStatus(201);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const destroy = async ( req: Request, res: Response) => {
  try { 
    const flat: flatModel = await database('flats').select().where({title: req.params.title});
    if( flat ) {
      await database('flats').delete().where({title: req.params.title})
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}