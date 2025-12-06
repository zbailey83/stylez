export interface StyleDefinition {
  id: number;
  name: string;
  aesthetic: string;
  category: string;
  description: string;
  [key: string]: any; // Allow for the nested dynamic structure of the style definition
}

export interface GalleryData {
  styles: StyleDefinition[];
}