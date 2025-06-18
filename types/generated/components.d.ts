import type { Schema, Struct } from '@strapi/strapi';

export interface FunctionalComponentsCta extends Struct.ComponentSchema {
  collectionName: 'components_functional_components_ctas';
  info: {
    displayName: 'cta';
    icon: 'arrowRight';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    cssClasses: Schema.Attribute.String;
    displayMode: Schema.Attribute.Enumeration<['centered', 'dx', 'sx']> &
      Schema.Attribute.DefaultTo<'centered'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ImageComponentsGallery extends Struct.ComponentSchema {
  collectionName: 'components_image_components_galleries';
  info: {
    displayName: 'gallery';
    icon: 'picture';
  };
  attributes: {
    caption: Schema.Attribute.String;
    displayMode: Schema.Attribute.Enumeration<
      ['swiper', 'bento', 'scrollable', 'vertical']
    >;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ImageComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_image_components_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'envelop';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    caption: Schema.Attribute.String;
    cssClasses: Schema.Attribute.String;
    imageAlt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TextComponentsParagraph extends Struct.ComponentSchema {
  collectionName: 'components_text_components_paragraphs';
  info: {
    description: '';
    displayName: 'paragraph';
    icon: 'bold';
  };
  attributes: {
    cssClasses: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePosition: Schema.Attribute.Enumeration<
      ['dx', 'sx', 'center-top', 'center-bottom', 'background']
    > &
      Schema.Attribute.DefaultTo<'center-top'>;
    text: Schema.Attribute.Text;
  };
}

export interface TextComponentsQuote extends Struct.ComponentSchema {
  collectionName: 'components_text_components_quotes';
  info: {
    description: '';
    displayName: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    authorInfo: Schema.Attribute.String;
    authorLifespan: Schema.Attribute.String;
    cssClasses: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'functional-components.cta': FunctionalComponentsCta;
      'image-components.gallery': ImageComponentsGallery;
      'image-components.hero': ImageComponentsHero;
      'text-components.paragraph': TextComponentsParagraph;
      'text-components.quote': TextComponentsQuote;
    }
  }
}
