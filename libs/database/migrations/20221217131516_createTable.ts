import { change } from 'rake-db';

change(async (db) => {
  await db.createTable('artworks', (t) => ({
    id: t.uuid().primaryKey(),
    name: t.text().nonempty(),
    slug: t.text().nonempty(),
    description: t.text(),
    madeAt: t.date().nullable(),
    showInGallery: t.boolean().default(false),
    showInPortfolio: t.boolean().default(false),
    imageId: t.text().nonempty(),
    watermarkedId: t.text().nullable(),
    designState: t.jsonText().nullable(),
    ...t.timestamps()
  }));
});
