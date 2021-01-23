export interface GalleryImageInterface {
    [key: string]: any
}

export interface GalleryStateInterface {
    images: GalleryImageInterface[];
}

export const galleryState: GalleryStateInterface = { images: [] }