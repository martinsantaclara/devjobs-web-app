import nc from 'next-connect';
import Offer from '../../../models/Offer';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const offers = await Offer.find({});
    await db.disconnect();
    res.send(offers);
});

export default handler;
