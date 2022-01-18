import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";
import analytics from "../models/analytics.model";

export async function createShortUrl(req: Request, res: Response) {
    const { destination } = req.body;

    const newUrl = await shortUrl.create({ destination });

    return res.send(newUrl);
}

export async function handleRedirect(req: Request, res: Response) {
    const { shortId } = req.params;

    const short_des = await shortUrl.findOne({shortId}).lean();

    if (!short_des) {
        return res.sendStatus(404);
    }

    analytics.create({ shortUrl: short_des._id})

    return res.redirect(short_des.destination);
}

export async function getAnalytics(req: Request, res: Response) {
    const data = await analytics.find({}).lean();
  
    return res.send(data);
}