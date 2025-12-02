import type { Schema, Struct } from '@strapi/strapi';

export interface CardCard extends Struct.ComponentSchema {
  collectionName: 'components_card_card';
  info: {
    description: 'A card component to highlight features with an icon, title, description, and optional link.';
    displayName: 'Basic Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Component<'common.icon', false>;
    link: Schema.Attribute.Component<'common.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarouselCarousel extends Struct.ComponentSchema {
  collectionName: 'components_carousel_carousel';
  info: {
    description: 'A carousel component that displays multiple carousel items in a sliding format.';
    displayName: 'Carousel';
  };
  attributes: {
    items: Schema.Attribute.Component<'carousel.carousel-item', true> &
      Schema.Attribute.Required;
  };
}

export interface CarouselCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_carousel_carousel_item';
  info: {
    description: 'An individual item within a carousel component, containing an image and optional caption.';
    displayName: 'Carousel Item';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface CommonBrand extends Struct.ComponentSchema {
  collectionName: 'components_common_brands';
  info: {
    displayName: 'brand';
    icon: 'landscape';
  };
  attributes: {
    alt_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'xcellfund'>;
    link: Schema.Attribute.Component<'common.link', false>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Component<'common.icon', false>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface CommonHero extends Struct.ComponentSchema {
  collectionName: 'components_common_heros';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'link';
    name: 'hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'common.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonIcon extends Struct.ComponentSchema {
  collectionName: 'components_common_icons';
  info: {
    displayName: 'icon';
    icon: 'expand';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        'none',
        'faEnvelope',
        'faPhone',
        'faFacebookF',
        'faTwitter',
        'faInstagram',
        'faLinkedinIn',
        'faWarehouse',
        'faScaleBalanced',
        'faRedRiver',
        'faBlackberry',
        'faChevronRight',
      ]
    > &
      Schema.Attribute.DefaultTo<'none'>;
  };
}

export interface CommonInput extends Struct.ComponentSchema {
  collectionName: 'components_common_inputs';
  info: {
    displayName: 'input';
    icon: 'expand';
  };
  attributes: {
    icon: Schema.Attribute.Component<'common.icon', false>;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['text', 'email', 'tel', 'password', 'number', 'textarea']
    > &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    aria_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.Component<'common.icon', false>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'_self'>;
    type: Schema.Attribute.Enumeration<['text', 'phone', 'email']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonMenu extends Struct.ComponentSchema {
  collectionName: 'components_common_menus';
  info: {
    displayName: 'menu';
    icon: 'link';
  };
  attributes: {
    menu: Schema.Attribute.Component<'common.link', false>;
    submenu: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface ContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_forms';
  info: {
    displayName: 'contactform';
    icon: 'landscape';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    input: Schema.Attribute.Component<'common.input', true>;
  };
}

export interface FooterAddress extends Struct.ComponentSchema {
  collectionName: 'components_footer_addresses';
  info: {
    description: '';
    displayName: 'address';
    icon: 'link';
    name: 'address';
  };
  attributes: {
    address: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface FooterBranding extends Struct.ComponentSchema {
  collectionName: 'components_footer_brandings';
  info: {
    description: '';
    displayName: 'branding';
    icon: 'bars';
    name: 'branding';
  };
  attributes: {
    brand: Schema.Attribute.Component<'common.brand', false>;
    company_description: Schema.Attribute.Text;
  };
}

export interface FooterCopyright extends Struct.ComponentSchema {
  collectionName: 'components_footer_copyrights';
  info: {
    description: '';
    displayName: 'copyright';
    icon: 'link';
    name: 'copyright';
  };
  attributes: {
    copyright_text: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'footer';
    icon: 'bars';
    name: 'footer';
  };
  attributes: {
    address: Schema.Attribute.Component<'footer.address', false>;
    branding: Schema.Attribute.Component<'footer.branding', false>;
    copyright: Schema.Attribute.Component<'footer.copyright', false>;
    quicklinks: Schema.Attribute.Component<'footer.quicklink', false>;
  };
}

export interface FooterQuicklink extends Struct.ComponentSchema {
  collectionName: 'components_footer_quicklinks';
  info: {
    description: '';
    displayName: 'quicklink';
    icon: 'link';
    name: 'quicklins';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface GlobalContact extends Struct.ComponentSchema {
  collectionName: 'components_global_contacts';
  info: {
    displayName: 'contacts';
    icon: 'attachment';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'common.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GlobalMainmenu extends Struct.ComponentSchema {
  collectionName: 'components_global_mainmenus';
  info: {
    displayName: 'mainmenu';
    icon: 'attachment';
  };
  attributes: {
    brand: Schema.Attribute.Component<'common.brand', false>;
    menus: Schema.Attribute.Component<'common.menu', true>;
  };
}

export interface GlobalMap extends Struct.ComponentSchema {
  collectionName: 'components_global_maps';
  info: {
    displayName: 'map';
    icon: 'landscape';
  };
  attributes: {
    embed_link: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface GlobalTopnav extends Struct.ComponentSchema {
  collectionName: 'components_global_topnavs';
  info: {
    displayName: 'topnav';
    icon: 'attachment';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'common.link', true>;
    socials: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    description: 'A component to showcase various services offered, each represented by a card.';
    displayName: 'Services';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.card', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String;
  };
}

export interface HomeWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_home_who_we_are';
  info: {
    description: 'Who We Are section component for the home page.';
    displayName: 'who we are';
    name: 'Who We Are';
  };
  attributes: {
    left_content: Schema.Attribute.Component<'card.card', false> &
      Schema.Attribute.Required;
    right_content: Schema.Attribute.Component<'card.card', false> &
      Schema.Attribute.Required;
  };
}

export interface HomeWhoWeAreBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_who_we_are_banner';
  info: {
    description: 'A banner component for the Who We Are section on the home page.';
    displayName: 'Who We Are Banner';
  };
  attributes: {
    content: Schema.Attribute.Component<'card.card', false> &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'database';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    creator: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    keywords: Schema.Attribute.String;
    og_image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SubscriptionForm extends Struct.ComponentSchema {
  collectionName: 'components_subscription_forms';
  info: {
    displayName: 'form';
    icon: 'link';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    input: Schema.Attribute.Component<'common.input', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.card': CardCard;
      'carousel.carousel': CarouselCarousel;
      'carousel.carousel-item': CarouselCarouselItem;
      'common.brand': CommonBrand;
      'common.button': CommonButton;
      'common.hero': CommonHero;
      'common.icon': CommonIcon;
      'common.input': CommonInput;
      'common.link': CommonLink;
      'common.menu': CommonMenu;
      'contact.form': ContactForm;
      'footer.address': FooterAddress;
      'footer.branding': FooterBranding;
      'footer.copyright': FooterCopyright;
      'footer.footer': FooterFooter;
      'footer.quicklink': FooterQuicklink;
      'global.contact': GlobalContact;
      'global.mainmenu': GlobalMainmenu;
      'global.map': GlobalMap;
      'global.topnav': GlobalTopnav;
      'home.services': HomeServices;
      'home.who-we-are': HomeWhoWeAre;
      'home.who-we-are-banner': HomeWhoWeAreBanner;
      'seo.seo': SeoSeo;
      'subscription.form': SubscriptionForm;
    }
  }
}
