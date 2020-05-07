import { TransformOptions } from './transform-options'

export interface ImageDetails {
  imagePath: string
  image: Buffer
  transformOptions: TransformOptions
}
