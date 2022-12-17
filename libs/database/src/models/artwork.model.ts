// src/table.model.ts
import { Model } from './model'

export class ArtworkModel extends Model {
  table = 'artworks'
  columns = this.setColumns((t) => ({
    id: t.uuid().primaryKey(),
    name: t.text(3, 255).nonempty(),
    slug: t.text(3, 255).nonempty(),
    description: t.text(3, 10000),
    madeAt: t.date().nullable(),
    showInGallery: t.boolean().default(false),
    showInPortfolio: t.boolean().default(false),
    imageId: t.text(3, 255).nonempty(),
    watermarkedId: t.text(3, 255).nullable(),
    designState: t.jsonText().nullable(),
    ...t.timestamps()
  }))
}